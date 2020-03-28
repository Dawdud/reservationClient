import axios from "axios";

export const createReservation = reservation => {
  return (dispatch, getState) => {
    axios
      .post("http://localhost:8080/createreservation", reservation)
      .then(res => {
        dispatch({ type: "CREATE_RESERVATION" });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: "RESERVATION_ERROR", err });
      });
  };
};
