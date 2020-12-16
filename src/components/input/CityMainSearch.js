import React, { Component } from 'react';

import FilterBtn from './../FilterBtn';
import find from './../../assets/lupa.png'


class CityMainSearch extends Component {
    state = {
        city: ""
    }

    handleInput = (event) => {
        const city = event.target.value;
        this.setState({city: city});
        console.log(this.props.city)
      }

    handleSearch = () => {
        this.props.getResultsCity(this.state.city)
        this.setState({city: ''})
    }

    render() {
        return (
            <div style={{border: "2px solid", borderColor: "black", marginTop: 40, marginBottom: 10, display: "flex", padding: 8}}>
                <img src={find} style={{height: "auto", width: 20, marginRight: 6}} alt="find" />
                <input className="searchCity" type="text" name="city" placeholder="City" value={this.state.city} onChange={this.handleInput} style={{border: "none", textAlign: "center"}} />
                <FilterBtn onClick={this.handleSearch} />
            </div>
        )
    }
}

export default CityMainSearch;