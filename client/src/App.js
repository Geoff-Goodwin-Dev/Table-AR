import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Intro from "./pages/Intro";
import Nav from "./components/Nav";
import "./styles/Intro.css";
import axios from "axios";
import Login from "./components/Login";
import SignUp from "./components/SignUp";


class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
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
    axios.post('/user/logout')
      .then(response => {
        console.log(response.data);
        if (response.status === 200) {
          this.updateUser({
            loggedIn: false,
            username: null
          })
        }
      }).catch(error => {
        console.log('Woops! Logout error!', error);
    });
  };

  getUser = () => {
    axios.get('/user')
    .then(response => {
      console.log('Get user response: ');
      console.log(response.data);
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ');

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  };

  render() {
    return (
      <Router>
        <div>
          <Nav loggedIn={this.state.loggedIn} logout={this.logoutUser}/>
          <Switch>
            <Route exact path="/" component={Intro} />
            <Route exact path="/todo" component={Main}  />
            <Route
              exact path="/signUp"
              render={() =>
               <SignUp
                 updateUser={this.updateUser}
               />}
             />
            <Route
              exact path="/login"
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