import React, { Component } from 'react'; 
import Axios from 'axios'; 
import Login from './Login'
import Signup from './Signup' 
import Api from '../apis/api'

class Register extends Component {
    state = {
        loggedIn: localStorage.token ? true : false,
        username: null, 
        displayedForm: null, 
    };

    handleSignup = (e, data) => {
        e.preventDefault();
        Api.post("users/", { username: data.username, password: data.password}).then(res => {
            console.log(res.data)
            localStorage.token = res.data.token;
            localStorage.userId = res.data.id;
            localStorage.username = res.data.username;
            console.log(res.statusText);
        });
    };

    handleLogin = (e, data) => {
        e.preventDefault();
        Axios.post("http://localhost:8000/authenticate/", data, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            localStorage.token = res.data.token;
            localStorage.userId = res.data.id;
            localStorage.username = res.data.username;
            console.log(res.statusText);

        });
    };

    handleLogout = e => {
        e.preventDefault();
        localStorage.token = "";
        localStorage.userId = "";
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
        className="btn btn-warning logout-button"
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
            <h3>
            {this.state.loggedIn
                ? `Hello, ${localStorage.username}`
                : "Please Log In"}
            </h3>
        </div>
        );
    }
    }
    
    
export default Register;