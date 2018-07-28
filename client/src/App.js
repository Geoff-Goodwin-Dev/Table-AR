import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Intro from './pages/Intro';
import { Nav } from './components/Nav';
import Login from './components/Login';
import SignUp from './components/SignUp';
import API from './utils/API';
import './styles/Intro.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null,
      redirectTo: null,
      userRecordId: null
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  logoutUser = (event) => {
    event.preventDefault();
    console.log('logging out');
    axios.post('/api/user/logout')
      .then(response => {
        console.log(response.data);
        if (response.status === 200) {
          this.updateUser({
            loggedIn: false,
            username: null,
            userRecordId: null
          });
          this.setState({
            redirectTo: '/'
          })
        }
      }).catch(error => {
        console.log('Woops! Logout error!', error);
    });
  };

  getUser = () => {
    API.getUser()
    .then(response => {
      console.log('Get user response: ');
      console.log(response.data);
      if (response.data.user) {
        console.log('Get user result: There is a user saved in the server session');
        this.setState({
          loggedIn: true,
          username: response.data.user.username,
          userRecordId: response.data.user._id
        })
      } else {
        console.log('Get user result: No active user session. Login or Sign Up needed');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  };

  resetRedirect = () => {
    this.setState({redirectTo: null})
  };

  render() {
    return (
      <Router>
        <div>
          <Nav loggedIn={this.state.loggedIn} updateUser={this.updateUser} logout={this.logoutUser} />
          <Switch>
            <Route
              exact path='/'
              render={() =>
                <Intro
                  loggedIn={this.state.loggedIn}
                  redirectTo={this.state.redirectTo}
                  resetRedirect={this.resetRedirect}
                />
              }
            />
            <Route
              exact path='/todo'
              render={() =>
                <Main
                  loggedIn={this.state.loggedIn}
                  username={this.state.username}
                  userRecordId={this.state.userRecordId}
                  redirectTo={this.state.redirectTo}
                />
              }
            />
            <Route
              exact path='/signUp'
              render={() =>
               <SignUp
                 updateUser={this.updateUser}
               />}
             />
            <Route
              exact path='/login'
              render={() =>
                <Login
                  updateUser={this.updateUser}
                />}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;