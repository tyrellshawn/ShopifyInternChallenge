import React from 'react';
import Movie from './Movie';
const MovieList = (props) => {
  return (
    <div className="row">
      {props.movies.map((movie, i) => {
        return (
          <Movie
            key={movie.imdbID}
            image={movie.hasOwnProperty('Poster') ? movie.Poster : movie.image}
            title={movie.hasOwnProperty('Title') ? movie.Title : movie.title}
            releaseYear={
              movie.hasOwnProperty('Year') ? movie.Year : movie.releaseYear
            }
            imdbID={movie.imdbID}
            alert={props.hasOwnProperty('alert') ? props.alert : false}
            celebrate={
              props.hasOwnProperty('celebrate') ? props.celebrate : false
            }
          />
        );
      })}
    </div>
  );
};
export default MovieList;
