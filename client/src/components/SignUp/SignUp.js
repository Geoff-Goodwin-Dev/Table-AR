import React, { Component } from 'react';
import API from '../../utils/API';
import './signUp.css';
import { Redirect } from 'react-router-dom';

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      passwordConfirm: '',
      email: '',
      redirectTo: null,
      loggedIn: false,
      usernameValidation: '',
      passwordValidation: '',
      emailValidation: '',
      userError: ''
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
    event.preventDefault();

    let userInfo = {
      username: this.state.username,
      password: this.state.password,
      passwordConfirm: this.state.passwordConfirm,
      email: this.state.email,
      userError: this.state.userError
    };

    const reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;

    if (userInfo.password !== userInfo.passwordConfirm) {
      this.setState({
        passwordValidation: 'Your password and password confirmation do not match',
        usernameValidation: '',
        emailValidation: ''
      })
    }
    else if (!reg.test(userInfo.email)) {
      this.setState({
        emailValidation: 'Please enter a valid email address',
        usernameValidation: '',
        passwordValidation: ''
      })    }
    else if (userInfo.username === '') {
      this.setState({
        usernameValidation: 'Please enter a username',
        passwordValidation: '',
        emailValidation: ''
      })
    }
    else if (userInfo.password === '') {
      this.setState({
        passwordValidation: 'Password is a required field',
        usernameValidation: '',
        emailValidation: ''
      })
    }
    else {
      console.log(`sign-up-form, username: ${this.state.username}`);

      API.saveUser(userInfo)
        .then(response => {
          console.log('signup.js saveUser line 39 Response:', response);
          if (response.data.username) {
            // update App.js state
            this.props.updateUser({
              loggedIn: true,
              username: response.data.username,
              userRecordId: response.data._id
            });
            console.log('successful signup!!');
            this.setState({
              redirectTo: '/todo'
            })
          }
          else if(response.data.error) {
            this.setState({
              userError: response.data.error
            })
          }
        })
        .catch(error => {
          console.log(`signup server error: ${error}`);
        });
    }
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <div>
          <h1 id='signUpHeading'>Sign Up</h1>
          <div id='signUpForm'>
            <form>
              <div className='form-group'>
                <span className='validation' id='usernameValidate'>{this.state.usernameValidation}</span>
                <br/>
                <label htmlFor='exampleInputText'>Username</label>
                <input
                  name='username'
                  type='text'
                  className='form-control'
                  id='exampleInputText'
                  aria-describedby='textHelp'
                  placeholder='Enter username'
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </div>
              <div className='form-group'>
                <span className='validation' id='emailValidate'>{this.state.emailValidation}</span>
                <br/>
                <label htmlFor='exampleInputEmail1'>Email</label>
                <input
                  name='email'
                  type='email'
                  className='form-control'
                  id='inputEmail'
                  value={this.state.email}
                  placeholder='email@email.com'
                  onChange={this.handleChange}
                />
                <small id='textHelp' className='form-text text-muted'>
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className='form-group'>
                <span className='validation' id='passwordValidate'>{this.state.passwordValidation}</span>
                <br/>
                <label htmlFor='exampleInputPassword1'>Password</label>
                <input
                  name='password'
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                  value={this.state.password}
                  placeholder='Password'
                  onChange={this.handleChange}
                />
              </div>
              <div className='form-group'>
              <br/>
                <label htmlFor='exampleInputPassword2'>Confirm Password</label>
                <input
                  name='passwordConfirm'
                  type='password'
                  className='form-control'
                  id='exampleInputPassword2'
                  value={this.state.passwordConfirm}
                  placeholder='Password'
                  onChange={this.handleChange}
                />
              </div>
              <button
                id='submit'
                type='submit'
                className='btn btn-primary'
                onClick={this.handleFormSubmit}
              >
                Sign Up!
              </button>
              <span id='userError'>{this.state.userError}</span>
            </form>
          </div>
        </div>
      );
    }
  }
}