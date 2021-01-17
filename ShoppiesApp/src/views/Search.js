import React, { Component } from 'react';
import axios from 'axios';

import MovieList from '../components/Movies/MovieList';
import SearchBox from '../components/Search/SearchBox';
import PaginationView from '../components/Search/Pagination';
import NotificationAlert from 'react-notification-alert';
// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from 'reactstrap';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchTerm: '',
      totalResult: 0,
      currentPage: 1,
      alertActive: false,
    };
    this.notificationAlertRef = React.createRef();
    this.apiKey = '63e90fe3';
  }
  alertUser = () => {
    if (!this.state.alertActive) {
      this.setState({ alertActive: true });
      let options = {
        place: 'br',
        message: (
          <div>
            <div>
              <span>You have nominated 5 movies. Un-nominate please.</span>
            </div>
          </div>
        ),
        type: 'danger',
        icon: 'tim-icons icon-bell-55',
        autoDismiss: 1,
      };
      this.notificationAlertRef.current.notificationAlert(options);
    } else {
      this.setState({ alertActive: false });
    }
  };
  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(
        `https://www.omdbapi.com?t=${this.state.searchTerm}?&s=${this.state.searchTerm}&apikey=${this.apiKey}&type=movie`
      )
      .then((response) => {
        if (response.data.Response === 'False') {
          console.log('API Error: ' + response.data.Error);
        } else {
          this.setState({
            movies: [...response.data.Search],
            totalResult: response.data.totalResults,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
    this.handleSubmit(event);
  };
  nextPage = (pageNumber) => {
    axios
      .get(
        `http://www.omdbapi.com?t=${this.state.searchTerm}?&s=${this.state.searchTerm}&apikey=${this.apiKey}&type=movie&page=${pageNumber}`
      )
      .then((response) => {
        if (response.data.Response === 'False') {
          console.log('API Error: ' + response.data.Error);
        } else {
          this.setState({
            movies: [...response.data.Search],
            currentPage: pageNumber,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const numberOfPages = Math.floor(this.state.totalResult / 10);
    return (
      <>
        <div className="content">
          <div className="react-notification-alert-container">
            <NotificationAlert ref={this.notificationAlertRef} />
          </div>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Search For a Movie</CardTitle>
                </CardHeader>
                <CardBody></CardBody>
              </Card>
            </Col>
            <Col md="12">
              <SearchBox
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <hr />
              <span>
                {' '}
                You Searched For:" {this.state.searchTerm}" Total Results:{' '}
                {this.state.totalResult}
              </span>

              <MovieList
                class="movies"
                movies={this.state.movies}
                alert={this.alertUser}
              />
            </Col>
          </Row>
          <Row className="center">
            {this.state.totalResult > 10 ? (
              <PaginationView
                pages={numberOfPages}
                nextPage={this.nextPage}
                currentPage={this.state.currentPage}
              />
            ) : (
              ''
            )}
          </Row>
        </div>
      </>
    );
  }
}

export default Search;
