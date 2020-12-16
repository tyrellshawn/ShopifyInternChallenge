import axios from 'axios';

class MovieDBService{
  apiKey;
  constructor(){
    this.apiKey = "63e90fe3"
  }
  getPopularMovies(){
    axios.get("http://www.omdbapi.com/?apikey=63e90fe3")
  }
}
export default MovieDBService;