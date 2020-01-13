import React, { Component } from "react";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log(e);
  };
  handleSubmit = e => {
    console.log(e);
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h5>SignIn</h5>
          <div className="input-field">
            <label htmlFor="email"> Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password"> password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button> login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
