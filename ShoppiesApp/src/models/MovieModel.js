import React, { Component } from 'react';
class MovieModel extends Component {
  title;
  imageUrl;
  releaseYear;
  nominated;
  imdbID;
  constructor(Title, ImageUrl, ReleaseYear, imdbID, props) {
    super(props);
    this.title = Title;
    this.state = { nominated: false };
    this.setNominated = this.setNominated.bind(this);
    this.toggleNominate = this.toggleNominate.bind(this);
    this.imageUrl = ImageUrl;
    this.releaseYear = ReleaseYear;
    this.imdbID = imdbID;
  }
  setNominated(update) {
    this.setState({ nominated: update });
  }
  toggleNominate() {
    this.setState({ nominated: !this.state.nominated });
  }
  render() {
    return `
    <div class="col-md-3">
    <Card>
      <div class="well text-center">
        <img src="${this.imageUrl}">
        <h5>${this.title} (${this.releaseYear}) </h5>
        <a onclick="${this.toggleNominate}" class="btn btn-primary">${this.state.nominated}</a>
      </div>
      </Card>
    </div>
  `;
  }
}
export default MovieModel;
