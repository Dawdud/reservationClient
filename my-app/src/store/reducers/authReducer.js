const initState = {};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return { ...state, authError: "login failed" };

    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,

        authError: null,
      };
    case "SIGNUP_SUCCESS":
      console.log("signup success");
      return { ...state, authError: null };
    case "SIGNUP_ERROR":
      console.log("signup ERROR");
      return { ...state, authError: "signup failed" };
    default:
      return state;
  }
};

export default authReducer;
