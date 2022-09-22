import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

class Layout extends React.Component {
  render() {
    return (
      <div>
        <a
          href="https://github.com/arodriguez175/url-shortener"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="text-[25px] text-primary"
          />
        </a>
        <Navbar />
        <Outlet />
      </div>
    );
  }
}

export default Layout;
