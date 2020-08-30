export const createFavorite = id => {
  return $.ajax({
    method: 'POST',
    url: '/api/favorites',
    data: {id}
  })
}

export const fetchUserFavorites = userId => {
  return $.ajax({
    method: 'GET',
    url: '/api/favorites',
    data: {userId}
  })
}

export const fetchSingleFavorite = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/favorites/${id}`
  })
}

export const deleteFavorite = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/favorites/${id}`,
    data: {id}
  })
}