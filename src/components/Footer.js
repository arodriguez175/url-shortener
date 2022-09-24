import React from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <ul>
          <li>
            <Link to="/">
              <img src={logo} alt="Shortly logo" />
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <p>Features</p>
          </li>
          <div className="footer-subtext">
            <li>
              <p>Link Shortening</p>
            </li>
            <li>
              <p>Branded Links</p>
            </li>
            <li>
              <p>Analytics</p>
            </li>
          </div>
        </ul>

        <ul>
          <li>
            <p>Resources</p>
          </li>
          <div className="footer-subtext">
            <li>
              <p>Blog</p>
            </li>
            <li>
              <p>Developers</p>
            </li>
            <li>
              <p>Support</p>
            </li>
          </div>
        </ul>

        <ul>
          <li>
            <p>Company</p>
          </li>
          <div className="footer-subtext">
            <li>
              <p>About</p>
            </li>
            <li>
              <p>Our Team</p>
            </li>
            <li>
              <p>Careers</p>
            </li>
            <li>
              <p>Contact</p>
            </li>
          </div>
        </ul>

        <div className="social-media-icons">
          <a href="#!">
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>

          <a href="#!">
            <FontAwesomeIcon icon={faTwitter} />
          </a>

          <a href="#!">
            <FontAwesomeIcon icon={faPinterest} />
          </a>

          <a href="#!">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
