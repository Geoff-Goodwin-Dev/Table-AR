import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
// import { Nav, NavTwo } from "./components/Nav";
import Intro from "./pages/Intro";
import Nav from "./components/Nav";
import "./styles/Intro.css";

const App = () => (
  <Router>
    <div>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route exact path="/todo" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;