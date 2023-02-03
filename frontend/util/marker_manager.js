class MarkerManager {
  // MarkerManager accepts a map
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(restaurants) {
    const restaurantMarkers = {}

    // any restaurant that leave our application will have their markers removed from the map 
    Object.values(this.markers).forEach(res => this.removeMarker(res));


    // for each restaurant, if the id is not a key in this.markers, 
    //create a new marker from it and add it to the map and this.markers 
    Object.values(restaurants).forEach(restaurant => {
      restaurantMarkers[restaurant.id] = this.createMarkerFromRestaurant(restaurant)
    })
    const markerIds = Object.keys(this.markers)

    this.markers = Object.assign({}, this.markers, restaurantMarkers)

    markerIds.forEach(id => {
      if (!restaurants[id]) {
        this.removeMarker(this.markers[id])
      }
    })
  }

  removeMarker(marker) {
    // remove marker from map and from markers object
    marker.setMap(null);
    delete this.markers[marker.id]
  }

  createMarkerFromRestaurant(restaurant) {
    // accepts a restaurant object as an argument
    // adds a marker to the map and to markers object 
    const latLng = { lat: restaurant.lat, lng: restaurant.lng };
    var infowindow = new google.maps.InfoWindow({
      content: (`<div id=marker-title>${restaurant.name}</div>`)
    });

    const marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      title: restaurant.name,
      id: restaurant.id,
      animation: google.maps.Animation.DROP
    });

    marker.addListener('click', function () {
      infowindow.open(this.map, marker);
      $('#marker-title').parent().parent().parent().siblings().addClass("info-window")
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    });

    return marker
  }
}

export default MarkerManager;