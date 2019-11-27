import React, { Component } from "react";
import Axios from "axios";
import Login from "./Login";
import Signup from "./Signup";
import Api from "../apis/api";
import { Nav, Alert } from "react-bootstrap";

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
        localStorage.token = res.data.token;
        localStorage.id = res.data.id;
        localStorage.username = res.data.username;

        this.displayForm("");

        this.setState({ loggedIn: !this.state.loggedIn });
      })
      .catch(err => {
        if (err.response) {
          const status = String(err.response.status || 500);
          this.displayForm(status);
        }
      });
  };

  handleLogin = (e, data) => {
    e.preventDefault();
    Axios.post("https://shop-it-quick.herokuapp.com/authenticate/", data, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        localStorage.token = res.data.token;
        localStorage.id = res.data.id;
        localStorage.username = res.data.username;
        this.displayForm("");
        this.setState({ loggedIn: true });
      })
      .catch(err => {
        this.displayForm("error");
      });
  };

  handleLogout = e => {
    e.preventDefault();
    localStorage.token = "";
    localStorage.id = "";
    localStorage.username = "";
    this.displayForm("");
    this.setState({ loggedIn: false });
  };

  displayForm = form => {
    this.setState({
      displayedForm: form
    });
  };

  loggedOutNav = (
    <div className="login-container">
      <Nav.Link
        className="login-button"
        onClick={() => this.displayForm("login")}
      >
        Login
      </Nav.Link>
      <Nav.Link
        eventKey={2}
        className="signup-button"
        onClick={() => this.displayForm("signup")}
      >
        Sign up
      </Nav.Link>
    </div>
  );
  loggedInNav = (
    <Nav.Link
      className="logout-button"
      eventKey={3}
      onClick={this.handleLogout}
    >
      Logout
    </Nav.Link>
  );

  render() {
    const { displayedForm } = this.state;
    let form;
    let alert;
    switch (this.state.displayedForm) {
      case "login":
        form = <Login handleLogin={this.handleLogin} />;
        break;
      case "signup":
        form = <Signup handleSignup={this.handleSignup} />;
        break;
      case "400":
        alert = (
          <Alert variant="danger">
            Something Went Wrong, Try logging in again, or refreshing the page.
          </Alert>
        );
      case "201":
        alert = <Alert variant="danger">That username already exists.</Alert>;
      case "500":
        alert = (
          <Alert variant="danger">
            Please Refresh the page if you did not get signed in automatically.
          </Alert>
        );
      default:
        form = null;
    }
    return (
      <div>
        {alert}
        <span className="logout-button-container">
          {this.state.loggedIn ? this.loggedInNav : this.loggedOutNav}
        </span>
        <span className="welcome-message">{displayedForm && <>{form}</>}</span>
        <div className="login-welcome">
          {this.state.loggedIn ? (
            <div className="login-username">
              {" "}
              {`Signed in as, ${localStorage.username
                .slice(0, 1)
                .toUpperCase() + localStorage.username.slice(1)}`}
            </div>
          ) : (
            "Please Log In"
          )}
        </div>
      </div>
    );
  }
}

export default Register;
