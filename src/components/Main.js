import React from "react";
import Movie from "./Movie";

const Main = ({ movies }) => {
  return (
    <div className="wrapper">
      {movies.map((movie, index) => {
        return <Movie movie={movie} index={index} />;
      })}
    </div>
  );
};

export default Main;
