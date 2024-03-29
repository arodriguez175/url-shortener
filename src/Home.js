import React from "react";
import Hero from "./components/Hero";
import URLShortener from "./features/urlShortener/URLShortener";
import "./Home.css";
import AdvancedStatistics from "./components/AdvancedStatistics";
import Boost from "./components/Boost";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Hero />
        <URLShortener />
        <AdvancedStatistics />
        <Boost />
      </div>
    );
  }
}

export default Home;
