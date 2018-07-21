import React, { Component } from "react";
import "./Login.css";
import API from "../../utils/API";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirectTo: null,
      loggedIn: false
    };
    this.handleFormLogin = this.handleFormLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }




  handleChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    console.log(`sign-up-form, username: ${this.state.username}`);

    // request to server here

    let userInfo = {
      username: this.state.username,
      password: this.state.password
    };
    API.saveUser(userInfo)
      .then(response => {
        console.log(response);
        if (response.data) {
          console.log("successful signup!!");
          this.setState({
            redirectTo: '/todo'
          })
        } else {
          console.log("signup error");
        }
      }).catch(error => {
        console.log(`signup server error: ${error}`);
      });

    // this.setState({
    //   username: "",
    //   password: ""
    // });

  };

  handleFormLogin = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    console.log(`log-in-form, username: ${this.state.username}`);

    // request to server here

    let userInfo = {
      username: this.state.username,
      password: this.state.password
    };
    API.loginUser(userInfo)
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          // update Main.js state
          this.props.updateUser({
            loggedIn: true,
            username: response.data.username
          });
          // update state to redirect to home
          this.setState({
            redirectTo: '/todo'
          })
        }
      }).catch(error => {
        console.log(`login error: ${error}`);
      });

    // this.setState({
    //   username: "",
    //   password: ""
    // });

  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <div>
          <h1 id="loginHeading">Login</h1>
          <br/><br/><br/>
          <div id="loginForm">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputText">Username</label>
                <input
                  name="username"
                  type="text"
                  className="form-control"
                  id="exampleInputText"
                  aria-describedby="textHelp"
                  placeholder="Enter username"
                  value={this.state.username}
                  onChange={this.handleChange} />
                <small id="textHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={this.state.password}
                  placeholder="Password"
                  onChange={this.handleChange} />
              </div>
              <button
                id="oldUser"
                type="submit"
                className="btn btn-primary"
                onClick={this.handleFormLogin}
              >
                Login
            </button>

            </form>
          </div>
        </div>
      );
    }
  }
}

export default Login;
