import axios from 'axios';
import jquery from '../../node_modules/jquery';
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
  getMovies(searchText){
    var output = "";
    axios.get('http://www.omdbapi.com?t='+searchText+'?&s='+searchText+'&apikey=63e90fe3')
      .then((response) => {
        console.log(response);
        let movies = response.data.Search;
        let output = '';
        movies.forEach((index, movie) => {
          output += `
            <div class="col-md-3">
              <div class="well text-center">
                <img src="${movie.Poster}">
                <h5>${movie.Title}</h5>
                <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
              </div>
            </div>
          `;
        });
  
        
      })
      .catch((err) => {
        console.log(err);
      });
      return output;
  }  
  
movieSelected(id){
  sessionStorage.setItem('movieId', id);
  window.location = 'movie.html';
  return false;
}
  getMovie(){
    var output = "";
    let movieId = sessionStorage.getItem('movieId');
  
    axios.get('http://www.omdbapi.com?i='+movieId)
      .then((response) => {
        console.log(response);
        let movie = response.data;
  
        let output =`
          <div class="row">
            <div class="col-md-4">
              <img src="${movie.Poster}" class="thumbnail">
            </div>
            <div class="col-md-8">
              <h2>${movie.Title}</h2>
              <ul class="list-group">
                <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
                <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
                <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
                <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
                <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
                <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
                <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="well">
              <h3>Plot</h3>
              ${movie.Plot}
              <hr>
              <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
              <a href="index.html" class="btn btn-default">Go Back To Search</a>
            </div>
          </div>
        `;
  
        
      })
      .catch((err) => {
        console.log(err);
      });
      return output;
  }

}
export default MovieDBService;