import React from 'react';
import Reservation from './Reservation';

const ReservationList = ({reservations, handleReservationDelete}) => {
    const allReservations = reservations.map((reservation) => {
      // <tbody key={reservation.id} className="reservation">
      // </tbody>
      return (
            <Reservation key={reservation.id} id={reservation.id}
            firstName={reservation.customer.firstName} lastName={reservation.customer.lastName}
            date={reservation.date} startTime={reservation.startTime} numGuest={reservation.numGuest}
            phoneNum={reservation.customer.phoneNum} handleReservationDelete={handleReservationDelete}/>
      );
    });

    return (
      <div className = "tbl-container">
          <table className="table">
          {/* <div className="tbl-header"> */}
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
            {/* </div> */}
            {/* <div className="tbl-content"> */}
            <tbody className="reservation">
              {allReservations}
            </tbody>
            {/* </div> */}
          </table>
       </div>
    )
}

export default ReservationList;
