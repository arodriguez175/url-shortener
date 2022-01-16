import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <ul className="navbar">
          <li id="logo">
            <a href="/">Shortly</a>
          </li>

          <li>
            <a href="/features">Features</a>
          </li>
          <li>
            <a href="/pricing">Pricing</a>
          </li>
          <li>
            <a href="/resources">Resources</a>
          </li>

          <li id="login">
            <a href="/login">Login</a>
          </li>
          <li id="sign-up">
            <a href="/sign-up">Sign Up</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
