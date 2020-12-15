import React, { Component } from 'react';

class ArcadeCard extends Component {
    render() {
        return (
            <div style={{border: "2px solid black", borderRadius: 6}}>
                <img src={this.props.arcade.gallery} alt="arcadeImage" />
                <h4>{this.props.arcade.game}</h4>
                <button onClick={() => this.props.showArcadeDetails(this.props.arcade)}></button>
            </div>
        )
    }
}

export default ArcadeCard;