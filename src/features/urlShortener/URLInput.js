import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shortenUrl } from "./shortenerSlice";
import "./URLInput.css";

function URLInput() {
  const urlInput = useRef(null);

  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.shortener.isLoading);

  const handleClick = () => {
    const urlToShorten = urlInput.current.value;

    dispatch(shortenUrl(urlToShorten));
  };

  return (
    <div>
      <div className="input-container" id="input">
        <input
          disabled={isLoading}
          ref={urlInput}
          placeholder="Shorten a link here..."
        ></input>
        <button
          className="input-button"
          disabled={isLoading}
          onClick={handleClick}
        >
          {isLoading ? "Loading..." : "Shorten It!"}
        </button>
      </div>
    </div>
  );
}

export default URLInput;
