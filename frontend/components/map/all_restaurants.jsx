import React from "react";
import RestaurantIndexItems from "../restaurants/restaurant_index_item";

class AllRestaurant extends React.Component {

  render() {
    const restaurants = this.props.restaurants;
    const display = restaurants.length === 0 ? 
      <div className="notfound emojis-search-map">
        <h3>No Restaurants found...</h3>
      </div> : restaurants.map(restaurant => (
        <RestaurantIndexItems key={restaurant.id} restaurant={restaurant} />
      ));
    return (
      <div className="search-map-list">
        {display}
      </div>
    )
  }
}

export default AllRestaurant;