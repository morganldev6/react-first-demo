import React from "react";

const Section = ({ subhead, className }) => {
  return (
    <section className={className}>
      <div className="wrapper">
        <h2>{subhead}</h2>
      </div>
    </section>
  );
};

export default Section;
