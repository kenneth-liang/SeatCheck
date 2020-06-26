import React from 'react';

import Greeting from '../greeting/greeting_container'
import {Link} from 'react-router-dom'

export default ({currentUser, logout}) => {
    return (
      <header className="nav-bar">
        <ul className="nav-bar-items">
          <li>
            <Link to="/">
                <h1 className="logo">SeatCheck</h1>
            </Link>
          </li>
          <li>
            {/* Locations */}
          </li>
          <li>
            <Greeting />
          </li>
        </ul>
      </header>
    );
}

