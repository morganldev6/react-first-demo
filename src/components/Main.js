import React from "react";
import Section from "./Section";

const Main = () => {
  return (
    <React.Fragment>
      <Section className="bg" subhead="This is section One" />
      <Section subhead="This is section Two" />
    </React.Fragment>
  );
};

export default Main;
