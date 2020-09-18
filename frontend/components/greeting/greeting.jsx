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
          <h3 className="user-header"><i className="far fa-user-circle"></i> Hi, {currentUser.first_name}! <i className="fas fa-chevron-down"></i></h3>
          <ul className="header-dropdown-menu"> 
          <div className="dropdown-item">
            <Link to={`/users/${currentUser.id}`} className="profile-link">
              <li>My Profile </li>
            </Link>
          </div>
          <div className="dropdown-item">
            <li onClick={() => logout()}>
              Sign Out
            </li>
          </div>

          </ul>
        </div>
      </div>
    );

    return !currentUser ?  greetingLinks(): loggedInMenuDrop()
}

export default Greeting;


