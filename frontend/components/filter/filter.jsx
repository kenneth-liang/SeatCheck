import React from 'react';
import {withRouter} from 'react-router-dom';
import {wrapGrid} from 'animate-css-grid';

const CITY = [
  "San Francisco",
  "Las Vegas",
  "Seattle",
  "Chicago",
  "New York",
  "Los Angeles"
]

const CUISINE = [
  "Steak",
  "Seafood",
  "French",
  "Asian", 
  "Indian",
  "Italian",
  "American",
  "Mexican",
  "Californian"
]

const PRICE = [
  "$$",
  "$$$",
  "$$$$",
]

class Filter extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      searchFilter: props.history.location.state ? props.history.location.state.search : []
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.filterBuilderCity = this.filterBuilderCity.bind(this);
    this.filterBuilderCuisine = this.filterBuilderCuisine.bind(this);
    this.filterBuilderPrice = this.filterBuilderPrice.bind(this);
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    const grid = document.querySelector(".restaurant-items");
    wrapGrid(grid);
    this.sendSearch();
  }

  sendSearch() {
    this.props.searchRestaurants(this.state.searchFilter);
  }

  filterBuilderCity() {
    let cityFilter = CITY.map((c,i) => (
      <div className="filter-item-div" key={i}>
        <input
          className="filter-checkbox"
          type="checkbox"
          value={c}
          onChange={this.handleChange}
          checked={this.state.searchFilter.includes(c) ? "checked" : ""}
        />
        <label className="filter-label">{c}</label>
      </div>
    ));
    return cityFilter;
  }

  filterBuilderCuisine() {
    let cuisineFilter = CUISINE.map((c,i) => (
      <div className="filter-item-div" key={i}>
        <input
          className="filter-checkbox"
          type="checkbox"
          value={c}
          onChange={this.handleChange}
          checked={this.state.searchFilter.includes(c) ? "checked" : ""}
        />
        <label className="filter-label">{c}</label>
      </div>
    ));
    return cuisineFilter;
  }

  

  filterBuilderPrice(){
    // let priceFilter = PRICE.map((c, i) => (
    //   <div key={i}>
    //     <input
    //       type="checkbox"
    //       value={c}
    //       onChange={this.handleChange}
    //       checked={this.state.searchFilter.includes(c) ? "checked" : ""}
    //     />
    //     <label className="label">{c}</label>
    //   </div>
    // ));
    // return priceFilter;
    return (
      <div>
        {/* <div className="filters-title">
          <span>Price</span>
        </div> */}
        <ul className="price-filter-items">
          <li title="$30 and under" value="$$" onClick={this.handleClick}>
            $$
          </li>
          <li title="$31 and $50" value="$$$" onClick={this.handleClick}>
            $$$
          </li>
          <li title="$50 and over" value="$$$$" onClick={this.handleClick}>
            $$$$
          </li>
        </ul>
      </div>
    );
  }

  //price
  handleClick(e){
    e.preventDefault();
    let price = e.target.getAttribute("value");
    let newSearch = this.state.searchFilter;
    if (newSearch.includes(price)) {
      e.target.classList.remove("price-selected");
      let i = newSearch.indexOf(price);
      newSearch = newSearch.slice(0, i).concat(newSearch.slice(i + 1));
    } else {
      e.target.classList.add("price-selected");
      newSearch.push(price);
    }

    this.props.searchRestaurants(newSearch).then(() =>
      this.setState({
        searchFilter: newSearch,
      })
    );
  }

  //city ,cuisine
  handleChange(e) {
    e.preventDefault();
    let item = e.target.value;
    let newSearch = this.state.searchFilter;
    if (newSearch.includes(item)) {
      let i = newSearch.indexOf(item);
      newSearch = newSearch.slice(0, i).concat(newSearch.slice(i + 1));
    } else {
      newSearch.push(item);
    }

    this.props.searchRestaurants(newSearch).then(() =>
      this.setState({
        searchFilter: newSearch,
      })
    );
  }

  render() {
    return (
      <div className="filter-container">
        <section className="filter-section">
          <div className="filter-option">
            <h5>
              <i className="far fa-money-bill-alt"></i> Price
            </h5>
            {this.filterBuilderPrice()}
          </div>
          <div className="filter-option">
            <h5>
              <i className="fas fa-map-marker-alt"></i> City
            </h5>
            {this.filterBuilderCity()}
          </div>
          <div className="filter-option">
            <h5>
              <i className="fas fa-utensils"></i> Cuisine
            </h5>
            {this.filterBuilderCuisine()}
          </div>
        </section>
      </div>
    );
  }
}


export default withRouter(Filter)