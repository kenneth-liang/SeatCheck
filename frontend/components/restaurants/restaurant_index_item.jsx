import React from 'react';
import {Link} from 'react-router-dom'
class IndexItem extends React.Component{
    constructor(props){
        super(props)
    }


    render (){
        const restaurant = this.props.restaurant
        const pImg = {
            backgroundImage: `url(${restaurant.photoURL})`
        }
      const phoneIcon = <img className="phone-icon" src="https://seat-check-seeds.s3-us-west-1.amazonaws.com/phone.png" />
        return (
          <Link to={`/restaurants/${restaurant.id}`}>
            <li className="restaurant-lists">
              <div className="restaurant-content">
                  <div className="img" id="rest-img" style={pImg}></div>
                  <div className="restaurant-info">
                    <div className="rest-name">{restaurant.name}</div>
                    <div className="rest-review">
                      <span>Ratings: tbd </span>
                      <span>({restaurant.countRating})</span>
                    </div>
                    <div className="rest-row">
                        <span>${restaurant.price}</span>
                        <span>{restaurant.cuisine}</span>
                        <span>{restaurant.city}</span>
                    </div>
                    <div className="rest-contact">{phoneIcon} {restaurant.phone_number}</div>
                </div>
              </div>
            </li>
          </Link>
        );
    }
}

export default IndexItem