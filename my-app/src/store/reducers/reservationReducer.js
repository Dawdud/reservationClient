const initState = { payload: "", update: "" };
const reservationReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_RESERVATION":
      console.log(" project created ", action.reservation);
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

    case "UPDATE_ERROR":
      console.log("update error", action.err);
      return state;
    case "UPDATE_RESERVATION":
      console.log("reservation updated");
      return { ...state, update: action.update.data };

    default:
      return state;
  }
};
export default reservationReducer;
