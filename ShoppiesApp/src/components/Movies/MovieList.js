import React from 'react';
import Movie from './Movie';
const MovieList = (props) => {
  return (
    <div className="row">
      {props.movies.map((movie, i) => {
        return (
          <Movie
            key={movie.imdbID}
            image={movie.Poster}
            title={movie.Title}
            releaseYear={movie.Year}
            imdbID={movie.imdbID}
          />
        );
      })}
    </div>
  );
};
export default MovieList;
