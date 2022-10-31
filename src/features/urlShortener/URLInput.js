import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shortenUrl } from "./shortenerSlice";
import "./URLInput.css";

function URLInput() {
  /* The variable urlInput will reference the url input field */
  const urlInput = useRef(null);

  /* Dispatch an action to the redux store */
  const dispatch = useDispatch();

  /* Gets the isLoading property from the shortener slice's state */
  const isLoading = useSelector((state) => state.shortener.isLoading);

  /* Runs the function to shorten a url entered in the input field 
  after clicking the button */
  const handleClick = () => {
    /* Store whatever is in the input field in this variable */
    const urlToShorten = urlInput.current.value;

    /* Dispatches the shortenedUrl function from the shortener slice 
    to shorten the current url in the input field */
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
          {/* If isLoading property from state is true make this button say 
          "Loading...", if false then make it say "Shorten It!" */}
          {/* This is to make the user know that the process is loading 
          while waiting the url to shorten */}
          {isLoading ? "Loading..." : "Shorten It!"}
        </button>
      </div>
    </div>
  );
}

export default URLInput;
