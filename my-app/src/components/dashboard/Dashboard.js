import React, { Component } from "react";
import CreateReservation from "../projects/createResrevation";
import ProjectDetails from "../projects/ProjectDetails";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUserReservation } from "../../store/actions/reservationActions";

class Dashboard extends Component {
  state = {
    user: "",
    auth: "",
  };
  componentDidMount() {
    this.props.fetchUserReservation();
  }

  render() {
    if (!localStorage.getItem("user")) return <Redirect to="/signin" />;
    const items = [];
    let { reservations } = this.props;

    for (let ser of reservations) {
      items.push(
        <ProjectDetails
          key={"ser" + ser.id}
          id={ser.id}
          name={ser.name}
          guests={ser.guests}
          startDate={ser.startdate}
        />
      );
    }

    return (
      <div className="container">
        <div>items</div>
        <div>
          <nav></nav>
        </div>
        <div></div>
        <div>{items}</div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserReservation: () => dispatch(fetchUserReservation()),
  };
};
const mapStateToProps = (state) => ({
  reservations: state.reservation.payload,
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
