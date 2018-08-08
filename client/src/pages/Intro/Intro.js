import React from "react";
import "../../styles/Intro.css";
import "./intro.css";
import { Link } from "react-router-dom";

const Intro = ({ loggedIn }) => (
  <div>
    <div className="container-fluid text-center">
      <br/><br/>
      <h1 id="one">Table-AR</h1>
      <h4 id="two">EFFECTIVE TASK MANAGEMENT</h4>
      <h2 id="three">IN AUGMENTED REALITY</h2>
      <br/>
      {loggedIn ? (
        <span>
          <p>You are already logged in</p>
          <p>Click <b>ENTER</b> to access your task management experience</p>
          <Link id="enterButton" to={"/todo"}>
            <button type="button" className="introButton btn btn-primary btn-lg">
              ENTER
            </button>
          </Link>
        </span>
      ) : (
        <span>
          <Link id="loginButton" to={"/login/"}>
            <button type="button" className="introButton btn btn-primary btn-lg">
              LOGIN
            </button>
          </Link>

          <Link id="signUpButton" to={"/signUp/"}>
          <button type="button" className="introButton btn btn-primary btn-lg">
          SIGN UP
          </button>
          </Link>
        </span>
      )}

      <br/><br/>
      <h6 id="four">By the creators of
        <a
          className="links"
          target="_blank"
          rel="noopener noreferrer"
          href="https://geoff-goodwin-dev.github.io/TheTable-TheCodeDictator/"
        >
          The Code Dictator
        </a>
        <span> & </span>
        <a
          className="links"
          target="_blank"
          rel="noopener noreferrer"
          href="https://the-table-skynet.herokuapp.com/"
        >
          Skynet Flight Command
        </a>
      </h6>
    </div>

  </div>
);

export default Intro;