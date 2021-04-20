import React from "react";
import {Route, Switch} from 'react-router-dom';


import UserContainer from './user/user_container'
import RestaurantShowContainer from './restaurants/restaurant_show_container'
import HomeContainer from './home/home_container'
import RestaurantIndexContainer from "./restaurants/restaurant_index_container"
import MapSearchContainer from './map/map_search_container'
import NewRatingContainer from './rating/rating_form_container'
import EditRatingContainer from './rating/edit_rating_container'
import Modal from "./modal/modal";
import NavBar from './nav_bar/nav_bar_container'

import {AuthRoute, ProtectedRoute} from '../util/route_util'

const App = () => (
  <div>
    <Modal />
    <NavBar />
    <Switch>
      <Route exact path="/restaurants" component={RestaurantIndexContainer} />
      <Route exact path="/restaurants/:restaurantId" component={RestaurantShowContainer} />
      <Route exact path="/maps" component={MapSearchContainer}/>
      <ProtectedRoute exact path="/users/:id" component={UserContainer} />
      <ProtectedRoute exact path="/restaurants/:id/ratings/new" component={NewRatingContainer} />
      <ProtectedRoute exact path="/restaurants/:id/ratings/:ratingId/edit" component={EditRatingContainer} />
      <Route exact path="/" component={HomeContainer} />
    </Switch>

    <footer className="footer">
      <div className="footer-description">
        Inspired by: 
        <img className="footer-icon-ot" src="https://seat-check-seeds.s3-us-west-1.amazonaws.com/opentablelogo.png"/>
      </div>
      <div className="footer-links">
        <a href="https://github.com/kenneth-liang" target="_blank"><i className="fab fa-github"></i><p> Github</p></a><br />
        <a href="https://www.linkedin.com/in/devkennethliang/" target="_blank"><i className="fab fa-linkedin"></i><p> LinkedIn</p></a><br />
        <a href="https://kennethliang.com/" target="_blank"><i className="fas fa-user user-icon" target="_blank"></i><p> About Me</p></a>
      </div>
    </footer>
  </div>
);

export default App;

     