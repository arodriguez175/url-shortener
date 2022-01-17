import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <Outlet />
      </div>
    );
  }
}

export default App;
