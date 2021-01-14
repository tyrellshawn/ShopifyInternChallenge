import React, {Component} from "react";
class MovieModel extends Component{
  title;
  imageUrl;
  releaseYear;
  nominated;

  constructor(Title,ImageUrl, ReleaseYear){
    this.title = Title;
    this.imageUrl = ImageUrl;
    this.releaseYear = ReleaseYear;
    this.nominated = false;
  }
  setNominated(update){
    this.nominated = update;
  }
  render(){
    return`
    <div class="col-md-3">
      <div class="well text-center">
        <img src="${movie.Poster}">
        <h5>${movie.Title}</h5>
        <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
      </div>
    </div>
  `;
  }
}
