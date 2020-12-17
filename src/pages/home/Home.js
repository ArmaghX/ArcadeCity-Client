import React from "react";
import { Link } from "react-router-dom";
import apiService from '../../lib/api-service';

// Import Assets
import hero from './../../assets/arcada.png';
import insertCoinBtn from './../../assets/inserte-moneda.png';
import find from './../../assets/lupa.png'
import './Style.css';

class Home extends React.Component {
  state = {
    city: ""
  }

  componentDidMount () {
    apiService.me()
     .then((user) => this.setState({ isLoggedIn: true, user: user, isLoading: false }))
     .catch((err) => this.setState({ isLoggedIn: false, user: null, isLoading: false }));
  }

  handleInput = (event) => {
    const city = event.target.value;
    this.setState({city: city});

  }

  goToSearchResults = () => {
    this.props.history.push(`/search/${(this.state.city).toLowerCase()}`)
  }

  render(){

    return (
      <div className="main-div"> 
        <h1>Welcome to ArcadeCity</h1>
        <img src={hero} alt="Main" style={{height: 230}} />
         <div className="home-search-bar" style={{marginTop: 40, marginBottom: 10, padding: 8}}>
          <img src={find} style={{height: "auto", width: 20, marginRight: 6}} alt="" />
          <input className="searchCity" type="text" name="city" value={this.state.city} onChange={this.handleInput} placeholder="City" style={{border: "none", textAlign: "center"}} />
         </div>
        <button style={{border: "none", backgroundColor: "white"}} onClick={this.goToSearchResults}>
          <img src={insertCoinBtn} alt="Main" style={{height: 60, width: "auto", objectFit: "contain"}} />
        </button>
      </div>
    )
  }
  
}

export default Home;