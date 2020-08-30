export const UPDATE_FILTER = "UPDATE_FILTER"

const updateFilter = (restaurants) => {
  return {
    type: UPDATE_FILTER,
    restaurants
  }
}

export default updateFilter; 
