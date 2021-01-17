import React, { useEffect, useState } from 'react';
import MovieList from '../components/Movies/MovieList';
// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from 'reactstrap';
import { useNominations } from '../contexts/NominationContext';
function Nominations() {
  const { nominations } = useNominations();
  const nominationData = Array.from(nominations.values());
  const [movies, setMovies] = useState(nominationData);
  useEffect(() => {
    setMovies(nominationData);
  }, [nominations]);

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
