import React from "react";

const Header = ({ title }) => {
  return (
    <header>
      <div className="wrapper">
        <h1>Star Wars Movies</h1>

        <p>
          This site demonstrates the use of a WordPress headless CMS for backend
          with a React frontend built on top.
        </p>
      </div>
    </header>
  );
};

export default Header;
