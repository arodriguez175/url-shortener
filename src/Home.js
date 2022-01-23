import React from "react";
import Hero from "./Hero";
import URLInput from "./URLInput";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Hero />
        <URLInput />
      </div>
    );
  }
}

export default Home;
