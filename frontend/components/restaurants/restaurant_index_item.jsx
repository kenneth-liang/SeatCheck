import React from 'react';
import {Link, NavLink} from 'react-router-dom'
class IndexItem extends React.Component{
    constructor(props){
        super(props)
    }


  getAverageRating() {
    const restaurant = this.props.restaurant;
    let sum = 0
    restaurant.score_arr.forEach((score) => sum += score)
    let avgRating;
    if (sum === 0) {
      avgRating = "No Reviews";
    } else {
      avgRating = (Math.round(sum / restaurant.score_arr.length * 10) / 10).toFixed(1)
    }
    return avgRating
  }

  getChairsScoreRestaurant() {
    const restaurant = this.props.restaurant;
    let sum = 0;
    restaurant.score_arr.forEach((score) => sum += score)
    let restaurantAvgRating;
    if (sum === 0) {
      restaurantAvgRating = 0
    } else {
      restaurantAvgRating = (Math.floor(sum / restaurant.score_arr.length * 10) / 10)
    }

    const restRatingArray = []

    for (let i = 0; i < restaurantAvgRating; i++) {
      restRatingArray.push(
        <i key={i} className="fas fa-chair fa-lg chair-filled"></i>
      )
    }

    return restRatingArray
  }

  render (){
    const restaurant = this.props.restaurant
    const pImg = {
        backgroundImage: `url(${restaurant.photo})`
    }
    
      return (
        <div className="rest-item">
          <Link to={`/restaurants/${restaurant.id}`}>
            <li className="restaurant-lists">
              <div className="restaurant-content">
                <div className="img" id="rest-img" style={pImg}></div>
                <div className="restaurant-info">
                  <div className="rest-name">{restaurant.name} </div>
                  <div className="rest-review">
                    <span>
                      Rating: {this.getAverageRating()}{" "}
                      {this.getChairsScoreRestaurant()}
                    </span>
                  </div>
                  <div className="rest-row">
                    {/* <span>{moneyCheck}</span> */}
                    <span>{restaurant.price}</span>
                    <span>
                      <i className="fas fa-utensils"></i> {restaurant.cuisine}
                    </span>
                    <span>
                      <i className="fas fa-map-marker-alt location-idx"></i>{" "}
                      {restaurant.city}
                    </span>
                  </div>
                  <div className="rest-contact-container">
                    <div className="rest-contact">
                      <i className="fas fa-phone-alt"></i> {restaurant.phone_number}
                    </div>
                  </div>
                  <br />
                  <div className="rest-links">
                    <div
                      to={`/restaurants/${restaurant.id}`}
                      className="rest-item-btn"
                    >
                      Reserve Now
                    </div>
                    <div
                      to={`/restaurants/${restaurant.id}`}
                      className="rest-item-btn"
                    >
                      View Details
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </Link>
        </div>
      );
    }
}

export default IndexItem