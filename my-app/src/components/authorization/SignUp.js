import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";
class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      isRegistered: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
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
      <div className="container">
        <div className="card">
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="form__info">
              <h5 className="info">Register </h5>
            </div>
            <div className="form__input">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Name"
                value={this.state.name}
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="form__input">
              <input
                type="text"
                name="email"
                placeholder="Enter Email"
                value={this.state.email}
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="form__input">
              <input
                type="text"
                name="password"
                id="password"
                placeholder="Enter Password "
                value={this.state.password}
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="form__button">
              <button className="btn">REGISTER</button>
            </div>
          </form>
          <div>{greeting}</div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};
export default connect(
  null,
  mapDispatchToProps
)(RegisterForm);
