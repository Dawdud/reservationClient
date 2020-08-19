import React from "react";
import { Row, Button, Col, Card } from "react-bootstrap";
import { format } from "date-fns";

const ProjectDetails = (props) => {
  const id = props.id;
  const name = props.name;
  const guests = props.guests;
  const startDate = props.startDate;
  const endDate = props.endDate;
  return (
    <Col xs={4}>
      <Card>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{guests}</Card.Text>
        <Card.Text>{format(new Date(startDate), "yyyy-MM-dd")}</Card.Text>
        <Card.Text>{format(new Date(endDate), "yyyy-MM-dd")}</Card.Text>
        <Button variant="primary" type="submit">
          Update
        </Button>
        <Button variant="primary" type="submit">
          Delete
        </Button>
      </Card>
    </Col>
  );
};

export default ProjectDetails;
