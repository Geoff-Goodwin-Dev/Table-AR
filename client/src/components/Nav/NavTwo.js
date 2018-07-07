import React from "react";

export const NavTwo = (props) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-success">
    <a className="navbar-brand" href="/">
      {props.children}
    </a>
  </nav>
);
