import React from 'react';
import ReservationTable from '../../css/ReservationsTable.css';

const Reservation = (props) => {

  if(!props.date && !props.startTime && !props.numGuest) { return null; }

  const onDelete = () => {
    props.handleReservationDelete(props.id)
  }


  return (
    <div>
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
            <form>

            </form>
          </td>
        </tr>
        <button onClick={onDelete}>Delete</button>
    </div>
  )


}

export default Reservation;
