import axios from 'axios';
//import MovieModel from "..//models/MovieModel";
class MovieDBService{
  apiKey;
  instance;
  constructor(){
    this.apiKey = "63e90fe3";
    this.instance = axios.create({
      baseURL: 'http://www.omdbapi.com',
      headers:{'apikey':this.apiKey}

    })
  }
  getPopularMovies(){
    
  }
  searchMovie(query){
    return this.instance({'method':'GET','params':{
      's':query
    }})

  }
}
export default MovieDBService;