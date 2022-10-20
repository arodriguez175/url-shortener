import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteShortenedUrl } from "./shortenerSlice";
import "./URLblock.css";

class URLblock extends React.Component {
  constructor(props) {
    super(props);
    this.copy = this.copy.bind(this);
    this.delete = this.delete.bind(this);
    this.state = { copyButtonLabel: "Copy" };
  }

  // Copies Url to clipboard using the clipboard API, navigator.clipboard
  copy() {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(this.props.shortenedUrl).catch((error) => {
        console.error(error);
      });
    } else {
      const el = document.createElement("input");
      el.value = this.props.shortenedUrl;
      document.body.appendChild(el);
      el.select();
      document.execCommand("Copy");
      document.body.removeChild(el);
    }
    this.setState({ copyButtonLabel: "Copied!" });
    setTimeout(() => {
      this.setState({ copyButtonLabel: "Copy" });
    }, 3000);
  }

  delete() {
    this.props.deleteShortenedUrl(this.props.index);
  }

  render() {
    return (
      <div className="urlBlock">
        <button className="deleteButton" onClick={this.delete}>
          <svg
            className="x"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
          </svg>
        </button>
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

// mapDispatchToProps is used to pass dispatching particular actions
// into the component as props. In case of URLblock, we want to be able to
// send a deleteShortenedUrl action to the store.
// Docs: https://react-redux.js.org/using-react-redux/connect-mapdispatch
const mapDispatchToProps = (dispatch) => {
  return {
    deleteShortenedUrl: (index) => dispatch(deleteShortenedUrl(index)),
  };
};

export default connect(null, mapDispatchToProps)(URLblock);
