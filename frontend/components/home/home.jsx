import React from 'react';

import RestaurantIndex from '../search/restaurant_index'

class HomePage extends React.Component{
    constructor(props){
        super(props)
    }

    render (){
        const { restaurants, fetchRestaurants } = this.props;
        return (
          <div className="home-page">
            <header className="cover">
              <div className="cover-wrapper">
                  <div className="cover-content">
                    <h2 className="cover-phrase">Find your seat for any occasion</h2>
                    <span className="search-bar">
                    <div className="search-boxes">
                        <div className="search-filters">
                        <div className="search-dt">
                            <div className="search-date">Date</div>
                            <div className="search-time">Time</div>
                        </div>
                        <div className="search-party">Party</div>
                        </div>
                        <div className="search-type">
                        <div className="search-field">Location,Restaurant, or Cuisine</div>
                        <div className="search-button-box">
                            <button className="search-button">Let's Go</button>
                        </div>
                        </div>
                    </div>
                    </span>
                  </div>
              </div>
            </header>
            <RestaurantIndex
              restaurants={restaurants}
              fetchRestaurants={fetchRestaurants}
            />
          </div>
        );
    }
}

export default HomePage