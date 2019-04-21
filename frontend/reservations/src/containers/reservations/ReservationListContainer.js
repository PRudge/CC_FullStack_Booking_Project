import React, {Component} from 'react';
import ReservationList from '../../components/reservations/ReservationList';

class ReservationListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
        reservations: [
          {
            id: 1,
            date: "21/04/2019",
            startTime: "19:30",
            numGuests: 6,
            customer: {
              id: 10,
              name: "Janet Doe",
              phoneNumber: "07312343245"
            }
          },
          {
            id: 2,
            date: "21/04/2019",
            startTime: "19:45",
            numGuests: 4,
            customer: {
              id: 10,
              name: "Janet Doe",
              phoneNumber: "07312343245"
            }
          },
          {
            id: 3,
            date: "22/04/2019",
            startTime: "21:00",
            numGuests: 2,
            customer: {
              id: 20,
              name: "John Smith",
              phoneNumber: "0765432342"
            }
          }
        ]
    }
  }

  render() {
      console.log(this.state);
    return (
      <div>
        <h2>Reservation List Container</h2>
        <p>test reservation: {this.state.reservations}</p>

        {/* <p>Total capacity: {this.state.restaurant.capacity}</p>
        <p>Maximum time for reservations: {this.state.restaurant.maxTime} hours</p>
        <p>Opening time: {this.state.restaurant.openHour}</p> */}

        <ReservationList reservations={this.state.reservations} />
  </div>
    )
  }
}
    export default ReservationListContainer;
