import React, { Component } from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Private from './pages/Private';

import AnonRoute from './components/AnonRoute';
import PrivateRoute from './components/PrivateRoute';
import SearchResults from './pages/SearchResults';
import NewArcade from './pages/new-arcade/NewArcade';



class App extends Component {

  render() {
    return (
      <div className="container">

      <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/search/:city" component={SearchResults} />

          <PrivateRoute exact path="/create-arcade" component={NewArcade} />
            {/* New Arcade is a Private Route */}
          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />

          <PrivateRoute exact path="/private" component={Private} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
