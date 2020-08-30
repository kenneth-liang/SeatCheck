import {combineReducers} from 'redux';

import usersReducer from "./user_reducer";
import restaurantsReducer from './restaurants_reducer'
import reservationsReducer from './reservations_reducer';
import ratingsReducer from './ratings_reducer'
import favoritesReducer from './favorite_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    restaurants: restaurantsReducer,
    reservations: reservationsReducer,
    ratings: ratingsReducer,
    favorites: favoritesReducer
})

export default entitiesReducer;