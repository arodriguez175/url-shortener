import React from "react";
import Hero from "./Hero";
import URLShortener from "./features/urlShortener/URLShortener"; //
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Hero />
        <URLShortener />
      </div>
    );
  }
}

export default Home;
