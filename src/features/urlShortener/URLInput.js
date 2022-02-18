import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shortenUrl } from "./shortenerSlice";
import "./URLInput.css";

function URLInput() {
  /* useRef() references an element for later use 
  like the input element. */
  const urlInput = useRef(null);
  /* Dispatch an action to the redux store 
  by simply adding an action as an argument to the new variable. */
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.shortener.isLoading);

  const handleClick = () => {
    const urlToShorten = urlInput.current.value;
    dispatch(shortenUrl(urlToShorten));
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
