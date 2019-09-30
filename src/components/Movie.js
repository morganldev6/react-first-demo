import React from "react";

const Movie = ({ movie, index }) => {
  return (
    <div key={index}>
      <p>
        <strong>Title:</strong> {movie.title.rendered}
      </p>
      <p>
        <strong>Release Year:</strong> {movie.acf.release_year}
      </p>
      <p>
        <strong>Rating:</strong> {movie.acf.rating}
      </p>
      <div>
        <strong>Description:</strong>
        <div dangerouslySetInnerHTML={{ __html: movie.acf.description }} />
      </div>
    </div>
  );
};

export default Movie;
