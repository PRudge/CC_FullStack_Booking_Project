import React from 'react';
import Reservation from './Reservation';

const ReservationList = ({reservations}) => {
    const allReservations = reservations.map((reservation) => {
      return (
        <li key={reservation.id} className="reservation-item">
          <div className="reservation">
            <Reservation firstName={reservation.customer.firstName} lastName={reservation.customer.lastName} date={reservation.date} startTime={reservation.startTime} numGuest={reservation.numGuest} phoneNum={reservation.customer.phoneNum}/>
          </div>
        </li>
      );
    });

    return (
        <ul className='reservations-list'>
          <h3>Reservation List container</h3>
          {allReservations}
        </ul>

    )
}

export default ReservationList;
