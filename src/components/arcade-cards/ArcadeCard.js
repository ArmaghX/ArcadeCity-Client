import React, { Component } from 'react';
import BigArcadeCard from './BigArcadeCard';

class ArcadeCard extends Component {
    render() {
        return (
            <div style={{border: "2px solid black", borderRadius: 6}}>
                <div style={{display: "flex", flexDirection: "row", alignContent: "space-around"}}>
                    <img src={this.props.arcade.gallery} alt="arcadeImage" />
                    <h4>{this.props.arcade.game}</h4>
                </div>
                <div>
                    <button style={{display: "flex", alignItems: "center", justifyContent: "center"}} onClick={() => this.props.showArcadeDetails(this.props.arcade)}>Show Arcade Details</button>
                </div>
            </div>
        )
    }
}

export default ArcadeCard;