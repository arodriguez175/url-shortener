import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "./images/logo.svg";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <ul className="navbar">
          <li id="logo">
            <Link to="/">
              <img src={logo} />
            </Link>
          </li>

          <li>
            <Link to="/features">Features</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>

          <li id="login">
            <Link to="/login">Login</Link>
          </li>
          <li id="sign-up">
            <Link to="/sign-up">Sign Up</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
