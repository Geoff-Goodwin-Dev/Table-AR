import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Aframe from "./pages/AFrameTest";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav>Table AR</Nav>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/todo" component={Main} />
        <Route exact path="/aframe" component={Aframe} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;