import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import URLInput from "./URLInput";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <URLInput />
        <Outlet />
      </div>
    );
  }
}

export default App;
