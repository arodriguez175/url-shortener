import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Outlet />
      </div>
    );
  }
}

export default Layout;
