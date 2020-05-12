import React, { Component } from "react";
import CreateReservation from "../projects/createResrevation";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
class Dashboard extends Component {
  state = {
    user: "",
    auth: "",
  };

  render() {
    if (!localStorage.getItem("user")) return <Redirect to="/signin" />;
    console.log(this.props.userID);
    return (
      <div className="container">
        <div>
          <nav></nav>
        </div>
        <div>
          <CreateReservation />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.userID,
});
export default connect(mapStateToProps)(Dashboard);
