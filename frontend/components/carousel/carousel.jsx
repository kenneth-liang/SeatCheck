import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Slider from "react-slick";

const CUISINES = [
  "Steak", 
  "Seafood", 
  "French", 
  "Asian", 
  "Indian", 
  "Italian", 
  "American", 
  "Mexican", 
  "Korean", 
  "Californian",  
];

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    let cuisineValue = e.currentTarget.id
    this.props.history.push({
      pathname: "/restaurants",
      state: { cuisine: cuisineValue },
    });
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4.2,
      slidesToScroll: 1.4,
      arrows: true,
      className: "slides",
      autoplay: true,
      autoplaySpeed: 3000,
    };
    return (
      <div className="slider-container">
        <div className="slider-header">
          <h3>Top Cuisines </h3>
        </div>
        <Slider {...settings}>
          {CUISINES.map((cuisine, i) => {
            return (
              <div key={i} className="slide-item slide-item-back" id={cuisine}
                onClick={this.handleClick}>
                <div className="slide-item-cuisine">
                    <p>Best {cuisine}</p>
                    <p>Restaurants Around You</p>
                  </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default withRouter(Carousel);