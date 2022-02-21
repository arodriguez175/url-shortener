import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shortenUrl } from "./shortenerSlice";
import "./URLInput.css";

function URLInput() {
  const urlInput = useRef(null);
  /* useRef() references an element for later use 
  like the input element. */

  const dispatch = useDispatch();
  /* Dispatch an action to the redux store 
  by simply adding an action as an argument to the new variable. */

  const isLoading = useSelector((state) => state.shortener.isLoading);
  /* useSelector() is a hook that lets you extract data from 
  the redux store's state. */

  const handleClick = () => {
    /* Function for the click event. */

    const urlToShorten = urlInput.current.value;
    /* Creates a variable assigning it to the current 
    value of whatever is in the input field. */

    dispatch(shortenUrl(urlToShorten));
    /* Dispatch and runs the shortenUrl function from the 
    shortenerSlice to shorten the url in the input */
  };

  return (
    <div>
      <div className="input-container">
        <input
          disabled={isLoading}
          ref={urlInput}
          placeholder="Shorten a link here..."
        ></input>
        <button disabled={isLoading} onClick={handleClick}>
          {isLoading ? "Loading..." : "Shorten It!"}
        </button>
      </div>
    </div>
  );
}

export default URLInput;
