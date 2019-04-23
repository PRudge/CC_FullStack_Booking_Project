import React from 'react';

const Reservation = (props) => {

  if(!props.date && !props.startTime && !props.numGuest) { return null; }

  return (
    <div>
      <h4>Reservation Container</h4>
      <p>Name: {props.firstName} {props.lastName}</p>
      <p>Date: {props.date}</p>
      <p>Start time: {props.startTime}</p>
      <p>Number of Guests: {props.numGuest}</p>
      <p>Phone Number: {props.phoneNum}</p>
    </div>
  )


}

export default Reservation;
