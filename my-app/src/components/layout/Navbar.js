import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = ({ auth, isLogout }) => {
  const loggedIn = localStorage.getItem("user");
  console.log(auth, isLogout);
  if (!loggedIn) {
    return (
      <nav className="nav">
        <div className="nav__content">
          <div className="nav__home">
            <Link to="/">home</Link>
          </div>
          <div className="nav__signed">
            <SignedOutLinks />
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="nav">
        <div className="nav__content">
          <div className="nav__home">
            <Link to="/">home</Link>
          </div>
          <div className="nav__signed">
            <SignedInLinks></SignedInLinks>
          </div>
        </div>
      </nav>
    );
  }
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  isLogout: state.isLogout,
});

export default connect(mapStateToProps)(Navbar);
