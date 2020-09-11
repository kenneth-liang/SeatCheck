import React from 'react';
import {withRouter} from 'react-router-dom';
import {wrapGrid} from 'animate-css-grid';

const CITY = [
  "All",
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
  "Californian",
  "Korean"
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
      searchFilter: props.history.location.state
        ? props.history.location.state.search
        : [],
    };

    this.handleChangeCuisine = this.handleChangeCuisine.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.filterBuilderCity = this.filterBuilderCity.bind(this);
    this.filterBuilderCuisine = this.filterBuilderCuisine.bind(this);
    this.filterBuilderPrice = this.filterBuilderPrice.bind(this);
    this.handleClickPrice = this.handleClickPrice.bind(this);
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
    return (
      <select onChange={this.handleChangeCity}>
        {CITY.map((c, i) => (
            <option
              key={i}
              value={c === "All" ? "" : c}
              selected={this.state.searchFilter.includes(c) ? "selected" : ""}
            >
              {c}
            </option>
          ))
        }
      </select>
    )
  }

  filterBuilderCuisine() {
    let cuisineFilter = CUISINE.map((c, i) => (
      <div className="filter-item-div" key={i}>
        <input
          className="filter-checkbox"
          type="checkbox"
          value={c}
          onChange={this.handleChangeCuisine}
          checked={this.state.searchFilter.includes(c) ? "checked" : ""}
        />
        <label className="filter-label">{c}</label>
      </div>
    ));
    return cuisineFilter;
  }

  filterBuilderPrice() {
    return (
      <div>
        <ul className="price-filter-items">
          <li title="$30 and under" className="price-choice" value="$$" onClick={this.handleClickPrice}>
            $$
          </li>
          <li title="$31 and $50" className="price-choice" value="$$$" onClick={this.handleClickPrice}>
            $$$
          </li>
          <li title="$50 and over" className="price-choice" value="$$$$" onClick={this.handleClickPrice}>
            $$$$
          </li>
        </ul>
      </div>
    );
  }

  handleClickPrice(e) {
    e.preventDefault();
    let price = e.target.getAttribute("value");
    let newSearch = this.state.searchFilter;
    if (newSearch.includes(price)) {
      e.target.classList.remove("price-selected");
      let i = newSearch.indexOf(price);
      newSearch = newSearch.slice(0, i).concat(newSearch.slice(i + 1))
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

  handleChangeCuisine(e) {
    e.preventDefault();
    let cuisine = e.target.value;
    let newSearch = this.state.searchFilter;
    if (newSearch.includes(cuisine)) {
      let i = newSearch.indexOf(cuisine);
      newSearch = newSearch.slice(0, i).concat(newSearch.slice(i + 1));
    } else {
      newSearch.push(cuisine);
    }

    this.props.searchRestaurants(newSearch).then(() =>
      this.setState({
        searchFilter: newSearch,
      })
    );
  }

  handleChangeCity(e){
    e.preventDefault
    let newCity = e.target.value;
    let newSearch = this.state.searchFilter;
      
    for ( let i = 0; i < newSearch.length; i++) {
      if (CITY.includes(newSearch[i])) {
        newSearch = newSearch.slice(0, i).concat(newSearch.slice(i + 1));
      } 
    }
    newSearch.push(newCity)

    this.props.searchRestaurants(newSearch).then(() =>
      this.setState({
        searchFilter: newSearch,
      })
    );
  }

  render() {
    console.log(this.state.searchFilter)
    return (
      <div className="filter-container">
        <section className="filter-section">
          <div className="filter-option">
            <h5>
              <i className="fas fa-map-marker-alt"></i> City
            </h5>
            {this.filterBuilderCity()}
          </div>
          <div className="filter-option">
            <h5>
              <i className="far fa-money-bill-alt"></i> Price
            </h5>
            {this.filterBuilderPrice()}
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