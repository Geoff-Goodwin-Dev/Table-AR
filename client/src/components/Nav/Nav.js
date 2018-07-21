import React from "react";
import "../../styles/Intro.css";
// import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = props => (
  <nav>
    <ul>
      <li>
        <a
          href={(props.loggedIn
            ) ? (
              "/todo"
            ) : (
              "/"
            )}
          className="logo"
        >
          <h2>Table-AR</h2>
        </a>
      </li>

      {(props.loggedIn
        ) ? (
          <li>
            <button type="button" id="logOut" className="btn btn-primary">LOG OUT</button>
          </li>
        ) : (
          <li/>
        )
      }

      <li>
        <a href="https://github.com/Geoff-Goodwin-Dev/Table-AR/tree/development">Github</a>
      </li>
    </ul>
  </nav>
);

export default Nav;