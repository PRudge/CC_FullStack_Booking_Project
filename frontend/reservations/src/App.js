import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from './helpers/Request.js';
import NavBar from './NavBar';
import ReservationList from './components/reservations/ReservationList';
import ReservationFormContainer from './containers/reservations/ReservationFormContainer';
import EditFormContainer from './containers/reservations/EditFormContainer';
import ErrorPage from './components/reservations/ErrorPage';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {reservations: []}
  }

  componentDidMount() {
    let request = new Request()
    request.get('/reservations').then((data) => {
      this.setState({reservations: data._embedded.reservations})
    })
  }


  handleReservationDelete(id){
    const request = new Request();
    const url = '/reservations/' + id;
    request.delete(url).then(() => {
      window.location = '/reservations'
    })
  }

  render() {
    return (
      <Router >
        <React.Fragment>
          <NavBar />
          <Switch>
            <Route
              exact path = '/reservations'
              render={() => <ReservationList reservations={this.state.reservations}/>}
            />
            <Route
              path = '/reservations/new'
              render={ () => <ReservationFormContainer reservations={this.state.reservations} /> }
            />
            <Route path="/reservations/edit/:id" render = {(props) =>{
              const id = props.match.params.id;
              return <EditFormContainer id = {id} />
            }}
          />

          <Route component={ErrorPage} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}
}

export default App;
