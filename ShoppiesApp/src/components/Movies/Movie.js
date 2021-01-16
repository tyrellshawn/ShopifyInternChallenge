import React, { Component, useContext, useState } from 'react';
import { Card } from 'reactstrap';
import {
  NominationContext,
  UpdateNominationContext,
} from '../../contexts/NominationContext';

var Movie = (props) => {
  const { nominated, setNominations } = useContext(NominationContext);

  // const useNominationUpdate = useNominationUpdate();

  return (
    <div className="col-md-3">
      <Card>
        <div className="well text-center">
          {props.image === 'N/A' ? (
            <img
              src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
              style={{ width: '200px', height: '250px' }}
            />
          ) : (
            <img
              src={props.image}
              style={{ width: '200px', height: '250px' }}
            />
          )}

          <h5>
            {props.title.length < 26
              ? props.title
              : props.title.substring(0, 26) + '...'}
          </h5>
          <h5>({props.releaseYear})</h5>
          <a
            className={nominated ? `btn  btn-secondary` : `btn  btn-primary`}
            onClick={() => {
              setNominations((prev) => {
                console.log(`Nominated movie with ID: ${props.imdbID}`);
                return [...prev, { key: props.imdbID }];
              });
            }}
          >
            {nominated ? 'Un-Nominate' : 'Nominate'}
          </a>
        </div>
      </Card>
    </div>
  );
};
export default Movie;
