import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Pricing.css";

class Pricing extends Component {
  render() {
    return (
      <div className="pricing">
        <h2>Pricing</h2>
        <div className="columns">
          <ul className="price">
            <li className="priceHeader">Free</li>
            <li>
              <span className="dollars">$0</span>/month
            </li>
            <li>
              <Link className="get-started-button" to="#">
                Get Started
              </Link>
            </li>
            <li className="linksPerMonth">Up to 100 shrtco.de links / month</li>
            <li className="includesHeader">Includes:</li>
            <div className="includes">
              <li>Unlimited clicks</li>
              <li>Customizable back-halves</li>
              <li>Powerful link history and reporting</li>
              <li>Access to integrations</li>
              <li>2-Factor Authentication (2FA)</li>
            </div>
          </ul>
        </div>

        <div className="columns">
          <ul className="price">
            <li className="priceHeader">Basic</li>
            <li>
              <span className="dollars">$29</span>/month
            </li>
            <li>
              <Link className="get-started-button" to="#">
                Get Started
              </Link>
            </li>
            <li className="linksPerMonth">Up to 1,500 branded links / month</li>
            <li className="includesHeader">Includes:</li>
            <div className="includes">
              <li>Create and share branded links</li>
              <li>Basic email support</li>
              <li>Redirect any link</li>
              <li>Bulk link shortening</li>
              <li>shrtco.de-branded QR Codes</li>
            </div>
          </ul>
        </div>

        <div className="columns">
          <ul className="price">
            <li className="priceHeader">Premium</li>
            <li>
              <span className="dollars">$199</span>/month
            </li>
            <li>
              <Link className="get-started-button" to="#">
                Get Started
              </Link>
            </li>
            <li className="linksPerMonth">Up to 3,000 branded links / month</li>
            <li className="includesHeader">Includes:</li>
            <div className="includes">
              <li>Advanced analytics</li>
              <li>Campaigns</li>
              <li>UTM Builder</li>
              <li>Mobile deep links</li>
              <li>QR Codes</li>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default Pricing;
