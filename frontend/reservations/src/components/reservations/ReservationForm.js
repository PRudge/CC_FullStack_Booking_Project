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
          <form onSubmit={handleSubmit}>
            <label for="time-slot-select">Choose Time:</label>
            <select name="startTime">
              <option>12:00</option>
              <option>14:00</option>
              <option>16:00</option>
              <option>18:00</option>
              <option>20:00</option>
            </select>
            <input type="text" placeholder="First Name" name="firstName"/>
            <input type="text" placeholder="Last Name" name="lastName"/>
            <input type="date" placeholder="Date" name="date"/>
            <input type="text" placeholder="Phone Number" name="phoneNum" required
       minlength="10" maxlength="11"/>
            <input type="number" placeholder="Total Guests" name="numGuest" min="1" max="50"/>
            <button type="submit">Save</button>
          </form>
        </div>
    )


}

export default ReservationForm;
