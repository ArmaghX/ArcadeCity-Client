import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import apiService from '../../lib/api-service';

import CitySearchBar from "../../components/CitySearchBar";

import CitySearch from '../../components/input/CitySearch';

// Import Assets
import hero from './../../assets/arcada.png';
import insertCoinBtn from './../../assets/inserte-moneda.png';

class Home extends React.Component {

  componentDidMount () {
    apiService.me()
     .then((user) => this.setState({ isLoggedIn: true, user: user, isLoading: false }))
     .catch((err) => this.setState({ isLoggedIn: false, user: null, isLoading: false })); // Delete Current User and set state-flags ¿? L43 (api-service 24)
  }


  render(props){

    const goToSearchResults = () => {
      this.props.history.push('/search')
    }

    return (
      <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", height: "100vh"}}> 
        <h1 style={{marginBottom: 40}}>Welcome to ArcadeCity</h1>
        <img src={hero} alt="Main" style={{height: 230, width: "auto", objectFit: "contain"}} />
        <CitySearch />
        <button style={{border: "none", backgroundColor: "white"}} onClick={() => goToSearchResults()}>
          <img src={insertCoinBtn} alt="Main" style={{height: 60, width: "auto", objectFit: "contain"}} />
        </button>
      </div>
    )
  }
  
}

export default Home;