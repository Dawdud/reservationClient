import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";
import { createReservation } from "../../store/actions/reservationActions";
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
    let greeting;
    if (this.state.isRegistered) {
      greeting = (
        <p>Hello {this.state.name}! You are sucessfully registered.</p>
      );
    } else {
      greeting = "";
    }
    return (
      <div className="contaner">
        <div className="row">
          <h5>Reservation</h5>
          <form onSubmit={this.handleSubmit}>
            <div className="input-field col s12">
              <input
                type="text"
                name="name"
                id="name"
                value={this.state.name}
                onChange={this.handleChange}
              ></input>
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-field col s12">
              <input
                type="text"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              ></input>
              <label htmlFor="name">description</label>
            </div>
            <div className="input-field col s12">
              <input
                type="date"
                name="startdate"
                id="startdate"
                value={this.state.startdate}
                onChange={this.handleChange}
              ></input>
              <label htmlFor="password">startDate</label>
            </div>
            <div className="input-field col s12">
              <input
                type="date"
                name="enddate"
                id="enddate"
                value={this.state.enddate}
                onChange={this.handleChange}
              ></input>
              <label htmlFor="enddate">endDate</label>
            </div>
            <div className="input-field col s12">
              <input
                type="number"
                name="guests"
                id="guests"
                value={this.state.guests}
                onChange={this.handleChange}
              ></input>
              <label htmlFor="guests">guest number</label>
            </div>
            <button>Accept reservation</button>
          </form>
          <div>{greeting}</div>
        </div>
      </div>
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
