import {combineReducers} from 'redux';

import usersReducer from "./user_reducer";
import restaurantsReducer from './restaurants_reducer'
import reservationsReducer from './reservation_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    restaurants: restaurantsReducer,
    reservations: reservationsReducer,
})

export default entitiesReducer;