import React, {Component} from 'react';

import Request from '../../helpers/Request';
import ReservationForm from '../../components/reservations/ReservationForm';

class ReservationFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {reservations: []};
    this.handleReservationPost = this.handleReservationPost.bind(this);
  }

  handleReservationPost(reservation){
    const request = new Request();
    // if we add /new, it is working, check with the team
      request.post('/reservations/new', reservation).then(() => {
      // window.location = '/reservations'
    })
  }

  render(){

    return <ReservationForm
      handleReservationPost={this.handleReservationPost}
      />

  }
}

export default ReservationFormContainer;
