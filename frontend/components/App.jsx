import React from "react";
import {Route, Link} from 'react-router-dom';

import GreetingContainer from "./greeting/greeting_container"
import SignInFormContainer from './session_form/signin_form_container'
import SignUpFormContainer from './session_form/signup_form_container'

import Modal from "./modal/modal";
import NavBar from './nav_bar/nav_bar_container'

import {AuthRoute} from '../util/route_util'


const App = () => (
  <div>
    <Modal/>
    <NavBar />
    <header>
      {/* <Link to="/" className="header-link">
        <h1>SeatCheck</h1>
        {/* <h3>Where Your Seat Is Always Saved</h3> */}
      {/* </Link>  */}
   
      {/* <GreetingContainer/> */}
    </header>
  </div>
);

export default App;

   