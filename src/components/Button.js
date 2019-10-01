import React from "react";

const Button = ({ caption, buttonCb }) => {
  return (
    <button className="button" type="button" onClick={buttonCb}>
      {caption}
    </button>
  );
};

export default Button;
