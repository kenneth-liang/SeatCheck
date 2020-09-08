import React from 'react';
import RestaurantIndexItem from './restaurant_index_item'
import SearchForm from '../search/search_container'
import Filter from "../filter/filter_container"
import { withRouter } from "react-router-dom";
import { wrapGrid } from "animate-css-grid";

const CITY = [
  "San Francisco",
  "Las Vegas",
  "Seattle",
  "Chicago",
  "New York",
  "Los Angeles",
];

const CUISINE = [
  "Steak",
  "Seafood",
  "French",
  "Asian",
  "Indian",
  "Italian",
  "American",
  "Mexican",
  "Californian",
];

class RestaurantIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchFilter: props.history.location.state
        ? [props.history.location.state.search]
        : [],
    };
    
    this.handleChange = this.handleChange.bind(this)
    this.filterBuilderCity = this.filterBuilderCity.bind(this)
    this.filterBuilderCuisine = this.filterBuilderCuisine.bind(this)
  }

  componentDidMount() {
    const grid = document.querySelector(".restaurant-items");
    wrapGrid(grid)
    this.sendSearch();
  }

  sendSearch() {
    this.props.searchRestaurants(this.state.searchFilter);
  }

  filterBuilderCity(){
    let cityFilter = CITY.map( c => (
      <div>
        <input type="checkbox" value={c} onChange={this.handleChange} checked={this.state.searchFilter.includes(c) ? 'checked': ''}/>
        <label className="label">{c}</label>
      </div>
    ));
    return cityFilter;
  }
  
  filterBuilderCuisine(){
    let cuisineFilter = CUISINE.map( c => (
      <div>
        <input type="checkbox" value={c} onChange={this.handleChange} checked={this.state.searchFilter.includes(c) ? 'checked': ''}/>
        <label className="label">{c}</label>
      </div>
    ));
    return cuisineFilter;
  }

  handleChange(e) {
    e.preventDefault();
    let item = e.target.value
    let newSearch = this.state.searchFilter
    if (newSearch.includes(item)) {
      let i = newSearch.indexOf(item)
      newSearch = newSearch.slice(0, i).concat(newSearch.slice(i + 1))
    } else {
      newSearch.push(item)
    }

    this.props.searchRestaurants(newSearch).then(() =>
      this.setState({
        searchFilter: newSearch,
      })
    );
    
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
          using less specific keywords.
        </p>
      </div>
    );

    let searchResults;

    items.length === 0 ? (searchResults = errors) : (searchResults = items);



    return (
      <div className="restaurant-container">
        <div className="search-control">
          <div className="page-header-content">
            <SearchForm restaurants={this.props.restaurants} />
          </div>
        </div>
        <div className="restaurant-page-content">
          {/* <div className="restaurant-filters">
            Filters coming soon
          </div> */}
          {/* <Filter /> */}

          <div className="filter-container">
            <section className="filter-section">
              <div className="filter-option">{this.filterBuilderCity()}</div>
              <div className="filter-option">{this.filterBuilderCuisine()}</div>
            </section>
          </div>

          <div className="restaurant-items">{searchResults}</div>
        </div>
      </div>
    );
  }
}




export default withRouter(RestaurantIndex);