import React, {Component} from "react";
import MovieDBService from "../services/OMDB"
import classNames from "classnames";
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
    this.state ={message:"No Movie has been Searched!"}
    this.onKeyUp = this.onKeyUp.bind(this);

  }
  onKeyUp(event){
    if (event.charCode === 13) {
      console.log(event.target.value);
      this.setState({ searchValue: event.target.value });
    }
  }
  render(){
    const {searchValue} = this.state;
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
              <Card className="card-plain">
                <CardBody>
                  <Input placeholder="SEARCH" type="text" onKeyPress={this.onKeyUp} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        <Row>
          <Col md="12">
            <hr />
            <span> Input value is : {searchValue}</span>
          </Col>
        </Row>
        </div>
      </>
    );
  }
}


export default Search;
