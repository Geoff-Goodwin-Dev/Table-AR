import React from "react";
import "../../pages/Login/Login.css";

export const SignUp = () => (
  <div id="loginForm">
    <form>
      <h1>Login</h1>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
               placeholder="Enter email" />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
      <button id="newUser" type="submit" className="btn btn-primary">New User</button>

    </form>
  </div>
);

export default SignUp;