import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PaginationView = (props) => {
  const pageLinks = [];
  //Pages total less than 6
  if (props.pages < 6) {
    for (let i = 1; i <= props.pages + 1; i++) {
      let active = props.currentPage === i ? true : false;
      pageLinks.push(
        <PaginationItem
          active={active}
          key={i}
          onClick={() => props.nextPage(i)}
        >
          {' '}
          <PaginationLink href="#">{i}</PaginationLink>
        </PaginationItem>
      );
    }
  } else if (props.currentPage < 4) {
    for (let i = 1; i < 6; i++) {
      let active = props.currentPage === i ? true : false;
      pageLinks.push(
        <PaginationItem
          active={active}
          key={i}
          onClick={() => props.nextPage(i)}
        >
          {' '}
          <PaginationLink href="#">{i}</PaginationLink>
        </PaginationItem>
      );
    }
  } else if (props.currentPage + 2 >= props.pages) {
    for (let i = props.pages - 3; i < props.pages + 2; i++) {
      let active = props.currentPage === i ? true : false;
      pageLinks.push(
        <PaginationItem
          active={active}
          key={i}
          onClick={() => props.nextPage(i)}
        >
          {' '}
          <PaginationLink href="#">{i}</PaginationLink>
        </PaginationItem>
      );
    }
  } else {
    for (let i = props.currentPage - 2; i < props.currentPage + 3; i++) {
      let active = props.currentPage === i ? true : false;
      pageLinks.push(
        <PaginationItem
          active={active}
          key={i}
          onClick={() => props.nextPage(i)}
        >
          {' '}
          <PaginationLink href="#">{i}</PaginationLink>
        </PaginationItem>
      );
    }
  }
  return (
    <Pagination>
      {props.currentPage > 1 ? (
        <PaginationItem onClick={() => props.nextPage(props.currentPage - 1)}>
          {' '}
          <PaginationLink href="#">{`<`}</PaginationLink>
        </PaginationItem>
      ) : (
        ''
      )}

      {pageLinks}
      {props.currentPage < props.pages + 1 ? (
        <PaginationItem onClick={() => props.nextPage(props.currentPage + 1)}>
          {' '}
          <PaginationLink href="#">{`>`}</PaginationLink>
        </PaginationItem>
      ) : (
        ''
      )}
    </Pagination>
  );
};
export default PaginationView;
