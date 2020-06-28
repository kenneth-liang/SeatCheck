import React from 'react';
import {Link, withRouter} from 'react-router-dom'



class RestaurantShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchRestaurant(this.props.match.params.restaurantId);
    }

    render (){
        // debugger
        const {restaurant} = this.props;
        const bImg = {
          backgroundImage: `url(${restaurant.bphotoURL})`,
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
                  <div className="reservation-box">
                    <div className="res-header">
                      <h3>
                        <span>Make a reservation</span>
                      </h3>
                    </div>
                    <div className="res-content">
                      <div className="res-filters">
                        <div className="party">
                          <div className="party-header">Party Size</div>
                          <div className="party-button">Party Select</div>
                        </div>
                        <div className="date-time">
                          <div className="date">
                            <div className="date-header">Date</div>
                            <div className="date-button">Date Select</div>
                          </div>
                          <div className="time">
                            <div className="time-header">Time</div>
                            <div className="time-button">Time Select</div>
                          </div>
                        </div>
                      </div>
                      <div className="res-search-button">
                        <button className="res-button">
                          <span>Find a Table</span>
                        </button>
                      </div>
                    </div>
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
                      <div className="box-description">{restaurant.open_time}</div>
                    </div>

                    <div className="rest-info-box">
                      <div className="box-head">Close</div>
                      <div className="box-description">{restaurant.close_time}</div>
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
                            <div className="rest-review-num"># Reviews</div>
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

                <div id="reviews">
                  <div id="reviews-summary"> Review Summary </div>
                  <div id="reviews-feed"> Review Feed </div>
                </div>
              </main>
            </div>
          </div>
        );
    }
}

export default withRouter(RestaurantShow);

