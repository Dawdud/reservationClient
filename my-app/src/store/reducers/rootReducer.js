import authReducer from "./authReducer";
import reservationReducer from "./reservationReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  reservation: reservationReducer
});

export default rootReducer;
