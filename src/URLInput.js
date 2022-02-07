import React from "react";
import axios from "axios";
import "./URLInput.css";
import URLblock from "./URLblock";

class URLInput extends React.Component {
  constructor(props) {
    super(props);
    this.urlInput = React.createRef(); // React.createRef() is a way for React to reference an element for later use like the input element. Has to be in a constructor method.
  }

  shorten() {
    // Assigned the base API url + whatever is typed in the input field current value as this url variable.
    const url = `https://api.shrtco.de/v2/shorten?url=${this.urlInput.current.value}`;
    axios
      .post(url)
      .then((response) => {
        const data = response.data;
        this.shortnedLink = data.result.full_short_link;
        this.originalUrl = this.urlInput.current.value;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div className="input-container">
          <input
            ref={this.urlInput}
            placeholder="Shorten a link here..."
          ></input>
          <button
            onClick={() => {
              this.shorten();
            }}
          >
            Shorten It!
          </button>
        </div>
        <URLblock
          originalUrl={this.originalUrl}
          shortenedUrl={this.shortnedLink}
        />
      </div>
    );
  }
}

export default URLInput;
