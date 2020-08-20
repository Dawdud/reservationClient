import React, { Component } from "react";
import { Button, Form, Col } from "react-bootstrap";
import { format } from "date-fns";
class ReservationForm extends Component {
  state = {
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    guests: "",
    userId: "",
  };

  componentDidMount() {
    const {
      name,
      guests,
      endDate,
      startDate,
      description,
    } = this.props.reservationData;
    console.log(startDate);
    const formatEndDate = format(new Date(endDate), "yyyy-MM-dd");
    const formatStartDate = format(new Date(startDate), "yyyy-MM-dd");

    if (this.props.mode === "edit") {
      this.setState({
        name,
        guests,
        description,
        startDate: formatStartDate,
        endDate: formatEndDate,
      });
    }
  }
  handleChange = (event) => {
    //  this.setState({ value: event.target.value });
    console.log(this.props.reservationData);
    this.setState({ [event.target.id]: event.target.value });
  };
  handleSubmit = (e) => {
    if (this.props.mode === "create") {
      e.preventDefault();

      this.props.formAction(this.state);
    } else if (this.props.mode === "edit") {
      e.preventDefault();
      this.props.formAction(this.state, this.props.reservationId);
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="name">
            <Form.Label> Name:</Form.Label>

            <Form.Control
              type="text"
              onChange={this.handleChange}
              placeholder="Enter Name"
              value={this.state.name}
            />
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="guests">
            <Form.Label> Enter number of guests:</Form.Label>
            <Form.Control
              type="number"
              placeholder="guests:"
              onChange={this.handleChange}
              value={this.state.guests}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="startDate">
            <Form.Label> Enter start date:</Form.Label>

            <Form.Control
              type="date"
              onChange={this.handleChange}
              placeholder="Enter Start Date"
              value={this.state.startDate}
            />
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="endDate">
            <Form.Label>Enter end Date:</Form.Label>
            <Form.Control
              type="date"
              placeholder="End Date:"
              onChange={this.handleChange}
              value={this.state.endDate}
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="description">
          <Form.Label>Description:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter description:"
            onChange={this.handleChange}
            value={this.state.description}
          />
        </Form.Group>
        {
          <Button variant="primary" type="submit">
            test
          </Button>
        }
      </Form>
    );
  }
}
export default ReservationForm;
