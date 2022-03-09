import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Features.css";

class Features extends Component {
  render() {
    return (
      <div className="features">
        <h2>Features</h2>
        <div className="featuresSection">
          <h3>Replace a url with your brand</h3>
          <p>
            Set up the perfect custom domain for your brand—all within
            Shortly—in minutes.
          </p>
          <Link className="features-get-started-button" to="/sign-up">
            Get Started
          </Link>
        </div>

        <div className="featuresSection">
          <h3>Get more clicks</h3>
          <p>
            Custom domains replace the “bit.ly” in your links with the name of
            your choosing so you can take total control of your content. By
            using your brand in your links, your audience will know they can
            trust them.
          </p>
        </div>

        <div className="featuresSection">
          <h3>Turn your links into brand assets</h3>
          <p>
            With trust comes action. Businesses that share custom links see a
            boost in click-throughs. It’s simple: If your audience trusts your
            links and knows where they lead, they’re more likely to click on
            them.
          </p>
        </div>
      </div>
    );
  }
}

export default Features;
