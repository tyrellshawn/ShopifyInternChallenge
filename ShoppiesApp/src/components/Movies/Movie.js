import React, { Component, useContext, useState } from 'react';
import { Card } from 'reactstrap';
import {
  NominationContext,
  UpdateNominationContext,
  useNominations,
} from '../../contexts/NominationContext';

const Movie = (props) => {
  const { nominations, setNominations } = useNominations();
  const [nominated, setNominated] = useState(nominations.has(props.imdbID));

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
                if (!nominated) {
                  //Nominating a Movie
                  if (prev.size < 5) {
                    prev.set(props.imdbID, props);

                    return prev;
                  } else {
                    console.log(`5 Movies Nominated`);
                    return prev;
                  }
                } else {
                  // Un-Nominating a Movie
                  try {
                    prev.delete(props.imdbID);
                    return prev;
                  } catch (e) {
                    console.log(`Error occurred un-nominating movie `);
                  }
                }
              });
              setNominated(nominations.has(props.imdbID));
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
