import React from "react";
import {Route, Link, Switch} from 'react-router-dom';

import GreetingContainer from "./greeting/greeting_container"
import SignInFormContainer from './session_form/signin_form_container'
import SignUpFormContainer from './session_form/signup_form_container'
import UserContainer from './user/user_container'
import RestaurantIndexContainer from './restaurants/restaurant_index_container'
import SearchContainer from './search/search_container'
import Modal from "./modal/modal";
import NavBar from './nav_bar/nav_bar_container'

import {AuthRoute, ProtectedRoute} from '../util/route_util'


const App = () => (
  <div>
    <Modal />
    <header>
      <NavBar />
    </header>
    <Switch>
      <Route exact path="/" component={SearchContainer}/>
      <Route path="/api/users/:id" component={UserContainer}/>
    </Switch>


  </div>
);

export default App;

     