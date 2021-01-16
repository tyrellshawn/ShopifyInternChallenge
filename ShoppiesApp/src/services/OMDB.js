import axios from 'axios';
import React, { Component } from 'react';
import MovieModel from '..//models/MovieModel';

class MovieDBService extends Component {
  apiKey;
  instance;
  constructor() {
    super();
    this.apiKey = '63e90fe3';
    this.state = {
      movies: [],
      nominated: [],
    };
  }

  async getMovies(searchText) {
    var output = '';
    const req = await axios
      .get(
        'http://www.omdbapi.com?t=' +
          searchText +
          '?&s=' +
          searchText +
          '&apikey=' +
          this.apiKey +
          '&type=movie'
      )
      .then((response) => {
        console.log(response);
        let movies = response.data.Search;
        this.setState({ movies: movies });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
export default MovieDBService;
