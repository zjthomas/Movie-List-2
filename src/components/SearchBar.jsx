import React from 'react';

let SearchBar = ({searchHandler}) => (
  <div>
    <input type="text" id="query" />
    <button id="search-btn"onClick={(e) =>{
      e.preventDefault();
      searchHandler();
    }} >Search</button>
  </div>
)

export default SearchBar;