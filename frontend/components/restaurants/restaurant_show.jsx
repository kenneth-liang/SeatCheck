import React from 'react';

class RestaurantShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchRestaurant(this.props.match.params.id)
    }

    render (){
        const {restaurant} = this.props
        return (
            <div>
                <h1>{restaurant.name}</h1>
                <li>Price: {restaurant.price}</li>
                <li>Cuisine:{restaurant.cuisine}</li>
                <li>Rating: TBD</li>
                <li>Reviews: TBD</li>
                <li>Description: {restaurant.description}</li>
                <li>Phone Number: {restaurant.phone_numer}</li>
                <li>Open: {restaurant.open_time}</li>
                <li>Phone Number: {restaurant.phone_numer}</li>
                
            </div>
        )
    }
}

export default RestaurantShow;