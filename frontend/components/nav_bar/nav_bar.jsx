import React from 'react';

import Greeting from '../greeting/greeting_container'
import {Link} from 'react-router-dom'

export default ({currentUser, logout}) => {
    return (
      <header className="nav-bar">
        <ul className="nav-bar-items">
          <li>
            <Link to="/">
              <div className='nav-logo'>
                <img src="https://seat-check-seeds.s3-us-west-1.amazonaws.com/sleeper-chair.png" />
                <h1 className="logo">Seat Check</h1>
              </div>
            </Link>
          </li>
          <li>{/* Locations */}</li>
          <li>
            <Greeting />
          </li>
        </ul>
      </header>
    );
}

