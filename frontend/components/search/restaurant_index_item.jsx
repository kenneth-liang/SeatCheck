import React from 'react';
import {withRouter} from 'react-router-dom'
class IndexItem extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        const restaurantId = this.props.restaurant.id;
        this.props.history.push(`/api/restaurants/${restaurantId}`)
    }

    render (){
        const {restaurant} = this.props
        const pImg = {
            backgroundImage: `url(${restaurant.photoURL})`
        }
        return (
          <div className="restaurant" onClick={this.handleClick}>
            <div className="img" id="rest-img" style={pImg}></div>
            <div className="restaurant-info">
              <div id="rest-name">{restaurant.name}</div>
              <div className="review">
                <span>Ratings: chairs icon - </span>
                <span># of reviews</span>
              </div>
              <span>{restaurant.cuisine} - </span>
              <span>${restaurant.price} - </span>
              <span>{restaurant.city}</span>
            </div>
            <br />
          </div>
        );
    }
}

export default withRouter(IndexItem)