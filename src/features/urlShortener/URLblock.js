import React from "react";
import PropTypes from "prop-types";
import "./URLblock.css";

class URLblock extends React.Component {
  constructor(props) {
    super(props);
    this.copy = this.copy.bind(this);
    this.state = { copyButtonLabel: "copy" };
  }

  copy() {
    const el = document.createElement("input");
    el.value = this.props.shortenedUrl;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    this.setState({ copyButtonLabel: "Copied!" });
  }

  render() {
    return (
      <div className="urlBlock">
        <p className="originalUrl">{this.props.originalUrl}</p>
        <p className="shortenedUrl">{this.props.shortenedUrl}</p>
        <button className="copyButton" onClick={this.copy}>
          {this.state.copyButtonLabel}
        </button>
      </div>
    );
  }
}

URLblock.propTypes = {
  originalUrl: PropTypes.string,
  shortenedUrl: PropTypes.string,
};

export default URLblock;
