import React from 'react';

let AddMovie = ({addMovieHandler}) => (
  <div>
    <input type="text" id="add-movie" />
    <button id="add-movie-button"onClick={(e) => {
      e.preventDefault();
      addMovieHandler();}}>Add Movie</button>
  </div>
)

export default AddMovie;