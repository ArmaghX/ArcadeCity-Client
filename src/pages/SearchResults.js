import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mapboxgl from 'mapbox-gl';

import CityMainSearch from './../components/input/CityMainSearch';
import ArcadeCard from '../components/arcade-cards/ArcadeCard';
import BigArcadeCard from './../components/arcade-cards/BigArcadeCard';

// Import Service
import ApiService from './../lib/api-service';

// Import Assets
import hero from './../assets/arcada.png';

mapboxgl.accessToken = 'pk.eyJ1IjoiYXJtYWdoIiwiYSI6ImNraG96eTFpcTA1emkzMm1nZzVrc2txOHUifQ.yIaLGo59V7W_htl-pwIj0A';

class SearchResults extends Component {
    state = {
        showModal: false,
        showArcadeDetails: false,
        arcades: [],
        arcadeToShow: {},
        city: "",
        lng: 5,
        lat: 34,
        zoom: 13
    }

    componentDidMount(){
        this.getResultsCity();
            // We create and setup the mapbox map
        this.map = new mapboxgl.Map({
        container: this.mapContainer,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [this.state.lng, this.state.lat], // at the monet we use hardcoded location coordinates
        zoom: this.state.zoom,
      });
  
      // Retrieves the geolocation using the browser's Navigator API
      // Docs: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            var pos = [position.coords.longitude, position.coords.latitude];
            this.map.setCenter(pos);
          },
          () => alert("Issue retrieving your location")
        );
      } else {
        alert(" Your browser doesn't support Geolocation");
      }

    }

    showArcadeDetails = (arcadeObj) => {
        this.setState({showArcadeDetails: true, arcadeToShow: {arcadeObj}})
    }

    closeArcadeDetails = () => {
        this.setState({showArcadeDetails: false})
    }

    getResultsCity = (cityArg) => {
        const cityFromURL = this.props.match.params.city;
        let city;

        if (!cityArg) {
            city = cityFromURL;
        }
        else if (cityArg) {
            city = cityArg;
        }
        ApiService.getArcades(city)
            .then((response) => {
                if (this.map) {
                    const arcades = response.data;
                    arcades.forEach((arcade) => {
                      const marker = new mapboxgl.Marker({
                        color: "#C52C7C",
                      });
                      marker
                        .setLngLat(arcade.location.coordinates)
                        .addTo(this.map);
                    });
                  }
                this.setState({arcades: response.data})
            })
    }

    centerMapToLocation = (coordsArr) => {
        this.map.setCenter(coordsArr);
    }

    render() {


        return (
            <div className="search-main-div">
                <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
                
                <div className="search-div-zIndex">
                <div className="search-div-align-center">
                <Link to={'/'}>
                    <img src={hero} style={{width: "auto", height: 80, marginTop: 30}} alt="" />
                </Link>

                <CityMainSearch getResultsCity={this.getResultsCity} />


                {this.state.showArcadeDetails
                    ? <BigArcadeCard closeArcadeDetails={this.closeArcadeDetails} arcadeToShow={this.state.arcadeToShow}/>
                    : null
                }
                </div>
                <div className="search-div-overflow">

                {this.state.arcades.length > 0 
                ? this.state.arcades.map((element) => {
                    return (
                        <ArcadeCard 
                            key={element._id} 
                            arcade={element} 
                            showLocationButton={true}
                            showArcadeDetails={this.showArcadeDetails} 
                            centerMapToLocation={this.centerMapToLocation} 

                            />)}
                )
                : <p>No results found for this City</p>
                }
                </div>

                </div>
            </div>
        )
    }
}

export default SearchResults;