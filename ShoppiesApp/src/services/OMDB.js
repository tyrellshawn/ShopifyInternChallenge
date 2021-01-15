import axios from 'axios';
import React, {Component} from "react";
import MovieModel from "..//models/MovieModel";

class MovieDBService extends Component{
  apiKey;
  instance;
  constructor(){
    super();
    this.apiKey = '63e90fe3';
    this.state = {
      movies: [],
      nominated: []
    }
  }


  async getMovies(searchText){
    var output = "";
   const req = await axios.get('http://www.omdbapi.com?t='+searchText+'?&s='+searchText+'&apikey='+this.apiKey)
      .then((response) => {
        console.log(response);
        let movies = response.data.Search;
        this.setState({movies: movies});
        movies.forEach((movie,index ) => {
          
          let movieResponseModel = new MovieModel(movie.Title,movie.Poster,movie.Year,movie.imdbID);
          output += movieResponseModel.render().toString();
        });
        document.getElementById('movies').innerHTML = output;
        
      })
      .catch((err) => {
        console.log(err);
      });
      
  }  
  


}
export default MovieDBService;