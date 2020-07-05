import * as ApiUtil from '../util/reservation_api_util';

export const RECEIVE_RESERVATIONS = "RECEIVE_RESERVATIONS";
export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";
export const DESTROY_RESERVATION = "DESTROY_RESERVATION";

export const RECEIVE_RESERVATION_ERRORS = "RECEIVE_RESERVATION_ERRORS";

export const receiveAllReservations = reservations => {
    return {
      type: RECEIVE_RESERVATIONS,
      reservations
    };
}

export const receiveReservation = reservation => {
    return {
      type: RECEIVE_RESERVATION,
      reservation
    };
}

export const removeReservation = reservationId => {
    return {
      type: DESTROY_RESERVATION,
      reservationId,
    };
}

export const receiveReservationErrors = errors => {
    return {
      type: RECEIVE_RESERVATION_ERRORS,
      errors
    };
}


export const createReservation = reservation => dispatch=> {
    return ApiUtil.createReservation(reservation).then(
        (newReservation) => dispatch(receiveReservation(newReservation)),
        (errors) => dispatch(receiveReservationErrors(errors.responseJSON))
    )
}

export const fetchReservation = id => dispatch => {
    return ApiUtil.fetchReservation(id).then(
        (reservation) => {
            dispatch(receiveReservation(reservation));
        }
    )
}

export const fetchUserReservations = userId => dispatch => {
    return ApiUtil.fetchUserReservations(userId).then(
      (reservations) => dispatch(receiveAllReservations(reservations)),
      (errors) => dispatch(receiveReservationErrors(errors.responseJSON))
    );
}

export const deleteReservation = id => dispatch => {
    return ApiUtil.deleteReservation(id).then(
      (reservation) => dispatch(removeReservation(reservation.id)),
      (errors) => dispatch(receiveReservationErrors(errors.responseJSON))
    );
}