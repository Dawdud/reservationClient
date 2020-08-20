import React, { Component } from "react";
import { connect } from "react-redux";
import { createReservation } from "../../store/actions/reservationActions";
import { Row, Button, Form, Container, Col, Card } from "react-bootstrap";
import ReservationForm from "../projects/ReservationForm";
class CreateReservation extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      startdate: "",
      enddate: "",
      guests: "",
      userId: "",
    };
  }

  handleChange(event) {
    //  this.setState({ value: event.target.value });

    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <h5>Create Reservation</h5>
              </Card.Header>
              <Card.Body>
                <ReservationForm
                  formAction={this.props.createReservation}
                  mode="create"
                  buttonText="create reservation"
                ></ReservationForm>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createReservation: (reservation) =>
      dispatch(createReservation(reservation)),
  };
};
export default connect(
  null,
  mapDispatchToProps
)(CreateReservation);
