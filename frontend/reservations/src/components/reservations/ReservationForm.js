import React from 'react';
import Request from '../../helpers/Request';

const ReservationForm = (props) => {


  function handleSubmit(event){
    event.preventDefault();
    const reservation = {
        "startTime": event.target.startTime.value,
        "date": event.target.date.value,
        "numGuests": event.target.numGuests.value,
        "firstName": event.target.firstName.value,
        "lastName": event.target.lastName.value,
        "phoneNumber": event.target.phoneNumber.value,
      }
    props.handleReservationPost(reservation)
  }

  function handleReservationPost(reservation) {
    const request = new Request();
    request.post('/reservations', reservation).then(() => {
      window.location = '/reservations'
    })
  }

      return (
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="startTime" name="startTime"/>
            <input type="text" placeholder="First Name" name="firstName"/>
            <input type="text" placeholder="Last Name" name="lastName"/>
            <input type="text" placeholder="date" name="date"/>
            <input type="number" placeholder="phoneNumber" name="phoneNumber"/>
            <input type="number" placeholder="numGuests" name="numGuests"/>
            <button type="submit">Save</button>
          </form>
        </div>
    )


}

export default ReservationForm;
