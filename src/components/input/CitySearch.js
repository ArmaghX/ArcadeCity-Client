import React, { Component } from 'react';
import Styles from './Style.css';


class CitySearch extends Component {
    render() {
        return (
            <div style={{backgroundColor: "grey", border: "2px solid", borderColor: "white", marginTop: 40, marginBottom: 20}}>
                <input className="placeholder" type="text" name="city" placeholder="Insert City" style={{backgroundColor: "grey", color: "white", textAlign: "center"}} />
            </div>
        )
    }
}

export default CitySearch;