import React, {Component} from 'react';

class ReservationList extends Component {

  render() {
     const reservationItems = this.props.reservations.map((reservation) => {
       return (
         console.log(reservation)
         // <Reservation date={reservation.date} startTime={reservation.startTime} key={reservation.id}/>
       );
     });

     return (
       <div className='reservations-list'>
         <ul>
           <p>test list</p>
           {/* {reservationItems} */}
         </ul>
       </div>
     );
   }
}

export default ReservationList;
