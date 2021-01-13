class MovieModel{
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
}
