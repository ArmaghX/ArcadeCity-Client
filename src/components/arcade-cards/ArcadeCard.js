import React, { Component } from 'react';

class ArcadeCard extends Component {
    state = {
        
    }
    
    componentDidMount() {

    }




    render() {
        return (
            <div style={{border: "2px solid black", borderRadius: 6}}>
                <div style={{padding: "10px" ,display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <img src={this.props.arcade.gallery} alt="arcadeImage" />
                    <h4 style={{border: "2px solid black"}}>{this.props.arcade.game}</h4>
                    {this.props.currentUser && this.props.currentUser._id === this.props.arcade.hunterId && this.props.isEditing
                    ? <button style={{position: "absolute", border: "2px solid black"}}>X</button>
                    : null
                    }
                </div>
                <div style={{display: "flex", justifyContent: "flex-end"}}>
                    <button  onClick={() => this.props.showArcadeDetails(this.props.arcade)}>Show Arcade Details</button>
                </div>
            </div>
        )
    }
}

export default ArcadeCard;