import * as ApiUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";  


export const receiveUser = payload => {
    return {
      type: RECEIVE_USER,
      payload,
    };
} 

export const fetchUser = id => dispatch => {
    return ApiUtil.fetchUser(id)
        .then(payload => dispatch(receiveUser(payload)))
}

