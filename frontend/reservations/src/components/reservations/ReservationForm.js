import React from 'react';
import Request from '../../helpers/Request';
import ReservationTable from '../../css/ReservationsTable.css';

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
            <label for="startTime"><span>Choose Time:</span>
            <select name = "startTime" className= "start-time">
              <option>12:00</option>
              <option>14:00</option>
              <option>16:00</option>
              <option>18:00</option>
              <option>20:00</option>
            </select>
            </label>
            <label for="firstName"><span>First Name:</span>
              <input type="text"  className= "first-name" name="firstName" required/>
            </label>
            <label for = "lastName"><span>Last Name:</span>
              <input type="text" className= "last-name" name="lastName" required/>
            </label>
            <label for = "date"><span>Date:</span>
              <input type="date" className= "date" name="date" required/>
            </label>
            <label for = "phoneNum"><span>Phone Number:</span>
              <input type="text" className= "phone-num" name="phoneNum" required/>
            </label>
            <label for = "numGuest"><span>Number of Guests:</span>
              <input type="number" className="num-guest" name="numGuest" min="1" max="50" required/>
            </label>

            </fieldset>
            <input type="submit" value="Save" id="save"/>
          </form>
        </div>
    )


}

export default ReservationForm;
