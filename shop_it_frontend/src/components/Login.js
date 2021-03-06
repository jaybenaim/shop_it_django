import React, { Component } from "react";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    return (
      <form
        className="login-form"
        onSubmit={e => this.props.handleLogin(e, this.state)}
      >
        <h4>Log In</h4>
        <label className="login-username-label" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <label className="login-password-label" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        {/* <button className="login-submit">Submit</button> */}
        <input className="login-submit" type="submit" />
      </form>
    );
  }
}

export default Login;
