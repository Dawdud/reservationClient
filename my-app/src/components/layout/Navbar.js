import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/">home</Link>
        <SignedInLinks></SignedInLinks>
        <SignedOutLinks />
      </div>
    </nav>
  );
};

export default Navbar;
