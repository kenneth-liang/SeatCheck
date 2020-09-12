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

    // this.state = { searchFilter: props.history.location.state ? props.history.location.state.search : [], };
    this.state = {
      price: [],
      cuisines: props.location.state ? [props.location.state.cuisine] : [],
      locations:
        props.location.state && props.location.state.city
          ? [props.location.state.city]
          : ["All"],
    };

    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.filterBuilderCity = this.filterBuilderCity.bind(this);
    this.handleChangeCuisine = this.handleChangeCuisine.bind(this);
    this.filterBuilderCuisine = this.filterBuilderCuisine.bind(this);
    this.handleClickPrice = this.handleClickPrice.bind(this);
    this.filterBuilderPrice = this.filterBuilderPrice.bind(this);
  }

  componentDidMount() {
    const grid = document.querySelector(".restaurant-items");
    wrapGrid(grid);
    this.sendSearch();
  }

  sendSearch() {
    // this.props.searchRestaurants({this.state.searchFilter});
    this.props.searchRestaurants({
      price: this.state.price,
      city: this.state.locations,
      cuisines: this.state.cuisines,
    });
  }

  filterBuilderCity() {
    let cityFilter = CITY.map((c, i) => (
      <div className="filter-item-div" key={i}>
        <input
          className="filter-checkbox"
          type="checkbox"
          value={c}
          onChange={this.handleChangeCity}
          checked={this.state.locations.includes(c) ? "checked" : ""}
        />
        <label className="filter-label">{c}</label>
      </div>
    ));
    return cityFilter;
  }

  filterBuilderCuisine() {
    let cuisineFilter = CUISINE.map((c, i) => (
      <div className="filter-item-div" key={i}>
        <input
          className="filter-checkbox"
          type="checkbox"
          value={c}
          onChange={this.handleChangeCuisine}
          checked={this.state.cuisines.includes(c) ? "checked" : ""}
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
          <li
            className="price-choice"
            value="$$"
            onClick={this.handleClickPrice}
          >
            $$ <span className="tooltiptext">{"$30 and Under"}</span>
          </li>
          <li
            className="price-choice"
            value="$$$"
            onClick={this.handleClickPrice}
          >
            $$$ <span className="tooltiptext">{"$31 and $50"}</span>
          </li>
          <li
            className="price-choice"
            value="$$$$"
            onClick={this.handleClickPrice}
          >
            $$$$ <span className="tooltiptext">{"$50 and over"}</span>
          </li>
        </ul>
      </div>
    );
  }

  handleClickPrice(e) {
    e.preventDefault();
    let price = e.target.getAttribute("value");
    // let newSearch = this.state.searchFilter;
    // if (newSearch.includes(price)) {
    //   e.target.classList.remove("price-selected");
    //   let i = newSearch.indexOf(price);
    //   newSearch = newSearch.slice(0, i).concat(newSearch.slice(i + 1))
    // } else {
    //     e.target.classList.add("price-selected");
    //     newSearch.push(price);
    // }
    // this.props.searchRestaurants(newSearch).then(() =>
    //   this.setState({
    //     searchFilter: newSearch,
    //   })
    // );
    if (this.state.price.indexOf(price) === -1) {
      e.target.classList.add("price-selected");
      this.setState(
        {
          price: [...this.state.price, price],
        },
        () => this.sendSearch()
      );
    } else {
      e.target.classList.remove("price-selected");
      this.setState({ price: this.state.price.filter((p) => p != price) }, () =>
        this.sendSearch()
      );
    }
  }

  handleChangeCuisine(e) {
    e.preventDefault();
    let cuisine = e.target.value;
    // let newSearch = this.state.searchFilter;
    // if (newSearch.includes(cuisine)) {
    //   let i = newSearch.indexOf(cuisine);
    //   newSearch = newSearch.slice(0, i).concat(newSearch.slice(i + 1));
    // } else {
    //   newSearch.push(cuisine);
    // }

    // this.props.searchRestaurants(newSearch).then(() =>
    //   this.setState({
    //     searchFilter: newSearch,
    //   })
    // );
    if (this.state.cuisines.indexOf(cuisine) === -1) {
      this.setState(
        {
          cuisines: [...this.state.cuisines, cuisine],
        },
        () => this.sendSearch()
      );
    } else {
      this.setState(
        { cuisines: this.state.cuisines.filter((p) => p != cuisine) },
        () => this.sendSearch()
      );
    }
  }

  handleChangeCity(e) {
    e.preventDefault;
    let city = e.target.value;
    // let newSearch = this.state.searchFilter;

    // for ( let i = 0; i < newSearch.length; i++) {
    //   if (CITY.includes(newSearch[i])) {
    //     newSearch = newSearch.slice(0, i).concat(newSearch.slice(i + 1));
    //   }
    // }
    // newSearch.push(city)

    // this.props.searchRestaurants(newSearch).then(() =>
    //   this.setState({
    //     searchFilter: newSearch,
    //   })
    // );
    if (this.state.locations.indexOf(city) === -1) {
      this.setState(
        {
          locations: [...this.state.locations, city],
        },
        () => this.sendSearch()
      );
    } else {
      this.setState(
        { locations: this.state.locations.filter((p) => p != city) },
        () => this.sendSearch()
      );
    }
  }

  render() {
    // window.scrollTo({
    //   top: 100,
    //   left: 100,
    //   behavior: "smooth",
    // });    
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