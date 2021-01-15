import React, {Component} from "react";
import axios from 'axios';

import MovieList from "../components/Movies/MovieList";
import SearchBox from "../components/Search/SearchBox";

// reactstrap components
import {
  Card,
  Button,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Modal,
  ModalHeader,
  Input,
} from "reactstrap";

class Search extends Component{
  constructor(){
    super();
    this.state ={movies: [], searchTerm:''}
    this.apiKey = '63e90fe3';

  }
  handleSubmit = (event) =>{
    
    event.preventDefault();
    axios.get(`http://www.omdbapi.com?t=${this.state.searchTerm}?&s=${this.state.searchTerm}&apikey=${this.apiKey}&type=movie`)
      .then((response) => {
        console.log(response);
        if(response.data.Response === "False"){
          console.log("API Error: "+response.data.Error);
        }
        else{
          this.setState({movies: [...response.data.Search]});
        }
        
        
        
        
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleChange = (event) =>{
    this.setState({searchTerm: event.target.value});
   // this.handleSubmit(event);

  }
  
  render(){
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Search For a Movie</CardTitle>
                </CardHeader>
                <CardBody>
                </CardBody>
              </Card>
            </Col>
            <Col md="12">
              <SearchBox handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
            </Col>
          </Row>
        <Row>
          <Col md="12">
            <hr />
            <span> Input value is : {this.state.searchTerm}</span>
            <MovieList id="movies"movies={this.state.movies}/>
          </Col>
        </Row>
        </div>
      </>
    );
  }
}


export default Search;