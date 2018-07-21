import React, { Component } from "react";
import "../../styles/Intro.css";
import { Link } from "react-router-dom";


class Nav extends Component {



  render() {
    return (
      <nav>
        <ul>
          <li><a href={this.props.loggedIn ?
            "/todo"
            :
            "/"
          } className="logo"><h2>Table-AR</h2></a>
          </li>
          <li><a href="https://github.com/Geoff-Goodwin-Dev/Table-AR/tree/development">Github</a>
          </li>
        </ul>
      </nav>
    )
  }
};

export default Nav;
