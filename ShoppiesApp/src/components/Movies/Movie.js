import React, {Component} from "react";
import { Card } from "reactstrap";

const Movie = (props) =>{
  return(
    <div className="col-md-3">
    <Card>
      <div className="well text-center">
        {
          props.image === "N/A" ? <img src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} style={{width:"200px",height:"250px"}}/>: <img src={props.image} style={{width:"200px",height:"250px"}} />
        }
        

        <h5>{props.title.length < 26? props.title: props.title.substring(0,26)+'...'}  </h5><h5>({props.releaseYear})</h5>
        <a className="btn btn-primary" href="#"> Nominate </a>
      </div>
    </Card>
    </div>
  )

}
export default Movie;