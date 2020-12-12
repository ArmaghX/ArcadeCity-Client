import React, { Component } from "react";
import { withAuth } from './../context/auth-context';

class Login extends Component {
  state = { player: "", email: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { player, email, password } = this.state;
    // Call funciton coming from AuthProvider ( via withAuth )
    this.props.login(player, email, password);
  };

  handleChange = event => {
    const { name, email, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { player, email, password } = this.state;

    return (
      <div>
        <h1>Login</h1>

        <form onSubmit={this.handleFormSubmit}>
          
          <label>Player:</label>
          <input type="text" name="player" value={player} onChange={this.handleChange}/>

          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} />

          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default withAuth(Login);
