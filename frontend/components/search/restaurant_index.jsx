import React from 'react';
import IndexItem from './restaurant_index_item'


class RestaurantIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //won't be needed later when we have updateFilters 
        this.props.fetchRestaurants();
    }

    render() {
        //include filters 
        const { restaurants } = this.props;
        return (
          <div className="restaurant-container">
            <h1 className="available">Available for dinner now</h1>
            <div className="restaurant-items">
              {restaurants.map((restaurant) => (
                <IndexItem key={restaurant.id} restaurant={restaurant}/>
              ))}
            </div>
          </div>
        );
    }
}




export default RestaurantIndex;