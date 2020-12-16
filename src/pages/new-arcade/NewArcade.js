import React, { Component } from 'react';
import { withAuth } from './../../context/auth-context';

import apiService from '../../lib/api-service';
import axios from 'axios';


class NewArcade extends Component {
    state = {
        game: "",
        description: "",
        maxPlayers: 1,
        isEmulated: false,
        coins: "",
        yearReleased: 1980,
        gallery: "",
        long: 0,
        lat: 0,
        contactInfo: "",
        address: "",
        city: ""
    }

    handleChange = (event) => {
        let { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const {
            game, 
            description, 
            maxPlayers, 
            isEmulated, 
            coins, 
            yearReleased, 
            highestScores, 
            gallery, 
            long,
            lat, 
            contactInfo, 
            address, 
            city
        } = this.state;

        const coordinates = [long, lat];

        apiService.createArcade(        
            game,
            description,
            maxPlayers,
            isEmulated,
            coins,
            yearReleased,
            highestScores,
            gallery,
            coordinates,
            contactInfo,
            address,
            city
        )
        .then((newArcade) => {
            console.log(newArcade);
            this.props.history.push(`/arcade-details/${newArcade._id}`);
        })
        .catch((err) => console.log(err));
        

        
        
    };

    handleFileUpload = (e) => {
        console.log("The file to be uploaded is: ", e.target.files);
        const file = e.target.files[0];
    
        const uploadData = new FormData();
        // image => this name has to be the same as in the model since we pass
        // req.body to .create() method when creating a new project in '/api/projects' POST route
        uploadData.append("gallery", file);
    
        axios
          .post(`${process.env.REACT_APP_API_URL}/api/arcades/upload`, uploadData, {
            withCredentials: true,
          })
          .then((response) => {
            console.log("response is: ", response);
            // after the console.log we can see that response carries 'secure_url' which we can use to update the state
            this.setState({ gallery: response.data.secure_url });
          })
          .catch((err) => {
            console.log("Error while uploading the file: ", err);
          });
      };
    

    render() {
        return (
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", height: "100vh"}}>

             <h2> Create New Arcade</h2>
            
              <form className="createArcadeForm" onSubmit={this.handleSubmit} style={{textAlign: "center"}}>
                <label > Game *</label><br/>
                    <input style={{marginBottom: 20}} type="text" name="game" value={this.state.game} onChange={this.handleChange} placeholder="Name the Arcade" /><br/>
                <label> Description </label><br/>
                    <textarea style={{marginBottom: 20}} name="description" value={this.state.description} onChange={this.handleChange} placeholder="Add a brief description" /><br/>
                <label> Maximum Number of Players </label><br/>
                    <input style={{marginBottom: 20}} type="number" name="maxPlayers" value={this.state.maxPlayers} onChange={this.handleChange} /><br/>
                <label> Is Emulated? </label>
                    <input style={{marginBottom: 20}} type="checkbox" name="isEmulated" value={this.state.isEmulated} onChange={this.handleChange} /><br/>
                <label> Coins per Game </label><br/>
                    <input style={{marginBottom: 20}} type="number" name="coins" value={this.state.coins} onChange={this.handleChange} placeholder="0.50" /><br/>
                    <label> Year Released </label><br/>
                    <input style={{marginBottom: 20}} type="number" name="yearRelease" value={this.state.yearRelease} onChange={this.handleChange} placeholder="1970" min="1970" max="2020" /><br/>
                <label> Maximum Number of Players </label><br/>
                    <input style={{marginBottom: 20}} type="number" name="maxPlayers" value={this.state.maxPlayers} onChange={this.handleChange} min="1" max="8" /><br/>
                <label> Arcade Picture *</label><br/>
                    <img style={{ width: "100px" }} src={this.state.gallery} alt="" /><br/>
                    <input style={{marginBottom: 20}} type="file" name="gallery" onChange={this.handleFileUpload} /><br/>
                    <label> Contact Info </label><br/>
                    <textarea style={{marginBottom: 20}} type="text" name="contactInfo" value={this.state.contactInfo} onChange={this.handleChange} placeholder="Where did you find this Arcade?" /><br/>
                <label>Provide the Location Coordinates (For map location) </label><br/>
                    <input type="number" name="long" placeholder="Longitude" onChange={this.handleChange} value={this.state.long}/><br/>
                    <input style={{marginBottom: 20}} type="number" name="lat" placeholder="Latitude" onChange={this.handleChange} value={this.state.lat}/> <br/>
                <label> Address *</label><br/>
                    <input style={{marginBottom: 20}} type="text" name="address" value={this.state.address} onChange={this.handleChange} placeholder="Current Location" /><br/>
                <label> City *</label><br/>
                    <input style={{marginBottom: 20}} type="text" name="city" value={this.state.city} onChange={this.handleChange} placeholder="City" /><br/>
                    <p>* is for Mandatory Fields</p>
                <button type="submit"> 
                  CREATE NEW ARCADE 
                </button>
              </form>
            </div>
        )
    }
}

export default withAuth(NewArcade);