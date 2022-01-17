import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
      </div>
    );
  }
}

export default App;
