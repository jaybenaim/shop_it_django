import React, { Component } from "react";
import Axios from "axios";
import Login from "./Login";
import Signup from "./Signup";
import Api from "../apis/api";

class Register extends Component {
  state = {
    loggedIn: localStorage.token ? true : false,
    username: localStorage.username || null,
    displayedForm: null
  };

  handleSignup = (e, data) => {
    e.preventDefault();
    Api.post("users/", {
      username: data.username,
      password: data.password
    })
      .then(res => {
        console.log(res.data);
        localStorage.token = res.data.token;
        localStorage.id = res.data.id;
        localStorage.username = res.data.username;
        console.log(res.statusText);
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleLogin = (e, data) => {
    e.preventDefault();
    Axios.post(
      "https://jaybenaim.github.io/shop_it_django/authenticate/",
      data,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(res => {
        localStorage.token = res.data.token;
        localStorage.id = res.data.id;
        localStorage.username = res.data.username;
        console.log(res.statusText);
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleLogout = e => {
    e.preventDefault();
    localStorage.token = "";
    localStorage.id = "";
    localStorage.username = "";

    this.setState({ loggedIn: false });
  };

  displayForm = form => {
    this.setState({
      displayedForm: form
    });
  };

  loggedOutNav = (
    <div className="center">
      <ul>
        <li
          className="btn btn-primary login-button"
          onClick={() => this.displayForm("login")}
        >
          Login
        </li>

        <li
          className="btn btn-primary signup-button"
          onClick={() => this.displayForm("signup")}
        >
          Signup
        </li>
      </ul>
    </div>
  );
  loggedInNav = (
    <button
      className="btn btn-primary logout-button"
      onClick={this.handleLogout}
    >
      Logout
    </button>
  );

  render() {
    let form;
    switch (this.state.displayedForm) {
      case "login":
        form = <Login handleLogin={this.handleLogin} />;
        break;
      case "signup":
        form = <Signup handleSignup={this.handleSignup} />;
        break;
      default:
        form = null;
    }
    return (
      <div className="container">
        {this.state.loggedIn ? this.loggedInNav : this.loggedOutNav}
        {form}
        <div className="login-welcome">
          {this.state.loggedIn
            ? `Hello, ${localStorage.username.slice(0, 1).toUpperCase() +
                localStorage.username.slice(1)}`
            : "Please Log In"}
        </div>
      </div>
    );
  }
}

export default Register;
