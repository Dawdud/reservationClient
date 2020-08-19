import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import { Row, Button, Form, Container, Col, Card } from "react-bootstrap";
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
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <h5>Log In</h5>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="email">
                    <Form.Row>
                      <Form.Label>Email address:</Form.Label>

                      <Form.Control
                        type="email"
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
                    <Button variant="primary" type="submit">
                      Login
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

const mapDispatchToProps = (dispatch, props) => {
  return {
    signIn: (creds) => dispatch(signIn(creds, props)),
  };
};
export default connect(
  null,
  mapDispatchToProps
)(SignIn);
