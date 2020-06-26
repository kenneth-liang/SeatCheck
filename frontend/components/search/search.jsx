import React from 'react';

import RestaurantIndex from "./restaurant_index"


const Search = ({ restaurants, fetchRestaurants, updateFilter  }) => (
  <div>
    <RestaurantIndex restaurants={restaurants} fetchRestaurants={fetchRestaurants}/>
  </div>
);
export default Search