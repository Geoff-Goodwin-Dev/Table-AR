import React from "react";
import "../../styles/Intro.css";
import { Link } from "react-router-dom";
import "./intro.css";

const Intro = () => (

  <div>

    <div className="container-fluid text-center">
      <br/><br/>
      <h1 id="one">Table-AR</h1>
      <h4 id="two">EFFECTIVE TASK MANAGEMENT</h4>
      <h2 id="three">IN AUGMENTED REALITY</h2>
      <br/>
      <a type="button" href={"/login"} className="introButton btn btn-lg">
        LOGIN
      </a>
      <a type="button" href={"/signUp"} className="introButton btn btn-sm">
        SIGN UP
      </a>
      <br/><br/>
      <h6 id="four">By the creators of The Code Dictator & Skynet Flight Command</h6>
    </div>

  </div>



);

export default Intro;