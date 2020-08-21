import React, { Component } from "react";
import Modal from "../layout/Modal";
import { Row, Button, Col, Card } from "react-bootstrap";
import { format } from "date-fns";
import ReservationForm from "../projects/ReservationForm";
import { connect } from "react-redux";
import { updateReservation } from "../../store/actions/reservationActions";

class ProjectDetails extends Component {
  state = {
    show: false,
    reservationData: {},
  };
  showModal = () => {
    this.setState({ show: true });
    console.log(true, "Open Modal!!!!");
  };
  hideModal = () => {
    this.setState({ show: false });
    console.log(false, "Close Modal!!!!");
  };
  handleSubmit() {
    console.log("submit");
  }

  handleChange() {
    console.log("change");
  }
  render() {
    const reservationData = {
      name: this.props.name,
      guests: this.props.guests,
      startDate: this.props.startDate,
      endDate: this.props.endDate,
      description: this.props.description,
    };
    return (
      <Col xs={4}>
        <Card>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Text> guests: {this.props.guests}</Card.Text>
          <Card.Text>
            start date: {format(new Date(this.props.startDate), "yyyy-MM-dd")}
          </Card.Text>
          <Card.Text>
            end Date: {format(new Date(this.props.endDate), "yyyy-MM-dd")}
          </Card.Text>
          <Modal handleClose={this.hideModal} show={this.state.show}>
            <ReservationForm
              formAction={this.props.updateReservation}
              mode="edit"
              hideModal={this.hideModal}
              reservationData={reservationData}
              buttonText="Edit reservation"
              reservationId={this.props.id}
            ></ReservationForm>
          </Modal>

          <Button variant="primary" type="submit" onClick={this.showModal}>
            Update
          </Button>
        </Card>
      </Col>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateReservation: (reservation, reservationId) =>
      dispatch(updateReservation(reservation, reservationId)),
  };
};
export default connect(
  null,
  mapDispatchToProps
)(ProjectDetails);
