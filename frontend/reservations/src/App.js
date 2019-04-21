import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar';
import ReservationListContainer from './containers/reservations/ReservationListContainer';
import ReservationFormContainer from './containers/reservations/ReservationFormContainer';

class App extends Component {
  render() {
    return (
      <Router >
        <React.Fragment>
        <NavBar />

            <Route exact path = '/reservations' component={ReservationListContainer}/>
            <Route exact path = '/reservations/new' component= {ReservationFormContainer} />

        </React.Fragment>
      </Router>
    );
  }
}

export default App;
