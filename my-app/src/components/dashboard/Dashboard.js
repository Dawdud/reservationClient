import React, { Component } from "react";
import CreateReservation from "../projects/createResrevation";
import ProjectDetails from "../projects/ProjectDetails";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUserReservation } from "../../store/actions/reservationActions";
import { Row, Col, Container } from "react-bootstrap";
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

    for (let reservation of reservations) {
      items.push(
        <ProjectDetails
          key={"ser" + reservation.id}
          id={reservation.id}
          name={reservation.name}
          guests={reservation.guests}
          startDate={reservation.startdate}
          endDate={reservation.enddate}
          description={reservation.description}
        />
      );
    }

    return (
      <Container>
        <Row>{items}</Row>
      </Container>
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
