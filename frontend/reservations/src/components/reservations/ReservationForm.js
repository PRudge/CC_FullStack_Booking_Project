import React from 'react';
import Request from '../../helpers/Request';

const ReservationForm = (props) => {


  function handleSubmit(event){
    event.preventDefault();
    const customer = {
      "firstName": event.target.firstName.value,
      "lastName": event.target.lastName.value,
      "phoneNum": event.target.phoneNum.value,
    }
    const reservation = {
      "startTime": event.target.startTime.value,
      "date": event.target.date.value,
      "numGuest": event.target.numGuest.value,
      "restaurant": "http://localhost:8080/restaurant/1",
      "customer": null
    }
    const req = new Request()
    req.post('/customers', customer)
    .then(data => data.json())
    .then((newCustomer) => {
      reservation.customer = "http://localhost:8080/customers/" + newCustomer.id
      return reservation;
    })
    .then(reservation => props.handleReservationPost(reservation));
  }

  return (
    <div>
    <form className="reservation-form" onSubmit={handleSubmit}>

    <fieldset><legend>Add a Reservation</legend>
    <label for="start_time">Start Time:  <input type="text" className="start-time" name="startTime"/></label>
    <label for="first-name">First Name: <input type="text"  className= "first-name" name="firstName"/></label>
    <label for = "last-name">Last Name: <input type="text" className= "last-name" name="lastName"/></label>
    <label for = "date">Date: <input type="text" className= "date" name="date"/></label>
    <label for = "phone-num">Phone Number: <input type="number" className= "phone-num" name="phoneNum"/> </label>
    <label for = "numGuest">Number of Guests: <input type="number" className="num-guest" name="numGuest"/></label>
    </fieldset>
      <input type="submit" value="Save" id="save"/>

    </form>
    </div>
  )


}

export default ReservationForm;
