import React, { Component } from 'react';

class ArcadeCard extends Component {
    state = {
        arcadeId: ""
    }
    
    componentDidMount() {
        const arcadeId = this.props.arcade._id;
        this.setState({arcadeId: arcadeId})
    }


    render() {
    console.log(this.props);
        return (
            <div style={{border: "2px solid black", borderRadius: 6, marginBottom: 20, width: 350}}>
                <div style={{padding: "10px" ,display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <img src={this.props.arcade.gallery} alt="arcadeImage" />
                    <h4 style={{border: "2px solid black"}}>{this.props.arcade.game}</h4>
                    {this.props.currentUser && this.props.currentUser._id === this.props.arcade.hunterId && this.props.isEditing
                    ? <button onClick={() => this.props.eraseListedArcade(this.state.arcadeId)} style={{position: "absolute", border: "2px solid black"}}>DELETE</button>
                    : null
                    }
                </div>
                <div style={{display: "flex", justifyContent: "flex-end"}}>
                    <button  onClick={() => this.props.showArcadeDetails(this.props.arcade._id)}>Show Arcade Details</button>
                </div>
            </div>
        )
    }
}

export default ArcadeCard;