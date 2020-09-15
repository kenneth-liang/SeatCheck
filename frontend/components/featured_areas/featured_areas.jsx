import React from 'react';
import { Redirect, withRouter } from "react-router-dom";
import RestaurantIndexContainer from "../restaurants/restaurant_index_container";


class FeaturedAreas extends React.Component{
    constructor(props) {
        super(props);
        // this.state = {
        //     search: ""
        // }
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick(e){
        e.preventDefault();

        let cityValue = e.target.id.split("_").map(i => i[0].toUpperCase() + i.slice(1)).join(' ');
        this.props.history.push({
          pathname: "/restaurants",
          state: { city: cityValue },
        });
    }

    render( ) {
        return (
            <div className="areas">
                <h1>Featured Areas</h1>
                <div className="area-list">
                    <div className="fcity" id="san_francisco" onClick={this.handleClick}>
                        San Francisco
                    </div>
                    <div className="fcity" id="los_angeles" onClick={this.handleClick}>
                        Los Angeles
                    </div>
                    <div className="fcity" id="new_york" onClick={this.handleClick}>
                        New York
                    </div>
                    <div className="fcity" id="las_vegas" onClick={this.handleClick}>
                        Las Vegas
                    </div>
                    <div className="fcity" id="chicago" onClick={this.handleClick}>
                        Chicago
                    </div>
                    <div className="fcity" id="seattle" onClick={this.handleClick}>
                        Seattle
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(FeaturedAreas);