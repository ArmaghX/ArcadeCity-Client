import React, { Component } from 'react';

import CityMainSearch from './../components/input/CityMainSearch';
import FilterResultsBtn from './../components/FilterBtn';
import ModalFilters from './../components/ModalFilters';
import ArcadeCard from '../components/arcade-cards/ArcadeCard';

// Import Service
import ApiService from './../lib/api-service';

// Import Assets
import hero from './../assets/arcada.png';

class SearchResults extends Component {
    state = {
        showModal: false,
        showArcadeDetails: false,
        arcades: [],
        arcadeToShow: {},
    }

    componentDidMount(){
        // Get the city from the URL
        this.getResultsCity();
        // This.props.match.params.city
        // Make get request with the City name to get the Arcades
        // Set the response with the Arcades to the State
    }

    showArcadeDetails = (arcadeObj) => {
        // set the state of showArcadeDetails to true and also set arcadeToShow in the same this.setState
    }

    closeArcadeDetails = () => {
        // set the state of showArcadeDetails to false
    }

    getResultsCity = () => {
        let {city} = this.props.match.params;
        // console.log(this.props.location)
        ApiService.getArcades(city)
            .then((response) => {
                console.log(response);
                this.setState({arcades: response.data})
            })
    }

    render() {

        const handleModal = () => {
            this.setState({showModal: !this.state.showModal})
        };

        return (
            <div style={{width: "100vw", height: "100vh", display: "flex", alignItems: "center", flexDirection: "column"}}>
                <img src={hero} style={{width: "auto", height: 80, marginTop: 30}} alt="" />
                <CityMainSearch />

                {this.state.showArcadeDetails
                    ? <div>Show the big card from this.arcadeToShow </div>
                    : null
                }
                <FilterResultsBtn onClick={() => handleModal()} />
                {this.state.showModal && <ModalFilters onClick={() => handleModal()} />}
                {this.state.arcades.length > 0 
                ? this.state.arcades.map((element) => {
                    return <ArcadeCard key={element._id} arcade={element} showArcadeDetails={this.showArcadeDetails} />}
                )
                : <p>No results found for this City</p>
                }

            </div>
        )
    }
}

export default SearchResults;