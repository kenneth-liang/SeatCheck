import React from 'react';

class IndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    render (){
        const {restaurant} = this.props
        return(
            <div>
                <ul>
                    <li>Name: {restaurant.name}</li>
                    <li>City: {restaurant.city}</li>
                    <li>Price: {restaurant.price}</li>
                    <li>Cuisine: {restaurant.cuisine}</li>
                </ul>
                <br/>
            </div>
        )
    }
}

export default IndexItem