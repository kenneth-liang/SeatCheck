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

export const searchRestaurants = search => {
    return $.ajax({
      method: "GET",
      url: "/api/restaurants",
      data: {search}
    });
}