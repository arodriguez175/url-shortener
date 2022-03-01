import React from "react";
import { Link } from "react-scroll";
import "./Boost.css";

class Boost extends React.Component {
  render() {
    return (
      <div className="boost">
        <p>Boost your links today</p>
        <div className="boost-button-container">
          <Link activeClass="active" to="input" spy={true} smooth={true}>
            Get Started
          </Link>
        </div>
      </div>
    );
  }
}

export default Boost;
