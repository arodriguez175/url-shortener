import React from "react";
import Hero from "./Hero";
import URLShortener from "./features/urlShortener/URLShortener"; //
import "./Home.css";
import AdvancedStatistics from "./AdvancedStatistics";
import Boost from "./Boost";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Hero />
        <URLShortener />
        <AdvancedStatistics />
        <Boost />
      </div>
    );
  }
}

export default Home;
