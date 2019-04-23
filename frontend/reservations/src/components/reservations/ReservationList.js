import React from 'react';
import Reservation from './Reservation';

const ReservationList = ({reservations}) => {
    const allReservations = reservations.map((reservation) => {
      return (
        <div key={reservation.id} className="reservation-item">
          <div className="reservation">
            <Reservation firstName={reservation.customer.firstName} lastName={reservation.customer.lastName} date={reservation.date} startTime={reservation.startTime} numGuest={reservation.numGuest} phoneNum={reservation.customer.phoneNum}/>
          </div>
        </div>
      );
    });

    return (
        <div className='reservations-container'>
          <table className="table">
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Start time</th>
              <th>Total Guests</th>
              <th>Phone Number</th>
              <th></th>
            </tr>

            {allReservations}
          </table>
        </div>

    )
}

export default ReservationList;
