import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";
import searchErrorsReducer from './search_errors_reducer'
import reservationErrorsReducer from "./reservation_errors_reducer";
import ratingErrorsReducer from "./rating_error_reducer"
import favoriteErrorsReducer from "./favorite_errors_reducer"

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  search: searchErrorsReducer,
  reservation: reservationErrorsReducer,
  rating: ratingErrorsReducer,
  favorite: favoriteErrorsReducer
});

export default errorsReducer;
