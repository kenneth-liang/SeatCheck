import React from 'react';
import SearchForm from '../search/search_container'
import FeaturedAreas from '../featured_areas/featured_areas_container'
import Carousel from '../carousel/carousel_container'

class HomePage extends React.Component{
    constructor(props){
        super(props)
    }

    render (){
        // const { searchRestaurants } = this.props;
        return (
          <div className="home-page">
            <header className="cover">
              <div className="cover-wrapper">
                <div className="cover-content">
                  <h3 className="search-title">
                    Find your seat for any occasion
                  </h3>
                  <SearchForm />
                </div>
              </div>
            </header>
            <div className="carousel">
              <Carousel/>
            </div>
            <div className="features">
              <FeaturedAreas/>
            </div>
          </div>
        );
    }
}

export default HomePage