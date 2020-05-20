const initState = { payload: "" };
const reservationReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_RESERVATION":
      console.log("created project", action.reservation);
      return state;
    case "RESERVATION_ERROR":
      console.log("reservation error", action.err);
      return state;
    case "GET_RESERVATION":
      console.log("get items", action);
      return { ...state, payload: action.payload.data };
    case "GET_ERROR":
      console.log("error get", action.err);
      return state;
    default:
      return state;
  }
};
export default reservationReducer;
