import React from 'react';
import Reservation from './Reservation';

const ReservationList = ({reservations, handleReservationDelete}) => {
    const allReservations = reservations.map((reservation) => {
      return (
            <Reservation key={reservation.id} id={reservation.id} firstName={reservation.customer.firstName} lastName={reservation.customer.lastName} date={reservation.date} startTime={reservation.startTime} numGuest={reservation.numGuest} phoneNum={reservation.customer.phoneNum} handleReservationDelete={handleReservationDelete}/>
      );
    });

    return (
      <div className = "tbl-container">
          <table className="tbl-layout">
          
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Start time</th>
                <th>Total Guests</th>
                <th>Phone Number</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {allReservations}
            </tbody>

          </table>
       </div>
    )
}

export default ReservationList;
