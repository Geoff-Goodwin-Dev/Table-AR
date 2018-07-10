import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import { Nav, NavTwo } from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav>Table AR</Nav>
      <NavTwo>New To-Do List</NavTwo>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/todo" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;