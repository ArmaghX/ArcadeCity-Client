import React, { Component } from 'react';
import CityMainSearch from './../components/input/CityMainSearch';
import FilterResultsBtn from './../components/FilterBtn';
import ModalFilters from './../components/ModalFilters';

// Import Assets
import hero from './../assets/arcada.png';

class SearchResults extends Component {
    state = {
        showModal: false,
        arcades: [],
        arcadeToShow: {}
    }

    componentDidMount(){
        // Get the city from the URL
        // This.props.match.params.city
        // Make get request with the City name to get the Arcades
        // Set the response with the Arcades to the State
    }

    render() {

        const handleModal = () => {
            this.setState({showModal: !this.state.showModal})
        };

        return (
            <div style={{width: "100vw", height: "100vh", display: "flex", alignItems: "center", flexDirection: "column"}}>
                <img src={hero} style={{width: "auto", height: 80, marginTop: 30}} />
                <CityMainSearch />
                <FilterResultsBtn onClick={() => handleModal()} />
                {this.state.showModal && <ModalFilters onClick={() => handleModal()} />}

            </div>
        )
    }
}

export default SearchResults;