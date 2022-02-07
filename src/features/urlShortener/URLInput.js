import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { shorten } from "./shortenerSlice";
import "./URLInput.css";

function URLInput() {
  const urlInput = useRef(null); // React.createRef() is a way for React to reference an element for later use like the input element. Has to be in a constructor method.
  const dispatch = useDispatch();

  const handleClick = () => {
    const inputValue = urlInput.current.value;
    dispatch(shorten(inputValue));
  };

  return (
    <div>
      <div className="input-container">
        <input ref={urlInput} placeholder="Shorten a link here..."></input>
        <button onClick={handleClick}>Shorten It!</button>
      </div>
    </div>
  );
}

export default URLInput;
