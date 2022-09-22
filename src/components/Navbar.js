import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

class Navbar extends React.Component {
  render() {
    return (
      <div className="topnav" id="myTopnav">
        <Link to="/" id="logo">
          <img src={logo} alt="Shortly logo" />
        </Link>

        <Link to="/features">Features</Link>

        <Link to="/pricing">Pricing</Link>

        <Link to="/resources">Resources</Link>

        <button
          className="icon"
          onClick={() => {
            let navbarVar = document.getElementById("myTopnav");
            if (navbarVar.className === "topnav") {
              navbarVar.className += " responsive";
            } else {
              navbarVar.className = "topnav";
            }
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    );
  }
}

export default Navbar;
