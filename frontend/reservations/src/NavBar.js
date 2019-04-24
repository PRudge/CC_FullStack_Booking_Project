import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (
    <header>
      <img src="/images/calendar.jpg" alt="Logo"/>
      <nav>
      <ul>
        <li className="navLink">
          <Link to="/reservations">Reservations</Link>
        </li>
        <li className="navLink">
          <Link to="/reservations/new">Create Reservations</Link>
        </li>

      </ul>
      </nav>
    </header>
  )
}

export default NavBar;
