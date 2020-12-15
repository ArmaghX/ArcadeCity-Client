import React, { Component } from 'react';


import find from './../../assets/lupa.png'


class CityMainSearch extends Component {
    render() {
        return (
            <div style={{border: "2px solid", borderColor: "black", marginTop: 40, marginBottom: 10, display: "flex", padding: 8}}>
                <img src={find} style={{height: "auto", width: 20, marginRight: 6}} alt="find" />
                <input className="searchCity" type="text" name="city" placeholder="City" style={{border: "none", textAlign: "center"}} />
            </div>
        )
    }
}

export default CityMainSearch;