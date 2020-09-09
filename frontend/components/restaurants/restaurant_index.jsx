import React from 'react';
import RestaurantIndexItem from './restaurant_index_item'
import SearchForm from '../search/search_container'
import Filter from "../filter/filter.jsx"
import { withRouter } from "react-router-dom";
import { wrapGrid } from "animate-css-grid";


class RestaurantIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = this.props.restaurants.map((restaurant) => (
      <RestaurantIndexItem key={restaurant.id} restaurant={restaurant} />
    ));

    const errors = (
      <div className="search-error">
        <h3>WE DID NOT FIND A MATCH FOR YOUR SEARCH</h3>
        <p>
          Sorry, we couldn't find any results. Try checking your spelling or
          using specific keywords.
        </p>
      </div>
    );

    let searchResults = items.length === 0 ? (errors) : (items);
    

    let restaurantNumber =
      items.length !== 0 ? (
        <div className="filters-summary"> {items.length} Restaurants available</div>
      ) : (
        ""
      );

    // let appliedFilters =
    //   this.props.history.location.state.search.length !== 0 ? (
    //     <div>{this.props.history.location.state.search.each(filter => (
    //       {filter}
    //     ))}</div>
    //   ) : (
    //     ""
    //   );
    
    return (
      <div className="restaurant-container">
        <div className="search-control">
          <div className="page-header-content">
            <SearchForm restaurants={this.props.restaurants} />
          </div>
        </div>

        <div className="restaurant-page-content">
          <Filter searchRestaurants={this.props.searchRestaurants} />
          <div className="restaurant-items">
            <div className="filters-summary-container">
              {restaurantNumber}
            </div>
            {searchResults}
          </div>
        </div>
      </div>
    );
  }
}




export default withRouter(RestaurantIndex);