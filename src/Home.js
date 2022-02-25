import React from "react";
import Hero from "./Hero";
import URLShortener from "./features/urlShortener/URLShortener"; //
import "./Home.css";
import AdvancedStatistics from "./AdvancedStatistics";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Hero />
        <URLShortener />
        <AdvancedStatistics />
      </div>
    );
  }
}

export default Home;
