import React from 'react';

class IndexItem extends React.Component{
    constructor(props){
        super(props)
    }



    render (){
        const {restaurant} = this.props
        const bImg = {
            backgroundImage: `url(${restaurant.photoURL})`
        }
        return (
          <div className="restaurant">
            <div className="img" id="rest-img" style={bImg}></div>
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

export default IndexItem