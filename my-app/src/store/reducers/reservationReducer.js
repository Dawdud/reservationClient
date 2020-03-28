const reservationReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_RESERVATION":
      console.log("created project", action.project);
      return state;
    case "RESERVATION_ERROR":
      console.log("reservation error", action.err);
      return state;
    default:
      return state;
  }
};
export default reservationReducer;
