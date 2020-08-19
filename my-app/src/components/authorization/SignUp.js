import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";
import { Row, Button, Form, Container, Col, Card } from "react-bootstrap";
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
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <h5 className="info">Register </h5>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="name">
                    <Form.Row>
                      <Form.Label>Name:</Form.Label>

                      <Form.Control
                        type="text"
                        onChange={this.handleChange}
                        placeholder="Enter name"
                      />
                    </Form.Row>
                  </Form.Group>
                  <Form.Group controlId="email">
                    <Form.Row>
                      <Form.Label>Email address:</Form.Label>

                      <Form.Control
                        type="email"
                        id="email"
                        onChange={this.handleChange}
                        placeholder="Enter email"
                      />
                    </Form.Row>
                  </Form.Group>

                  <Form.Group controlId="password">
                    <Form.Row>
                      <Form.Label>Password:</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter password"
                        onChange={this.handleChange}
                      />
                    </Form.Row>
                  </Form.Group>

                  <Form.Row>
                    <Button className="mb-6" variant="primary" type="submit">
                      Register
                    </Button>
                  </Form.Row>
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
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};
export default connect(
  null,
  mapDispatchToProps
)(RegisterForm);
