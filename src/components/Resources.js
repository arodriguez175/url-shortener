import React, { Component } from "react";
import "./Resources.css";

class Resources extends Component {
  render() {
    return (
      <div className="resources">
        <h2>Resources</h2>

        <div className="grid">
          <div className="item">
            <p>Get Started</p>
            <p>Learn the basics of Shortly</p>
          </div>

          <div className="item">
            <p>Managing Your Links</p>
            <p>Make the most of your links</p>
          </div>

          <div className="item">
            <p>Integrations and Mobile</p>
            <p>Connect to your apps and devices</p>
          </div>

          <div className="item">
            <p>Metrics & Analytics</p>
            <p>Monitor and analyze link performance</p>
          </div>

          <div className="item">
            <p>SSO & Security</p>
            <p>Protect your account and your links</p>
          </div>

          <div className="item">
            <p>Webinars & Videos</p>
            <p>Watch our tutorials!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Resources;
