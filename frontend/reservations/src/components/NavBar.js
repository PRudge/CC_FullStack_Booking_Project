import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
  <nav>
      <img src="/images/calendar.png" alt="Logo"/>

      <ul>
        <li >
          <Link to="/reservations">Reservations</Link>
        </li>
        <li>
          <Link to="/reservations/new">Create Reservations</Link>
        </li>
        <li>
          <Link to="/edit/:id">Edit Reservations</Link>
        </li>

      </ul>
    </nav>
  )
}

export default NavBar;
