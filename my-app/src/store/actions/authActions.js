import axios from "axios";

export const signIn = (credentials, props) => {
  return (dispatch, getstate) => {
    axios
      .post("http://localhost:8080/login", credentials)
      .then((res) => {
        console.log(res);
        let userID = res.data.userId;
        localStorage.setItem("user", res.data.token);
        localStorage.setItem("userID", userID);
        props.history.push("/");
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};
export const logOut = () => {
  return (dispatch, getstate) => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT", isLogout: true });
  };
};
export const signUp = (newUser) => {
  return (dispatch, getstate) => {
    axios
      .post("http://localhost:8080/register", newUser)
      .then((result) => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};
