import React, { Component } from 'react';

class BigArcadeCard extends Component {
    
    render() {

        const bigcardProps = this.props.arcadeToShow.arcadeObj;

        return (
            <div style={{position: "absolute", height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "rgba(89, 89, 89, 0.50)"}}>
                <div style={{border: "2px solid black", height: "50%", width: "50%", backgroundColor: "white"}}>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginBottom: 40}}>
                    <button onClick={this.props.closeArcadeDetails} >
                        <span> Close </span>
                    </button>
                    <p>Listed by {bigcardProps.hunterId.player}</p>
                    </div>
                    <div style={{height: "70%", width: "100", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center"}}>
                        <img src={bigcardProps.gallery} alt="" />
                        <p>Game: {bigcardProps.game} {bigcardProps.yearReleased}</p>
                        <p>Description: {bigcardProps.description}</p>

                        {!bigcardProps.contactInfo
                        ? <p>No contact Info Available</p>
                        : <p>{bigcardProps.contactInfo}</p>
                        }

                        {!bigcardProps.address
                        ? <p>No contact Info Available</p>
                        : <p>{bigcardProps.address}</p>
                        }

                    </div>
                </div>
            </div>
        )
    }
}

export default  BigArcadeCard;