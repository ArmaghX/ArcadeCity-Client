import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import apiService from './../../lib/api-service';

// Import Assets
import hero from './../../assets/arcada.png';
import fav from './../../assets/estrella.png';

class ArcadeDetails extends Component {
    state = {
        arcadeToDisplay: {}
    }

    componentDidMount(){

        let {id} = this.props.match.params;
        console.log(id)
        apiService.getOneArcade(id)
            .then((arcade) => {
                this.setState({arcadeToDisplay: arcade})
            })
            .catch((err) => console.log(err));

    }

    render() {
        return (
            <div style={{height: "100vh", display: "flex", alignItems: "center", flexDirection: "column", marginTop: 30}}>
                
                <div style={{width: "600px", height: "3vh" ,display: "flex", justifyContent: "space-around", marginBottom: 70}}>
                    <button> BACK </button>
                    <Link to={'/'}>
                    <img src={hero} style={{width: "auto", height: 80}} alt="" />
                    </Link>
                    <button>UPDATE</button>
                </div>
                <div style={{display: "flex", alignItems: "center", flexDirection: "column", padding: 20}}>
                    <h2>ARCADE DETAILS</h2>
                    <button style={{border: "none", backgroundColor: "white", height: "40px", marginBottom: 20}}>
                        <img src={fav} alt="" style={{width: "auto", height: 30}} />
                    </button>
                    <img src={this.state.arcadeToDisplay.gallery} alt="" />
                </div>
                <h3></h3>
                <div>

                </div>
            </div>
        )
    }
}

export default ArcadeDetails;