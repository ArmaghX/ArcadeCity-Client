import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import apiService from './../../lib/api-service';

// Import Assets
import hero from './../../assets/arcada.png';
import fav from './../../assets/estrella.png';
import unFav from './../../assets/silueta-de-estrella-negra.png';

class ArcadeDetails extends Component {
    state = {
        arcadeToDisplay: {},
        isFavourite: false
    }

    componentDidMount() {

        let {id} = this.props.match.params;
        apiService.getOneArcade(id)
            .then((arcade) => {
                this.setState({arcadeToDisplay: arcade})
                const filteredFavArcade = this.state.arcadeToDisplay.hunterId.favourites.filter((data) => data === arcade._id)
                if (filteredFavArcade[0] === id) {
                    this.setState({isFavourite: true})
                }
            })
            .catch((err) => console.log(err));

    }

    addNewFavourite = () => {
        const id = this.props.match.params.id
        const filteredFavArr = this.state.arcadeToDisplay.hunterId.favourites.filter((data) => data === id)
        if (filteredFavArr === id) {
            return;
        } else {
            apiService.addFavourites(id)
            .then(() => {
                this.setState({isFavourite: true})
            })
        }
        
    }

    removeNewFavourite = () => {
        const id = this.props.match.params.id
        apiService.removeFavourites(id)
            .then(() => {
                this.setState({isFavourite: false})
            })
    }

    
    render() {
        return (
            <div style={{height: "100vh", display: "flex", alignItems: "center", flexDirection: "column", marginTop: 30}}>
                
                <div style={{width: "600px", height: "3vh", display: "flex", justifyContent: "center", marginBottom: 70}}>
                    <Link to={'/'}>
                    <img src={hero} style={{width: "auto", height: 80}} alt="" />
                    </Link>
                </div>
                <div style={{display: "flex", alignItems: "center", flexDirection: "column", padding: 20}}>
                    <h2>ARCADE DETAILS</h2>
                    { !this.state.isFavourite
                    ? 
                      <>
                        <button onClick={this.addNewFavourite} style={{border: "none" ,backgroundColor: "white", height: "40px", marginBottom: 20}}>
                            <img src={fav} alt="" style={{width: "auto", height: 30}} />
                        </button>
                      </>
                    :

                    <>
                        <button onClick={this.removeNewFavourite} style={{border: "none" ,backgroundColor: "white", height: "40px", marginBottom: 20}}>
                            <img src={unFav} alt="" style={{width: "auto", height: 30}} />
                        </button>
                    </>

                    }
                    <img src={this.state.arcadeToDisplay.gallery} alt="" />
                </div>
                <h3>{this.state.arcadeToDisplay.game}</h3>
                    { this.state.arcadeToDisplay.yearReleased && 
                        <p>{this.state.arcadeToDisplay.yearReleased}</p>
                    }
                <div>
                    <div>
                    { this.state.arcadeToDisplay.description && 
                        <p>{this.state.arcadeToDisplay.description}</p>
                    }
                    </div>
                    <div>
                        { this.state.arcadeToDisplay.contactInfo && 
                            <p>{this.state.arcadeToDisplay.contactInfo}</p>
                        }
                        <p>{this.state.arcadeToDisplay.address}, {this.state.arcadeToDisplay.city}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ArcadeDetails;