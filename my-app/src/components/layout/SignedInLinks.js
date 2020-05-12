import React from "react";
import { NavLink, Link } from "react-router-dom";

const SignedInLinks = () => {
  const loggedIn = localStorage.getItem("user");
  return (
    <ul className="right">
      <li>
        {loggedIn ? (
          <Link
            to="/"
            onClick={(e) => {
              localStorage.removeItem("user");
            }}
          >
            Log Out
          </Link>
        ) : null}
      </li>
      <li>
        <NavLink to="/"></NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
