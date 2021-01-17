import React, { Component, useContext } from 'react';

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from 'reactstrap';
import NominationProvider, {
  NominationContext,
  UpdateNominationContext,
  useNominations,
} from '../contexts/NominationContext';
class Nominations extends Component {
  constructor() {
    super();
    // const [nominations] = this.context;

    this.state = { movies: [] };
  }
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Movies You've Nominated</CardTitle>
                </CardHeader>
                <CardBody></CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
export default Nominations;
