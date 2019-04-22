import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from './helpers/Request.js';
import NavBar from './NavBar';
import ReservationListContainer from './containers/reservations/ReservationListContainer';
import ReservationFormContainer from './containers/reservations/ReservationFormContainer';
import EditFormContainer from './containers/reservations/EditFormContainer';



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


 render() {
   console.log('app.js: ', this.state.reservations);
   return (
     <Router >
       <React.Fragment>
       <NavBar />

           <Route exact path = '/' component={ReservationListContainer}/>
           <Route path = '/reservations' component={ReservationListContainer} reservations = {this.state.reservations} />
           <Route exact path = '/reservations/new' component= {ReservationFormContainer} />
           <Route path="/reservations/edit/:id" render = {(props) =>{
            const id = props.match.params.id;
            return <EditFormContainer id = {id} />
            }}
          />

       </React.Fragment>
     </Router>
   );
 }
}

export default App;
