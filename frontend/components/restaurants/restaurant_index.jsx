import React from 'react';
import IndexItem from './restaurant_index_item'


class RestaurantIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchRestaurants();
    }

    render() {
        // debugger;
        return (
        <div>
            {this.props.restaurants.map((restaurant) => (
            <IndexItem key={restaurant.id} restaurant={restaurant} />
            ))}
        </div>
        );
    }
}




export default RestaurantIndex;