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
      isRegistered: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = e => {
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
      <div className="contaner">
        <div className="row">
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
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              ></input>
              <label htmlFor="name">Email</label>
            </div>
            <div className="input-field col s12">
              <input
                type="text"
                name="password"
                id="password"
                value={this.state.password}
                onChange={this.handleChange}
              ></input>
              <label htmlFor="password">Password</label>
            </div>
            <button>Send data!</button>
          </form>
          <div>{greeting}</div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};
export default connect(null, mapDispatchToProps)(RegisterForm);
