import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";
class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
    console.log(e);
  };
  handleSubmit = (e) => {
    this.props.signIn(this.state);

    e.preventDefault();
    // console.log(this.state);
  };
  render() {
    return (
      <div className="container">
        <div className="card">
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="form__info">
              <h5 className="info">Log In</h5>
            </div>
            <div className="form__input">
              <input
                placeholder="Enter User Email "
                type="email"
                id="email"
                onChange={this.handleChange}
              />
            </div>
            <div className="form__input">
              <input
                type="password"
                id="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </div>
            <div className="form__button">
              <button className="btn">SIGN IN</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    signIn: (creds) => dispatch(signIn(creds, props)),
  };
};
export default connect(
  null,
  mapDispatchToProps
)(SignIn);
