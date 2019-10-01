import React, { useState } from "react";
import ContentBlock from "./ContentBlock";
import Button from "./Button";

const Movie = ({ movie }) => {
  const [movieShowing, setMovieShowing] = useState(false);

  const toggleShowMovie = () => {
    setMovieShowing(!movieShowing);
  };

  return (
    <div className="movieBlock">
      <ContentBlock title="Title" content={movie.title.rendered} />
      <ContentBlock title="Release Year" content={movie.acf.release_year} />
      <ContentBlock title="Rating" content={movie.acf.rating} />
      <Button buttonCb={toggleShowMovie} caption="View/Hide Description" />

      {movieShowing ? (
        <>
          <h2>Description:</h2>
          <div
            className="movieDescription"
            dangerouslySetInnerHTML={{ __html: movie.acf.description }}
          />
        </>
      ) : null}
    </div>
  );
};

export default Movie;
