import React, {Component} from 'react';

import Request from '../../helpers/Request';
import ReservationForm from '../../components/reservations/ReservationForm';


class ReservationFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = { reservations: []};
    this.handleReservationPost = this.handleReservationPost.bind(this);
  }

  handleReservationPost(reservation){
    if ( this.props.isAvailable(reservation.startTime, reservation.date, reservation.numGuest)) {
      const request = new Request();
      request.post('/reservations', reservation).then(() => {
      window.location = '/reservations'
    })
    } else {
    window.alert("no space bitches")
  }
}

  render(){

    return <ReservationForm
      handleReservationPost={this.handleReservationPost}
      />

  }
}

export default ReservationFormContainer;
