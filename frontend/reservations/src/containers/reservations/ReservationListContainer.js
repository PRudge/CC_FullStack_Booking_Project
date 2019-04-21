import React, {Component} from 'react';
import ReservationList from '../../components/reservations/ReservationList';

class ReservationListContainer extends Component {
  constructor(props){
    super(props);
  }

  render() {
      return (
        <div>
          <h2>Reservation List Container</h2>
          {/* <ReservationList reservations = {this.state.reservations} /> */}
        </div>
    )
  }

}
    export default ReservationListContainer;
