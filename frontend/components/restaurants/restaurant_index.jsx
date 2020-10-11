import React from 'react';
import RestaurantIndexItem from './restaurant_index_item'
import SearchForm from '../search/search_container'
import Filter from "../filter/filter.jsx"
import { withRouter } from "react-router-dom";
import { wrapGrid } from "animate-css-grid";


class RestaurantIndex extends React.Component {
  constructor(props) {
    // window.scrollTo(0, 0);
    super(props);
    this.handleMapViewClick = this.handleMapViewClick.bind(this);
  }

  scrollTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  handleMapViewClick(e) {
    e.preventDefault();
    this.props.history.push("/maps");
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

    let searchResults = items.length === 0 ? (items) : (items);
    

    let restaurantNumber =
      items.length === 0 ? (
        <div>
         {errors}
       </div>
      ) : (
       <div className="filters-summary">
          {items.length} Restaurants Available
          <div>
            <button
              className="top-btn"
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
            >
              Top <i className="fas fa-arrow-up"></i>
            </button>
          </div>
        </div>
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
      <div className="restaurant-container" id="top">
        <div className="search-control">
          <div className="page-header-content">
            <section className="map-view-container">
              <div className="map-view-btn" onClick={this.handleMapViewClick}>
                <button className="map-btn"><i className="far fa-map"></i> Map View</button>
              </div>
            </section>          
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