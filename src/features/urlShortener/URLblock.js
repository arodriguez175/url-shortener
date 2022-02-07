import React from "react";
import PropTypes from "prop-types";

class URLblock extends React.Component {
  render() {
    return (
      <div>
        <p>
          <span class="originalUrl">{this.props.originalUrl}</span>
          <span class="shortenedUrl">{this.props.shortenedUrl}</span>
          <button>Copy</button>
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
