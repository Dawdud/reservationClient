import React from "react";
import { NavLink, Link } from "react-router-dom";
import { logOut } from "../../store/actions/authActions";
import { connect } from "react-redux";

const SignedInLinks = ({ logOut }) => {
  const loggedIn = localStorage.getItem("user");
  return (
    <ul className="right">
      <li>
        {loggedIn ? (
          <Link
            to="/"
            onClick={(e) => {
              logOut();
            }}
          >
            Log Out
          </Link>
        ) : null}
      </li>
      <li>
        <NavLink to="/"></NavLink>
      </li>

      <li>
        {loggedIn ? <NavLink to="/create"> Create Reservation</NavLink> : null}
      </li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut()),
  };
};
export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
