export const createFavorite = id => {
  
  return $.ajax({
    method: 'POST',
    url: '/api/favorites',
    data: { id }
  })
}


export const fetchFavorites = userId => (
  $.ajax({
    method: 'GET',
    url: '/api/favorites',
    data: { userId }
  })
);

export const fetchFavorite = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/favorites/${id}`
  })
);

export const deleteFavorite = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/favorites/${id}`,
    // data: { id }
  })
}
 