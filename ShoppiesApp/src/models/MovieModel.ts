class MovieModel{
  private title: string;
  private imageUrl?: string;
  private releaseYear: string;
  private nominated: boolean;

  constructor(Title: string,ImageUrl: string, ReleaseYear: string){
    this.title = Title;
    this.imageUrl = ImageUrl;
    this.releaseYear = ReleaseYear;
    this.nominated = false;
  }
  setNominated(update: boolean){
    this.nominated = update;
  }
}
