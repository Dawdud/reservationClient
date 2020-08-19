import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";
import { createReservation } from "../../store/actions/reservationActions";
import { Row, Button, Form, Container, Col, Card } from "react-bootstrap";
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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.createReservation(this.state);
  };
  handleChange(event) {
    console.log(event.target.name);
    //  this.setState({ value: event.target.value });

    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Card className="card--reservation">
              <Card.Header>
                <h5>Create Reservation</h5>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Row>
                    <Form.Group controlId="name">
                      <Form.Label> Name:</Form.Label>

                      <Form.Control
                        type="text"
                        onChange={this.handleChange}
                        placeholder="Enter Name"
                      />
                    </Form.Group>

                    <Form.Group controlId="description">
                      <Form.Label>Description:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter description:"
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group controlId="startdate">
                      <Form.Label> Enter start date:</Form.Label>

                      <Form.Control
                        type="date"
                        onChange={this.handleChange}
                        placeholder="Enter Start Date"
                      />
                    </Form.Group>

                    <Form.Group controlId="enddate">
                      <Form.Label>Enter end Date:</Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="End Date:"
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="guests">
                    <Form.Label> Enter number of guests:</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="guests:"
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                  <Button className="mb-6" variant="primary" type="submit">
                    Create Reservation
                  </Button>
                </Form>
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
