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

class Filter extends React.Component{
  constructor(props){
    super(props);

    let city = {} 
    let cuisine = {}

    CITY.forEach( i => (
      city[i] = false 
    ))

    CUISINE.forEach ( i => (
      cuisine[i] = false
    ))


    this.state = {
      filters: props.location.search ? [props.location.search] : []
    }
  }

  componentDidMount(){
    // const grid = document.querySelector(".fitler-list");
    // wrapGrid(grid)
    // this.props.fetchRestaurants()
    //   .then(
    //     () => this.setState({restaurants: this.props.restaurants})
    //   )
  }

  handleChange(item){
    return e => {
      if (e.target.classList.contains('city')){
        if (!this.state.city[item]) {
          let temp = {...this.state.city}
          temp[item] = true;
          this.setState({
            city: temp
          })
        } else {
          let temp = {...this.state.city }
          temp[item] = false;
          this.setState({
            city: temp
          })
        }
      } else {
        if (!this.state.cuisine[item]){
          let temp = {...this.state.cuisine}
          temp[item] = true;
          this.setState({
            cuisine: temp
          })
        } else {
          let temp = { ...this.state.cuisine }
          temp[item] = false;
          this.setState({
            cuisine: temp
          })
        }
      }
    }
  }



  render(){
    let cityCheckBox, 
      cuisineCheckBox,
      filtered = [] ,
      filteredCity = [] ,
      fitleredCuisine = [] ,
      cityValues = [],
      muscleValues = []


    cityCheckBox =  CITY.map((e,i) => (
      <label key={i} className="filter-item">
        <input type="checkbox" value={e} className="city" onChange={this.handleChange(e)}/>{e}
      </label>
    ))

    cuisineCheckBox = CUISINE.map((m,i) => (
      <label key={i} className="filter-item">
        <input type="checkbox" value={m} className="cuisine" onChange={this.handleChange(m)} />{m}
      </label>
    ))
    
    return(
      <div className="filter-container">
        <section className="filter-section">
          <div className="filter-option">
            {cityCheckBox}
          </div>
          <div className="filter-option">
            {cuisineCheckBox}
          </div>
        </section>
      </div>
    )
  }
}


export default withRouter(Filter)