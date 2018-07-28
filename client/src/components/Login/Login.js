import React, { Component } from 'react';
import API from '../../utils/API';
import './Login.css';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      redirectTo: null,
      loggedIn: false,
      loginFail: ''
    };
    this.handleFormLogin = this.handleFormLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleFormLogin = event => {
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
        if (response.status === 200 && response.data.username) {
          // update Main.js state
          this.props.updateUser({
            loggedIn: true,
            username: response.data.username,
            userRecordId: response.data._id
          });
          // update state to redirect to home
          this.setState({
            redirectTo: '/todo'
          })
        }
      }).catch(error => {
        console.log(`login error: ${error}`);

        if (this.state.username === '') {
          this.setState({
            loginFail: 'Please enter a valid username'
          })
        }
        else if (this.state.password === '') {
          this.setState({
            loginFail: 'Please enter a valid password'
          })
        }
        else if (error) {
          this.setState({
            loginFail: 'Username or password is not in our records'
          })
        }
      });
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <div>
          <h1 id='loginHeading'>Login</h1>
          <div id='loginForm'>
            <form>
              <div className='form-group'>
                <label htmlFor='exampleInputText'>Username</label>
                <input
                  name='username'
                  type='text'
                  className='form-control'
                  id='exampleInputText'
                  aria-describedby='textHelp'
                  placeholder='Enter username'
                  value={this.state.username}
                  onChange={this.handleChange} />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputPassword1'>Password</label>
                <input
                  name='password'
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                  value={this.state.password}
                  placeholder='Password'
                  onChange={this.handleChange} />
              </div>
              <button
                id='oldUser'
                type='submit'
                className='btn btn-primary'
                onClick={this.handleFormLogin}
              >
                Login
              </button>
              <span id='loginFail'>{this.state.loginFail}</span>
            </form>
          </div>
        </div>
      );
    }
  }
}