export const createReservation = (reservation) => {
    return $.ajax({
      method: "POST",
      url: "/api/reservations",
      data: {
          reservation
      }
    });
}

export const fetchUserReservations = userId => {
    return $.ajax({
      method: "GET",
      url: "/api/reservations",
      data: {
          userId
        }
    });
}

export const fetchReservation = id => {
    return $.ajax({
      method: "GET",
      url: `/api/reservations/${id}`,
    });
}

export const deleteReservation = id => { 
    return $.ajax({
      method: "DELETE",
      url: `/api/reservations/${id}`,
    });
}