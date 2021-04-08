import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function PersonalProjects() {
  return (
    <div>
      <Container>
        <Row>
            <h1>Personal Projects</h1>
        </Row>
        <Row>
          <Col size="md-12">
            <h1>Coming Soon!!</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PersonalProjects;