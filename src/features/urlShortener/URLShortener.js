import React from "react";
import { useSelector } from "react-redux";
import URLInput from "./URLInput";
import URLBlock from "./URLblock";

function URLShortener() {
  // Store my shortenedUrls state to in variable
  const shortenedUrls = useSelector((state) => state.shortener.shortenedUrls);

  // Renders a URLBlock component for each item in the shortened urls array
  return (
    <React.Fragment>
      <URLInput />
      {shortenedUrls.map((urlObject, index) => (
        <URLBlock key={index} index={index} {...urlObject} />
      ))}
    </React.Fragment>
  );
}

export default URLShortener;
