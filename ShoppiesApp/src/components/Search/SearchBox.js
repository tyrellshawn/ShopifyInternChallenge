import React from 'react';
import { Card, CardBody, Input } from 'reactstrap';

const SearchBox = (props) => {
  return (
    <Card className="card-plain">
      <CardBody>
        <form onSubmit={props.handleSubmit}>
          <Input
            placeholder="SEARCH"
            type="text"
            onChange={props.handleChange}
          />
        </form>
      </CardBody>
    </Card>
  );
};
export default SearchBox;
