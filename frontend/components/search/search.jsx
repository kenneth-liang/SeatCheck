import React from 'react';
import {withRouter} from 'react-router-dom'

import RestaurantIndex from "../restaurants/restaurant_index"
import Filters from "./filters"
import FilterForm from './filter_form'

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      search: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    this.props.searchRestaurants(this.state.search)
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchRestaurants(this.state.search)
    //reset search 
    this.props.history.push("/restaurants");
  }

  render (){
    return (
      <div>
        <form className="search-form-container">
          <div className="search-field">
            <input type="text"
              className="search-input"
              value={this.state.searchTerms}
              onChange={this.update('search')}
              placeholder="City, Restaurant, or Cuisine"
            />
            <input type="submit" 
              className="search-submit-button"
              onClick={this.handleSubmit}
              value="Let's Go"
            />
          </div>
        </form>
      </div>
    );
  }
}


export default withRouter(Search);


 