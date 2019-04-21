import React from 'react';
import Reservation from './Reservation';

const ReservationList = (props) => {

    const reservations = props.reservations.map((reservation) => {
      return (
        <li key={reservation.id} className="reservation-item">
          <div className="reservation">
            <Reservation date={reservation.date} startTime={reservation.startTime} />
          </div>
        </li>
      );
    });

    return (
      <div className='reservations-list'>
        <ul>
          <h3>Reservation List container</h3>
          {reservations}
        </ul>
      </div>
    );
}

export default ReservationList;
