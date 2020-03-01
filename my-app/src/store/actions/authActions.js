import axios from "axios";
export const signIn = credentials => {
  return (dispatch, getstate) => {
    axios
      .post("http://localhost:8080/login", credentials)
      .then(res => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const signUp = newUser => {
  return (dispatch, getstate) => {
    axios
      .post("http://localhost:8080/register", newUser)
      .then(result => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};
