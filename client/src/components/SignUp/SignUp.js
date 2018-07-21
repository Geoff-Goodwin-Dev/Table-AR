import React, { Component } from "react";
import API from "../../utils/API";
import "./signUp.css";
import { Redirect } from "react-router-dom";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      email: "",
      redirectTo: null,
      loggedIn: false
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
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
        console.log('signup.js saveUser line 39 Response:', response);
        if (response.data.username) {
          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            username: response.data.username
          });
          console.log("successful signup!!");
          this.setState({
            redirectTo: '/todo'
          })
        }
      }).catch(error => {
      console.log(`signup server error: ${error}`);
    });

  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <div>
          <h1 id="signUpHeading">Sign Up</h1>
          <div id="signUpForm">
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
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  value={this.state.email}
                  placeholder="email@email.com"
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
              <div className="form-group">
                <label htmlFor="exampleInputPassword2">Confirm Password</label>
                <input
                  name="password2"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword2"
                  placeholder="Password"
                  onChange={this.handleChange} />
              </div>

              <button
                id="submit"
                type="submit"
                className="btn btn-primary"
                onClick={this.handleFormSubmit}
              >
                Sign Up!
              </button>

            </form>
          </div>
        </div>
      );
    }
  }
}

export default SignUp;
