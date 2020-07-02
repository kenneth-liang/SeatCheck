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
      const phoneIcon = <img className="phone-icon" src="https://img.icons8.com/android/24/000000/phone.png" />
        // debugger
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