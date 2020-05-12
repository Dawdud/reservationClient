import axios from "axios";

export const createReservation = (reservation) => {
  return (dispatch, getState) => {
    const token = localStorage.getItem("user");
    const userId = localStorage.getItem("userID");
    reservation.userId = userId;
    console.log(reservation);
    axios
      .post("http://localhost:8080/createreservation", reservation, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res);
        dispatch({ type: "CREATE_RESERVATION" });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "RESERVATION_ERROR", err });
      });
  };
};
