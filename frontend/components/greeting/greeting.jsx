import React from 'react';
import {Link} from 'react-router-dom';


const Greeting = ({currentUser, logout, openModal}) => {

    const greetingLinks = () => (
        <nav className="greeting-links">
            <button className="form-button-signup nav-button" onClick={() => openModal('signup')}>Sign up</button>
            <button className="form-button-signin nav-button" onClick={() => openModal('signin')}>Sign in</button>
        </nav>
    );


    const loggedInMenuDrop = () => (
      <div className="greeting">
        <h3>{currentUser.first_name}</h3>
        <ul class="header-dropdown-menu">
          <li>My Profile</li>
          <li>My Dining History</li>
          <li>My Saved Restaurants</li>
          <li onClick={logout}>Sign Out</li>
        </ul>
      </div>
    );

    return currentUser ? loggedInMenuDrop() : greetingLinks();
  
}

export default Greeting;


