export const fetchRestaurants = () => {
    return  $.ajax({
        method: "GET",
        url: "/api/restaurants",
    })
}
   

export const fetchRestaurant = (id) => {
    return $.ajax({
        method: "GET",
        url: `/api/restaurants/${id}`, 
    })
}


// searching for restaurants filter accepts multiple parameters 
// cuisine, city, bounds 
export const searchRestaurants = search => {
    // perform an async AJAX request to exchange data with our server 
    // and update our web page without loading the whole page
    return $.ajax({
      method: "GET", // http request
      url: "/api/restaurants", // location 
      data: {search} // params 
    });
}