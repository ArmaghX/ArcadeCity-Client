import React, { Component } from 'react';

import apiService from '../../lib/api-service';

import Styles from './Styles.css';


class NewArcade extends Component {
    state = {
        game: "",
        description: "",
        maxPlayers: 1,
        isEmulated: false,
        coins: 0.50,
        yearReleased: 1980,
        highestScores: [],
        gallery: "",
        coordinates: ["", ""],
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
            coordinates, 
            contactInfo, 
            address, 
            city
        } = this.state;

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
            .then(() => {
                this.props.history.push('/arcade-details');
            })
            .catch((err) => console.log(err));
        

        
        
    };

    render() {
        return (
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", height: "100vh"}}>

             <h2> Create New Arcade</h2>
            
              <form className="createArcadeForm" onSubmit={this.handleSubmit} style={{textAlign: "center"}}>
                <label > Title </label><br/>
                    <input style={{marginBottom: 20}} type="text" name="game" value={this.state.game} onChange={this.handleChange} placeholder="Name the Arcade" /><br/>
                <label> Description </label><br/>
                    <textarea style={{marginBottom: 20}} name="description" value={this.state.description} onChange={this.handleChange} placeholder="Add a brief description" /><br/>
                <label> Maximum Number of Players </label><br/>
                    <input style={{marginBottom: 20}} type="number" name="maxPlayers" value={this.state.maxPlayers} onChange={this.handleChange} /><br/>
                <label> Original / Emulated </label>
                    <input style={{marginBottom: 20}} type="checkbox" name="isEmulated" value={this.state.isEmulated} onChange={this.handleChange} /><br/>
                <label> Coins per Game </label><br/>
                    <input style={{marginBottom: 20}} type="number" name="coins" value={this.state.coins} onChange={this.handleChange} /><br/>
                    <label> Year Released </label><br/>
                    <input style={{marginBottom: 20}} type="number" name="yearRelease" value={this.state.yearRelease} onChange={this.handleChange} placeholder="1970" min="1970" max="2020" /><br/>
                <label> Maximum Number of Players </label><br/>
                    <input style={{marginBottom: 20}} type="number" name="maxPlayers" value={this.state.maxPlayers} onChange={this.handleChange} min="1" max="8" /><br/>
                <label> Gallery Pictures </label><br/>
                    <input style={{marginBottom: 20}} type="file" name="gallery" value={this.state.gallery} onChange={this.handleChange} /><br/>
                <label>Provide the Location Coordinates (Optional) </label><br/>
                    <input type="text" name="coordinates" placeholder="Longitude" onChange={this.handleChange} value={this.coordinates}/><br/>
                    <input style={{marginBottom: 20}} type="text" name="coordinates" placeholder="Latitude" onChange={this.handleChange} value={this.coordinates}/> <br/>
                <label> Address </label><br/>
                    <input style={{marginBottom: 20}} type="text" name="address" value={this.state.address} onChange={this.handleChange} placeholder="Describe the Arcade" /><br/>
                <label> City </label><br/>
                    <input style={{marginBottom: 20}} type="text" name="city" value={this.state.city} onChange={this.handleChange} placeholder="City" /><br/>
                <button type="submit"> 
                  CREATE NEW ARCADE 
                </button>
              </form>
            </div>
        )
    }
}

export default NewArcade;