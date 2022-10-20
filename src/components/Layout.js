import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Footer from "./Footer";

class Layout extends React.Component {
  render() {
    return (
      <div>
        <a
          href="https://github.com/arodriguez175/url-shortener"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="github" />
        </a>
        <Navbar />
        {/* Outlet is used for parent routes to render their child route elements. */}
        <Outlet />
        <Footer />
      </div>
    );
  }
}

export default Layout;
