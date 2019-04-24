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
  let today = new Date().toISOString().slice(0, 10);

      return (
        <div>
          <form className="reservation-form" onSubmit={handleSubmit}>
          <fieldset><legend>Add a Reservation</legend>
            <label htmlFor="startTime"><span>Choose Time:</span>
            <select name = "startTime" className= "start-time">
              <option>12:00</option>
              <option>14:00</option>
              <option>16:00</option>
              <option>18:00</option>
              <option>20:00</option>
            </select>
            </label>
            <label htmlFor="firstName"><span>First Name:</span>
              <input type="text"  className= "first-name" name="firstName" required/>
            </label>
            <label htmlFor="lastName"><span>Last Name:</span>
              <input type="text" className= "last-name" name="lastName" required/>
            </label>
            <label htmlFor="date"><span>Date:</span>
              <input type="date" className= "date" name="date" min={today} placeholder="Enter Date" required/>
            </label>
            <label htmlFor="phoneNum"><span>Phone Number:</span>
              <input type="text" className= "phone-num" name="phoneNum" minLength="10" maxLength="11" required/>
            </label>
            <label htmlFor="numGuest"><span>Number of Guests:</span>
              <input type="number" className="num-guest" name="numGuest" min="1" max="50" required/>
            </label>

            </fieldset>
            <input type="submit" value="Save" id="save" />
            <input type="button" value="Go Back" id="go-back" onClick = { () =>  window.location='/reservations'}/>
          </form>
        </div>
    )


}

export default ReservationForm;
