import React from "react";
import PropTypes from "prop-types";
import "./URLblock.css";

class URLblock extends React.Component {
  constructor(props) {
    super(props);
    this.copy = this.copy.bind(this);
  }

  copy() {
    const el = document.createElement("input");
    el.value = this.props.shortenedUrl;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  }

  render() {
    return (
      <div className="urlBlock">
        <p>
          <p className="originalUrl">{this.props.originalUrl}</p>
          <p className="shortenedUrl">{this.props.shortenedUrl}</p>
          <button className="copyButton" onClick={this.copy}>
            Copy
          </button>
        </p>
      </div>
    );
  }
}

URLblock.propTypes = {
  originalUrl: PropTypes.string,
  shortenedUrl: PropTypes.string,
};

export default URLblock;
