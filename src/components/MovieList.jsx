import React from 'react';

let MovieList = ({movie, watchedMovieHandler}) => (
  <div className="list-item">
      <span>{movie.title}</span>
      <button className="watched-btn" id={movie.title} onClick={(e) => {
        e.preventDefault();
        watchedMovieHandler(e);
      }}>Watched</button>
  </div>
    

)

export default MovieList;