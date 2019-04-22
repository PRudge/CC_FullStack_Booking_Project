import React from 'react';
import Reservation from './Reservation';

const ReservationList = ({reservations}) => {
    const allReservations = reservations.map((reservation) => {
      return (
        <li key={reservation.id} className="reservation-item">
          <div className="reservation">
            <Reservation date={reservation.date} startTime={reservation.startTime} numGuest={reservation.numGuest}/>
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
