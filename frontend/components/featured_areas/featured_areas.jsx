import React from 'react';
import {withRouter} from 'react-router-dom';


class FeaturedAreas extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick(e){
        //upon click use the id as the search key word 
        e.preventDefault();
        
        let city = e.target.id.split("_").join(' ');
        this.setState({
            search: city
        }, () => (
            // search rest by search city 
            this.props.searchRestaurants(this.state.search)
        ).then( ()=> 
            this.setState({
                //reset search 
                search: ""
            })
        ).then(() => 
            //navigate to restaurants 
            this.props.history.push("/restaurants"))
        )
    }

    render( ) {
        return (
            <div className="areas">
                <h1>Featured Areas</h1>
                <div className="area-list">
                    <div className="city" id="san_francisco" onClick={this.handleClick}>
                        San Francisco
                    </div>
                    <div className="city" id="los_angeles" onClick={this.handleClick}>
                        Los Angeles
                    </div>
                    <div className="city" id="new_york" onClick={this.handleClick}>
                        New York
                    </div>
                    <div className="city" id="las_vegas" onClick={this.handleClick}>
                        Las Vegas
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(FeaturedAreas);