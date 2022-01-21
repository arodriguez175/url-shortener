import React from "react";
import heroImage from "./images/illustration-working.svg";
import "./Hero.css";

class Hero extends React.Component {
  render() {
    return (
      <div>
        <h1>
          More than just <br /> shorter links
        </h1>
        <h2>
          Build your brand's recognition and get detailed
          <br /> insights on how your links are performing.
        </h2>
        <button>Get Started</button>
        <div className="image-container">
          <img src={heroImage} />
        </div>
      </div>
    );
  }
}

export default Hero;
