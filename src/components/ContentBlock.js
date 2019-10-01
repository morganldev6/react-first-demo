import React from "react";

const ContentBlock = ({ title, content }) => {
  return (
    <div className="contentBlock">
      <h2>{title}:</h2>
      <p>{content}</p>
    </div>
  );
};

export default ContentBlock;
