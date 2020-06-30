import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

import { signup, login, logout } from './util/session_api_util';
import {fetchRestaurants, fetchRestaurant} from './actions/restaurant_actions'
import { fetchUserReservations} from './actions/reservation_actions'
window.signup = signup;
window.login = login;
window.logout = logout;


document.addEventListener("DOMContentLoaded", () => {
    // const store = configureStore()
    const root = document.getElementById("root");

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
            users: { [window.currentUser.id]: window.currentUser },
            },
            session: { id: window.currentUser.id },
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    //test
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.fetchRestaurants = fetchRestaurants
    window.fetchRestaurant = fetchRestaurant
    window.fetchUserReservations = fetchUserReservations;

    ReactDOM.render(<Root store={store} />, root);
});

