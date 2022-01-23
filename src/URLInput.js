import React from "react";
import axios from "axios";
import "./URLInput.css";

class URLInput extends React.Component {
  constructor(props) {
    super(props);
    this.urlInput = React.createRef();
  }

  shorten() {
    console.log(`URL: ${this.urlInput.current.value}`);
    const url = `https://api.shrtco.de/v2/shorten?url=${this.urlInput.current.value}`;
    axios
      .post(url)
      .then(function (response) {
        console.log(response);
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
      </div>
    );
  }
}

export default URLInput;
