import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from './helpers/Request.js';
import NavBar from './NavBar';
import ReservationList from './components/reservations/ReservationList';
import ReservationFormContainer from './containers/reservations/ReservationFormContainer';
import EditFormContainer from './containers/reservations/EditFormContainer';
import ErrorPage from './components/reservations/ErrorPage';
import ReservationTable from './css/ReservationsTable.css';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      reservations: [],
      restaurantCapacity: 0
    }

    this.handleReservationDelete = this.handleReservationDelete.bind(this)
    this.isAvailable = this.isAvailable.bind(this)
  }

  componentDidMount() {
    let request = new Request()
    request.get('/reservations').then((data) => {
      this.setState({reservations: data._embedded.reservations})

    let request2 = new Request()
    request2.get('/restaurants/1').then((data) => {
        this.setState({restaurantCapacity: data.capacity}) //() => {console.log("capacity:", this.state.restaurantCapacity)}
      })
    })
  }


  handleReservationDelete(id){
    const request = new Request();
    const url = '/reservations/' + id;
    request.delete(url).then(() => {
      window.location = '/reservations'
    })
  }

  isAvailable(startTime, date, newGuests) {
    let totalGuest = 0;

    for (let i=0 ; i < this.state.reservations.length; i++) {
      let reservation = this.state.reservations[i];
        if (reservation.startTime === startTime && reservation.date === date) {
          let guests = reservation.numGuest;
          totalGuest += guests;
        }
      }
     return ( newGuests < (this.state.restaurantCapacity - totalGuest))
  }

  render() {
    return (
      <Router >
        <React.Fragment>
          <NavBar />
          <Switch>
            <Route
              exact path ='/' render={() => <ReservationList reservations={this.state.reservations} handleReservationDelete={this.handleReservationDelete} />}/>
              <Route
                exact path = '/reservations'
                render={() => <ReservationList reservations={this.state.reservations} handleReservationDelete={this.handleReservationDelete} />}
              />
                <Route
                  path = '/reservations/new'
                  render={ () => <ReservationFormContainer reservations={this.state.reservations} isAvailable={this.isAvailable}/> }
                />
                <Route path="/reservations/edit/:id" render = {(props) =>{
                  const id = props.match.params.id;
                  return <EditFormContainer id = {id} isAvailable={this.isAvailable}/>
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
