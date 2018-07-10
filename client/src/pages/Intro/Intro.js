import React from "react";
import "../../styles/Intro.css";
import { Link } from "react-router-dom";

const Intro = () => (

  <div>

    <div className="container-fluid text-center">
      <br/><br/><br/>
      <h1 id="one">Table-AR</h1>
      <h4 id="two">EFFECTIVE TASK MANAGEMENT</h4>
      <h2 id="three">IN AUGMENTED REALITY</h2>
      <br/><br/><br/>
      <button type="button" to={"/login/"} className="btn btn-secondary btn-sm">
        <Link id="enter" to={"/login/"}>
          ENTER
        </Link>
      </button>
      <br/><br/><br/><br/>
      <h6 id="four">By the creators of The Code Dictator & Skynet Flight Command</h6>
    </div>

  </div>



);

export default Intro;