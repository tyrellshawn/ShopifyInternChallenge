import React, {Component} from "react";
import { Card } from "reactstrap";

const Movie = (props) =>{
  return(
    <div class="col-md-3">
    <Card>
      <div class="well text-center">
        {
          props.image === "N/A" ? <img src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}/>: <img src={props.image} />
        }
        

        <h5>{props.title} ({props.releaseYear}) </h5>
        <a class="btn btn-primary" href="#"> Nominate </a>
      </div>
    </Card>
    </div>
  )

}
export default Movie;