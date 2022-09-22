import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <ul className="topnav" id="myTopnav">
          <li id="logo" className="active">
            <Link to="/">
              <img src={logo} alt="Shortly logo" />
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
          <li>
            <button className="icon">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
