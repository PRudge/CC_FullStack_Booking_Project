import React, {Component} from 'react';

import Request from '../../helpers/Request';
import ReservationForm from '../../components/reservations/ReservationForm';

class ReservationFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {reservations: []};
    this.handleReservationPost = this.handleReservationPost.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get("/api/reservations").then((data) => {
      this.setState({reservations: data.reservations})
    });
  }

  handleReservationPost(reservation){
    const request = new Request();
      request.post('/api/reservations', reservation).then(() => {
      window.location = '/reservations'
    })
  }

  render(){

    return <ReservationForm
      handleReservationPost={this.handleReservationPost}
      />

  }
}

export default ReservationFormContainer;
