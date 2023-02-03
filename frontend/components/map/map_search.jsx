import React from 'react';
import AllRestaurant from './all_restaurants'
import MarkerManager from "../../util/marker_manager";

const CITY = [
  "San Francisco",
  "Las Vegas",
  "Seattle",
  "Chicago",
  "New York",
  "Los Angeles"
]

const COORD = [
  { city: "San Francisco", center: { lat: 37.779379, lng: -122.418433} },
  { city: "Las Vegas", center: { lat: 36.114992, lng: -115.172505} },
  { city: "Seattle", center: { lat: 47.603363, lng: -122.330417} },
  { city: "Chicago", center: { lat: 41.883718, lng: -87.632382} },
  { city: "New York", center: { lat: 40.713012, lng: -74.007130} },
  { city: "Los Angeles", center: { lat: 34.053345, lng: -118.242349} },
]

class MapSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      city: "San Francisco",
      center: { lat: 37.779379, lng: -122.418433 }
    }

    this.searchCity = this.searchCity.bind(this)
    this.searchOptionCity = this.searchOptionCity.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.searchCity();

    const mapOptions = {
      center: this.state.center, // this is SF
      zoom: 12
    };

    // we want to update markers when we first mount 
    // AND whenever the restaurants in the application change
    this.map = new google.maps.Map(this.SearchMapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.restaurants);

    this.map.addListener('idle', () => {
      // called on the map instance to get a LatLngBounds instance
      const bounds = this.map.getBounds(); 
      // get the coordinate pairs 
      const southWest = bounds.getSouthWest();
      const northEast = bounds.getNorthEast();

      
      this.sendBounds(southWest, northEast);
    });
  }

  searchCity(){
    this.props.searchRestaurants({
      city: this.state.city
    });
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push("/restaurants");
  }

  //drop down city list 
  handleChange(e){
    e.preventDefault();
    
    let newCity = e.target.value.split("_").join(" ")
    let newCenter 
    for (let i = 0; i < COORD.length; i++){
      let cityCoord = COORD[i]

      if (cityCoord.city === newCity) {
        newCenter = cityCoord.center
      }
    }
    
    // move center to the selected city in state
    this.setState(
      { city: newCity, center: newCenter }, () => this.searchCity()
    )

    //re-render map
    const newMapOptions = {
      center: newCenter,
      zoom: 12,
    };

    // place the markers 
    this.map = new google.maps.Map(this.SearchMapNode, newMapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.restaurants);
  }

  searchOptionCity(){
    let cityOption = CITY.map((city, i) => (
      <option key={i} value={city}>{city}</option>
    ))
    return cityOption
  }


  sendBounds(sw, ne) {
    // packaging coordinates into a bounds object 
    const bounds = {
      "northEast": { "lat": ne.lat(), "lng": ne.lng() },
      "southWest": { "lat": sw.lat(), "lng": sw.lng() }
    }

    //invoke, passing our new constructed bounds object 
    this.props.searchRestaurants({ bounds })
  }


  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.restaurants);
  }

  render() {
    const { restaurants, fetchRestaurants, searchRestaurants } = this.props;
    
    return (
      <div id="search-map-page">
        <div className="search-map-container">
          <div className="search-map">
            <div id="search-map-container" ref={map => this.SearchMapNode = map}>
              <h1>the map</h1>
            </div>
          
          </div>
          <div className="search-rest-container">
            <div id="list-header">
              <p> {restaurants.length} restaurants </p>
              <div>
              <select onChange={this.handleChange}>
                <option value="San_Francisco">San Francisco</option>
                <option value="Las_Vegas">Las Vegas</option>
                <option value="Los_Angeles">Los Angeles</option>
                <option value="New_York">New York</option>
                <option value="Chicago">Chicago</option>
                <option value="Seattle">Seattle</option>
              </select>

              </div>
              <div className="list-icon" onClick={this.handleClick.bind(this)}>
                <button className="list-icon-btn"><i className="fas fa-list"></i> List View</button>
              </div>
            </div>
            <AllRestaurant restaurants={restaurants} searchRestaurants={searchRestaurants} />
          </div>
        </div>
      </div>
    )
  }

}

export default MapSearch; 