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

  copy() {
    const el = document.createElement("input");
    el.value = this.props.shortenedUrl;
    document.body.appendChild(el);
    el.select();
    document.execCommand("Copy");
    document.body.removeChild(el);
    this.setState({ copyButtonLabel: "Copied!" });
    setTimeout(() => {
      this.setState({ copyButtonLabel: "Copy" });
    }, 3000);
  }

  delete() {
    this.props.deleteShortenedUrl(this.props.index)
  }

  render() {
    return (
      <div className="urlBlock">
        <button className="deleteButton" onClick={this.delete}>
          x
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
const mapDispatchToProps = dispatch => {
  return {
    deleteShortenedUrl: index => dispatch(deleteShortenedUrl(index))
  }
}

export default connect(null, mapDispatchToProps)(URLblock);
