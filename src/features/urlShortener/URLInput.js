import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shortenUrl } from "./shortenerSlice";
import "./URLInput.css";

function URLInput() {
  /* useRef() references an element for later use 
  like the input element. */
  const urlInput = useRef(null);

  /* Dispatch an action to the redux store */
  const dispatch = useDispatch();

  /* useSelector() is a hook that lets you extract data from 
  the redux store's state. */
  const isLoading = useSelector((state) => state.shortener.isLoading);

  /* Function for the click event. */
  const handleClick = () => {
    /* Assigns this variable to the current value of 
    whatever is in the input field. */
    const urlToShorten = urlInput.current.value;

    /* Dispatch and runs the shortenUrl function from the 
    shortenerSlice to shorten the url in the input */
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
