import React, { Component } from "react";
import axios from "axios";

export default class RegisterForm extends Component {
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

    const { name: name, email, password } = this.state;

    axios
      .post("http://localhost:8080/register", {
        name,
        email,
        password
      })
      .then(result => {
        if (result.status === 201) {
          this.setState({ isRegistered: true });
        }
      });
  };
  handleChange(event) {
    console.log(event.target.name);
    //  this.setState({ value: event.target.value });
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    const { name: name, email, password } = this.state;
    let greeting;
    if (this.state.isRegistered) {
      greeting = (
        <p>Hello {this.state.name}! You are sucessfully registered.</p>
      );
    } else {
      greeting = "";
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
          ></input>

          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          ></input>

          <input
            type="text"
            name="password"
            id="password"
            value={this.state.password}
            onChange={this.handleChange}
          ></input>
          <button>Send data!</button>
        </form>
        <div>{greeting}</div>
      </div>
    );
  }
}
