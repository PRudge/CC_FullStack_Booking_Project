import React, {Component} from 'react';
// import ReservationList from '../components/ReservationList';
// import Reservation from '../components/Reservation';

class ReservationListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      restaurant: [
        {
          capacity: 65,
          max_time: 2,
          openHour: "19:00",
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
      ]
    }
  }

  render() {
      console.log(this.state);
    return (
      <div>
    <h2>test</h2>
  </div>
    )
  }
}





    export default ReservationListContainer;
