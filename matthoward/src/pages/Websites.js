import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Websites() {
  return (
    <div>
      <Container>
        <Row>
          <Col size="md-12">
            <h1>Websites</h1>
          </Col>
        </Row>
        <Row>
        <Card
            className="text-center"
            bg="warning"
            border="dark"
            style={{ width: '40rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text>
                Description
                </Card.Text>
            </Card.Body>
            <Card.Body>
              <Button href="" variant="primary">GitHub</Button>
              <Button href="" variant="info">Launch</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default Websites;