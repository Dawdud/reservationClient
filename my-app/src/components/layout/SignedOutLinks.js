import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  const loggedIn = localStorage.getItem("user");
  return (
    <ul className="right">
      <li>{!loggedIn ? <NavLink to="/signup"> Signup</NavLink> : null}</li>
      <li>{!loggedIn ? <NavLink to="/signin">Login</NavLink> : null}</li>
    </ul>
  );
};

export default SignedInLinks;
