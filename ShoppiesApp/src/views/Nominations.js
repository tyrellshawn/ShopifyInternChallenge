import React, { Component, useContext, useState } from 'react';
import MovieList from '../components/Movies/MovieList';
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
function Nominations() {
  const { nominations } = useNominations();
  const [movies] = useState(Array.from(nominations.values()));

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
        <Row>
          <Col md="12">
            <MovieList movies={movies} />
          </Col>
        </Row>
      </div>
    </>
  );
}
export default Nominations;
