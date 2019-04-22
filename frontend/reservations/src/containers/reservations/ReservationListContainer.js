import React, {Component} from 'react';
import ReservationList from '../../components/reservations/ReservationList';

class ReservationListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {reservations: []}
  }

  render() {
      return (
        <div>
          <h2>Reservation List Container</h2>
          {/* <p>{props.reservations}</p> */}
           <ReservationList reservations = {this.state.reservations} />
        </div>
    )
  }

}
    export default ReservationListContainer;
