import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Slider from "react-slick";

const cuisines = [
  {
    name: "Steak",
    url: "https://seat-check-seeds.s3-us-west-1.amazonaws.com/prime-provis.jpg",
  },
  {
    name: "Seafood",
    url: "https://seat-check-seeds.s3-us-west-1.amazonaws.com/ivar.jpg",
  },
  {
    name: "French",
    url: "https://seat-check-seeds.s3-us-west-1.amazonaws.com/nomi.jpg",
  },
  {
    name: "Asian",
    url: "https://seat-check-seeds.s3-us-west-1.amazonaws.com/wgk.jpg",
  },
  {
    name: "Indian",
    url: "https://seat-check-seeds.s3-us-west-1.amazonaws.com/amberindia.jpg",
  },
  {
    name: "Italian",
    url: "https://seat-check-seeds.s3-us-west-1.amazonaws.com/arte-cafe.jpg",
  },
  {
    name: "American",
    url:
      "https://seat-check-seeds.s3-us-west-1.amazonaws.com/lexingtonbrass.jpg",
  },
  {
    name: "Mexican",
    url: "https://seat-check-seeds.s3-us-west-1.amazonaws.com/nachodaddy.jpg",
  },
  {
    name: "Korean",
    url: "https://seat-check-seeds.s3-us-west-1.amazonaws.com/ombu.jpg",
  },
  {
    name: "Californian",
    url: "https://seat-check-seeds.s3-us-west-1.amazonaws.com/wayfaret.jpg",
  },
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

    let cuisine = e.target.id
    this.setState(
      {
        search: [cuisine],
      },
      () =>
        this.props.searchRestaurants(this.state.search).then(() =>
          this.props.history.push({
            pathname: "/restaurants",
            state: { search: this.state.search },
          })
        )
    );

  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4.2,
      slidesToScroll: 1.3,
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
          {cuisines.map((cuisine, i) => {
            return (
              <div key={i} className="slide-item">
                <img
                  width="100%"
                  height="100%"
                  src={cuisine.url}
                  id={cuisine.name}
                  onClick={this.handleClick}
                />
                <div className="slider-item-cuisine">
                  <p>Best {cuisine.name}</p>
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