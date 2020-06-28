import React from 'react';
import IndexItem from './restaurant_index_item'
import SearchForm from '../search/search_container'

class RestaurantIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRestaurants();
  }

  items(){
    return this.props.restaurants.map((restaurant) => (
      <IndexItem key={restaurant.id} restaurant={restaurant} />
    ));
  }

  render() {
    //include filters
    return (
      <div className="restaurant-container">
        <div className="search-control">
          <div className="page-header-content">
            <SearchForm />
          </div>
        </div>
        <div className="restaurant-page-content">
          <div className="restaurant-filters">
            Filters here
          </div>
          <div className="restaurant-items">{this.items()}</div>
        </div>
      </div>
    );
  }
}




export default RestaurantIndex;