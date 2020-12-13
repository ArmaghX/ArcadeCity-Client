import React from 'react';
import axios from 'axios';
import apiService from './../lib/api-service';


class CitySearchBar extends React.Component {
    state = {
        city: "",
        resultsByCity: []
    }

    handleChange = (event) => {
        let { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        apiService.getArcades()
         .then((response) => {
            this.setState({ resultsByCity: response.data})
            console.log('THIS IS THE ARCADES ARRAY', this.state.resultsByCity)
            
            // this.props.filterByCity(this.state.city);
            this.setState({city: ""});
        })
         .catch((err) => console.log(err));

        
        
    };

    render() {
        return(
            <form className="" onSubmit={this.handleSubmit}>
                <label> City </label>
                <input type="text" name="city" value={this.state.city} onChange={this.handleChange} placeholder="Find City" />
                <button type="submit"> SEARCH </button>
            </form>

        )
    }
}

export default CitySearchBar;