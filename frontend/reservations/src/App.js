import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar';
import ReservationListContainer from './containers/reservations/ReservationListContainer';

class App extends Component {
  render() {
    return (
      <Router >
        <React.Fragment>
          <NavBar />
          <ReservationListContainer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
