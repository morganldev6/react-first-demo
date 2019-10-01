import React from "react";
import Movie from "./Movie";
import uuid from "uuid/v4";

const Main = ({ movies }) => {
  console.log(movies);
  return (
    <div className="wrapper">
      {movies.map(movie => {
        return <Movie movie={movie} key={uuid()} />;
      })}
    </div>
  );
};

export default Main;
