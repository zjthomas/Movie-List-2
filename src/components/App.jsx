import React from 'react';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      displayMovies: []
    }
  }

  searchHandler() {
    let query = document.getElementById('query').value;
    let matching = []; 
    this.state.movieList.forEach((movie) => {
      if (movie.title.toLowerCase().includes(query.toLowerCase())) {
        matching.push(movie);
      }
    });
    if (matching.length === 0) {
      matching.push({title: 'No results found'})
    }
    this.setState({displayMovies: matching});
  }

  addMovieHandler() {
    let title = document.getElementById('add-movie').value;
    if (title) {
      let newMovie = {
        title: title,
        watched: false
      };
      this.state.movieList.push(newMovie);
      this.setState({movieList: this.state.movieList,
        displayMovies: this.state.movieList});
    }
  }
  //TODO: restructure state.movieList to {name: {title: , watched: }}, and use to toggle watched property
  watchedMovieHandler(e) {
    e.persist();
    console.log(e);
    console.log(e.target.id);
  }
  
  render() {
   return (
      <div>
        <div>
          <AddMovie addMovieHandler={this.addMovieHandler.bind(this)}/>
        </div>
        <div>
          <SearchBar searchHandler={this.searchHandler.bind(this)} />
        </div>
        <div>
          {this.state.displayMovies.map((movie) => (
          <MovieList movie={movie} watchedMovieHandler={this.watchedMovieHandler.bind(this)} />)
          )}
        </div>
      </div>
   )
  }

}
  

export default App;