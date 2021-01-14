import React, {Component} from "react";
class MovieModel extends Component{
  title;
  imageUrl;
  releaseYear;
  nominated;
  imdbID;
  constructor(Title,ImageUrl, ReleaseYear,imdbID){
    this.title = Title;
    this.imageUrl = ImageUrl;
    this.releaseYear = ReleaseYear;
    this.nominated = false;
    this.imdbID = imdbID;
  }
  setNominated(update){
    this.nominated = update;
  }
  render(){
    return`
    <div class="col-md-3">
      <div class="well text-center">
        <img src="${this.imageUrl}">
        <h5>${this.title}</h5>
        <a onclick="movieSelected('${this.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
      </div>
    </div>
  `;
  }
}
