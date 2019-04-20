import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (
    <header>
      <img src="/images/calendar.png" alt="Logo"/>

      <ul>
        <li className="navLink">
          <Link to="/reservations">Reservations</Link>
        </li>
        <li className="navLink">
          <Link to="/reservations/new">Create Reservations</Link>
        </li>
        <li className="navLink">
          <Link to="/edit/:id">Edit Reservations</Link>
        </li>

      </ul>
    </header>
  )
}

export default NavBar;
