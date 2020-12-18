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
        const { 
            arcade, 
            centerMapToLocation, 
            isEditing, 
            currentUser, 
            showArcadeDetails, 
            eraseListedArcade,
            showLocationButton,
        } = this.props;

        const {arcadeId} = this.state;

        return (
            <div style={{display: "inline-block", margin: "0px 40px" ,border: "2px solid black", borderRadius: 6, marginBottom: 20, width: 350}}>
                <div style={{padding: "10px" ,display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <img src={arcade.gallery} alt="arcadeImage" />
                    <h4>{arcade.game}</h4>
                    {currentUser && currentUser._id === arcade.hunterId && isEditing
                    ? <button onClick={() => eraseListedArcade(arcadeId)} style={{position: "absolute", border: "2px solid black"}}>DELETE</button>
                    : null
                    }
                </div>
                <div style={{display: "flex", justifyContent: "flex-end"}}>
                    { currentUser && currentUser._id === arcade.hunterId
                    ? <button  onClick={() => showArcadeDetails(arcadeId)}>Show Arcade Details</button>
                    : <button  onClick={() => showArcadeDetails(arcade)}>Show Arcade Details</button>
                    }
                    {
                        // AND operator short-circuit evaluation
                        //showLocationButton && <button onClick={() => centerMapToLocation(arcade.location.coordinates)}>SHOW LOCATION</button>
                        showLocationButton 
                            ? <button onClick={() => centerMapToLocation(arcade.location.coordinates)}>SHOW LOCATION</button>
                            : null

                    }
                </div>
            </div>
        )
    }
}

export default ArcadeCard;