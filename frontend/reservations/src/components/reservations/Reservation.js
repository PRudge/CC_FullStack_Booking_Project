import React from 'react';
import ReservationTable from '../../css/ReservationsTable.css';

const Reservation = (props) => {

  if(!props.date && !props.startTime && !props.numGuest) { return null; }

  return (
        <tr>
            <td>{props.firstName} {props.lastName}</td>
            <td>{props.date}</td>
            <td>{props.startTime}</td>
            <td>{props.numGuest}</td>
            <td>{props.phoneNum}</td>
            <td>
              <form method="GET">
                <input type="submit" value="edit" />
              </form>
              <form method="POST">
                <input type="submit" value="delete" />
              </form>
            </td>
        </tr>
  )


}

export default Reservation;
