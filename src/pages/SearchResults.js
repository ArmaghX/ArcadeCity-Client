import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CityMainSearch from './../components/input/CityMainSearch';
import FilterResultsBtn from './../components/FilterBtn';
import ModalFilters from './../components/ModalFilters';
import ArcadeCard from '../components/arcade-cards/ArcadeCard';
import BigArcadeCard from './../components/arcade-cards/BigArcadeCard';

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
        this.getResultsCity();
    }

    showArcadeDetails = (arcadeObj) => {
        this.setState({showArcadeDetails: true, arcadeToShow: {arcadeObj}})
    }

    closeArcadeDetails = () => {
        this.setState({showArcadeDetails: false})
    }

    getResultsCity = () => {
        let {city} = this.props.match.params;
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
                
                <Link to={'/'}>
                    <img src={hero} style={{width: "auto", height: 80, marginTop: 30}} alt="" />
                </Link>

                <CityMainSearch />

                {this.state.showArcadeDetails
                    ? <BigArcadeCard closeArcadeDetails={this.closeArcadeDetails} arcadeToShow={this.state.arcadeToShow}/>
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