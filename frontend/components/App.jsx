import React from "react";
import {Route} from 'react-router-dom';

import GreetingContainer from "./greeting/greeting_container"
import SignInFormContainer from './session_form/signin_form_container'
import SignUpFormContainer from './session_form/signup_form_container'
import Modal from "./modal/modal";

import {AuthRoute} from '../util/route_util'


const App = () => (
  <div>
    <Modal/>
    <header>
      <h1>SeatCheck</h1>
      <h3>Where Your Seat Is Always Saved</h3>
      <GreetingContainer/>
    </header>
  </div>
);

export default App;

   