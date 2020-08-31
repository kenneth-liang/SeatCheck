import React from 'react';
import {Route, withRouter,Link} from 'react-router-dom'

import ReservationForm from '../reservation/reservation_form_container'
import RatingIndexContainer from '../rating/rating_index_container'
import RatingForm from '../rating/rating_form_container'

class RestaurantShow extends React.Component{
    constructor(props){
        super(props)
    }

     componentDidUpdate(preprops) {
    }

    componentDidMount(){
      Promise.all([
        this.props.fetchRestaurant(this.props.match.params.restaurantId),
        this.props.fetchRestaurantRatings(this.props.match.params.restaurantId),
        
      ])
    }

    render (){
      if (!this.props.restaurant) return null
        const {restaurant} = this.props;
        const bImg = {
          backgroundImage: `url(${restaurant.bphoto})`,
        };
        return (
          <div className="single-restaurant-show">
            <div className="rest-show-header">
              <div className="bimg" id="rest-bimg" style={bImg}></div>
              <div className="fav-button">
                <span>
                  <div className="fav-button-text">
                    {/* need to have condition here and icon */}
                    <span>Save this restaurant</span>
                  </div>
                </span>
              </div>
            </div>
            <div className="rest-show-content">
              <aside className="rest-right-side">
                <div className="side-content">
                  <div className ="restaurant-reservation">
                    <ReservationForm/>
                  </div>
                  <div className="rest-location">
                      Map coming soon...
                  </div>
                  <div className="rest-info">
                    <div className="rest-info-box">
                      <div className="box-head">Street</div>
                      <div className="box-description">{restaurant.address} </div>
                    </div>
                    <div className="rest-info-box">
                      <div className="box-head">Neighborhood</div>
                      <div className="box-description">{restaurant.city}</div>
                    </div>
                    <div className="rest-info-box">
                      <div className="box-head">Phone Number</div>
                      <div className="box-description">{restaurant.phone_number}</div>
                    </div>

                    <div className="rest-info-box">
                      <div className="box-head">Open</div>
                      <div className="box-description">{restaurant.open_time.slice(11,19)}</div>
                    </div>

                    <div className="rest-info-box">
                      <div className="box-head">Close</div>
                      <div className="box-description">{restaurant.close_time.slice(11,19)}</div>
                    </div>

                    <div className="rest-info-box">
                      <div className="box-head">Cuisine</div>
                      <div className="box-description">{restaurant.cuisine}</div>
                    </div>
                  </div>
                </div>
              </aside>
              <main className="restaurant-main-content">
                <div id="overview-section">
                  <div className="overview-head">
                    <div className="overview-title"><h1>{restaurant.name}</h1></div>
                    <div className ="overview-detail">
                        <div className="overview-rr">
                            <div className="rest-ratings">Rating: TBD</div>
                        </div>
                        <div className="overview-price">
                            <div>${restaurant.price}</div>
                        </div>
                        <div className="overview-cuisine">
                            <div>{restaurant.cuisine}</div>
                        </div>
                    </div>
                  </div>
                  <div className="overview-description">
                    {restaurant.description}
                  </div>
                </div>

                <div id="ratings">
                  <h3 className="ratings-title">What people are saying:</h3>
                  <Route path={'/restaurants/:restaurantId'} component={RatingIndexContainer} />
                  <Route path={'/restaurants/:restaurantId'} component={RatingForm} />
                </div>
              </main>
            </div>
          </div>
        );
    }
}

export default withRouter(RestaurantShow);

