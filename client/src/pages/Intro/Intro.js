import React from "react";
import "../../styles/Intro.css";
import "./intro.css";

const Intro = () => (

  <div>

    <div className="container-fluid text-center">
      <br/><br/>
      <h1 id="one">Table-AR</h1>
      <h4 id="two">EFFECTIVE TASK MANAGEMENT</h4>
      <h2 id="three">IN AUGMENTED REALITY</h2>
      <br/>
      <a href="/login">
      <button type="button" className="introButton btn btn-primary btn-lg">
        LOGIN
      </button></a>

      <a href="/signUp"><button type="button" className="introButton btn btn-primary btn-lg">
        SIGN UP
      </button></a>

      <br/><br/>
      <h6 id="four">By the creators of The Code Dictator & Skynet Flight Command</h6>
    </div>

  </div>



);

export default Intro;