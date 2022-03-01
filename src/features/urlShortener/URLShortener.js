import React from "react";
import { useSelector } from "react-redux";
import URLInput from "./URLInput";
import URLBlock from "./URLblock";

function URLShortener() {
  const shortenedUrls = useSelector((state) => state.shortener.shortenedUrls);

  return (
    <React.Fragment>
      <URLInput />
      {shortenedUrls.map((urlObject, index) => (
        <URLBlock key={index} {...urlObject} />
      ))}
    </React.Fragment>
  );
}

export default URLShortener;
