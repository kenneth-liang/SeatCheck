import React from 'react';
import {Link} from 'react-router-dom';
import UserContainer from '../user/user_container'

const Greeting = ({currentUser, logout, openModal}) => {

    const greetingLinks = () => (
        <nav className="greeting-links">
            <button className="form-button-signup nav-button" onClick={() => openModal('signup')}>Sign up</button>
            <button className="form-button-signin nav-button" onClick={() => openModal('signin')}>Sign in</button>
        </nav>
    );

    const loggedInMenuDrop = () => (
      <div className="greeting">
        <div className="userProfileDrop">
          <h3 className="user-header">Hi, {currentUser.first_name}!</h3>
          <ul className="header-dropdown-menu">
            <li>My Reservations</li>
            <li>My Saved Restaurants</li>
            <li> 
              <Link to={`/users/${currentUser.id}`}>My Profile</Link>
            </li>
            <li onClick={() => logout()}>
              Sign Out
            </li>
          </ul>
        </div>
        {/* <div>Upcoming Reservations</div> */}
      </div>
    );

    return !currentUser ?  greetingLinks(): loggedInMenuDrop()
}

export default Greeting;


