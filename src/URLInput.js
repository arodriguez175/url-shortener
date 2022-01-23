import React from "react";
import "./URLInput.css";

class URLInput extends React.Component {
  render() {
    return (
      <div>
        <div className="input-container">
          <input placeholder="Shorten a link here..."></input>
          <button>Shorten It!</button>
        </div>
      </div>
    );
  }
}

export default URLInput;
