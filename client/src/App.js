import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
// import Login from "./pages/Login";
import Intro from "./pages/Intro";
import Nav from "./components/Nav";
import "./styles/Intro.css";
import API from "./utils/API";
import axios from "axios";
import Login from "./components/Login";

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

  getUser = () => {
    axios.get('/api/users')
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
          <Nav/>
          <Switch>
            <Route exact path="/" component={Intro} />
            <Route exact path="/todo" component={Main}  />
            <Route exact path="/login"
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









//
//
// // BEFORE
// const App = () => (
//   <Router>
//     <div>
//       <Nav/>
//       <Switch>
//         <Route exact path="/" component={Intro} />
//         <Route exact path="/todo" component={Main} />
//         <Route exact path="/login" component={Login} />
//         <Route component={NotFound} />
//       </Switch>
//     </div>
//   </Router>
// );
//
// export default App;