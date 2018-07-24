import React, { Component } from "react";
import "../../styles/Intro.css";
import "./Nav.css";
import axios from "axios";


class Nav extends Component {
  constructor() {
    super();
    this.state={
      username: "",
      password: "",
    };
  }

  render() {
    return (
      <nav>
        <ul>
          <li>
            <a
              href={(this.props.loggedIn
              ) ? (
                ""
              ) : (
                "/"
              )}
              className="logo"
            >
              <h2>Table-AR</h2>
            </a>
          </li>

          {(this.props.loggedIn
          ) ? (
            <li>
              <button
                type="button"
                id="logOut"
                className="btn btn-primary"
                onClick={(event) => this.props.logout(event)}
              >
                LOGOUT
              </button>
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
  }
}


export default Nav;