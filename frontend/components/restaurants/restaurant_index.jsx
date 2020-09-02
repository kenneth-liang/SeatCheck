import React from 'react';
import RestaurantIndexItem from './restaurant_index_item'
import SearchForm from '../search/search_container'
import { withRouter } from "react-router-dom";

class RestaurantIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = 
      this.props.restaurants.map((restaurant) => (
      <RestaurantIndexItem key={restaurant.id} restaurant={restaurant} />
    ));

    const errors = (
      <div className="search-error">
        <h3>WE DID NOT FIND A MATCH FOR YOUR SEARCH</h3>
        <p>
          Sorry, we couldn't find any results. Try checking your spelling or
          using less specific keywords.
        </p>
      </div>
    );
    
    let searchResults;

    items.length === 0 ? searchResults = errors : searchResults = items 

    return (
      <div className="restaurant-container">
        <div className="search-control">
          <div className="page-header-content">
            <SearchForm restaurants={this.props.restaurants}/>
          </div>
        </div>
        <div className="restaurant-page-content">
          {/* <div className="restaurant-filters">
            Filters coming soon
          </div> */}
          <div className="restaurant-items">
            {searchResults}
            </div>
        </div>
      </div>
    );
  }
}




export default withRouter(RestaurantIndex);