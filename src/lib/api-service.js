import axios from "axios";


// THIS IS AN EXAMPLE THAT YOU CAN USE 
// TO CREATE A SERVICE FOR YOUR AXIOS CALLS
class ApiService {
  constructor() {
    // this.api  is a reusable base of the request containing the base url (baseURL) 
    // of the API and the options ( `withCredentials: true` )
    this.api = axios.create({        
      baseURL: `${process.env.REACT_APP_API_URL}/api`, // baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true
    });
  }

  /* PLAYER ROUTE - USER AND PLAYERS */

  me() {
    const pr = this.api
      .get("/player/me")
      .then((response) => response.data);

    return pr;
  }

  deleteMe() {
    const pr = this.api
      .delete("/player/me")
      .then((response) => response.data);

    return pr;
  }

  updateMe() {
    const pr = this.api
      .put("/player/me")
      .then((response) => response.data);

    return pr;
  }

  getPlayer(player) {
    const pr = this.api
      .get(`/player/${player}`)
      .then((response) => response.data);

    return pr;
  }


  /* ARCADES ROUTE - ARCADE MACHINES RELATED */

    // Get all arcades or by filters
  getArcades = (city) => {
    const pr = this.api
      .get(`/arcades/search/${city}`)

    return pr;
  }

  getOneArcade = (id) => {
    const pr = this.api
      .get(`/arcades/${id}`)
      .then((response) => response.data);

    return pr;
  }

  createArcade = (
    game, 
    description, 
    maxPlayers, 
    isEmulated, 
    rating, 
    isActive, 
    coins, 
    yearReleased, 
    gallery, 
    hunterId, 
    coordinates, 
    contactInfo, 
    address, 
    city, 
    comments
    ) => {
    const pr = this.api
      .post("/arcades", 
      game, 
      description, 
      maxPlayers, 
      isEmulated, 
      rating, 
      isActive, 
      coins, 
      yearReleased, 
      gallery, 
      hunterId, 
      coordinates, 
      contactInfo, 
      address, 
      city, 
      comments )
      .then((response) => response.data);

    return pr;
  }

  deleteArcade = (id) => {
    const pr = this.api
      .delete(`/arcades/${id}`)
      .then((response) => response.data);

    return pr;
  }

  addComment = (id, comment) => {
    const pr = this.api
      .put(`/arcades/${id}/comments`, comment)
      .then((response) => response.data);

    return pr;
  }

  addHighestScores = (id, score) => {
    const pr = this.api
      .post(`/arcades/${id}/highest-scores`, score)
      .then((response) => response.data);

    return pr;
  }

}

// Create instance (object) containing all axios calls as methods
const apiService = new ApiService();

export default apiService;

// Service is a set of methods abstracted and placed into a class, out of which we create one instance.
// In the above case, all axios request calls are abstracted into methods.