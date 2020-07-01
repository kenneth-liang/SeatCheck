import React from "react";
import {Route, Link, Switch} from 'react-router-dom';

import GreetingContainer from "./greeting/greeting_container"
import SignInFormContainer from './session_form/signin_form_container'
import SignUpFormContainer from './session_form/signup_form_container'
import UserContainer from './user/user_container'
import SearchContainer from './search/search_container'
import RestaurantShowContainer from './restaurants/restaurant_show_container'
import HomeContainer from './home/home_container'
import RestaurantIndexContainer from "./restaurants/restaurant_index_container"

import Modal from "./modal/modal";
import NavBar from './nav_bar/nav_bar_container'

import {AuthRoute, ProtectedRoute} from '../util/route_util'

// debugger
const App = () => (
  <div>
    <Modal />
    <NavBar />
    <Switch>
      <Route exact path="/restaurants" component={RestaurantIndexContainer} />
      <Route exact path="/restaurants/:restaurantId" component={RestaurantShowContainer} />
      <Route exact path="/users/:id" component={UserContainer} />
      <Route exact path="/" component={HomeContainer} />
    </Switch>
  </div>
);

export default App;

     