import React from "react";

export const Nav = (props) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="/">
      {props.children}
    </a>
  </nav>
);


