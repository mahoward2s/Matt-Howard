import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Collaborations() {
  return (
    <div>
      <Container>
        <Row>
          <Col size="md-12">
            <h1>Collaborations</h1>
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
                <Card.Title>Covid Is No Joke</Card.Title>
                <Card.Text>
                Application to provide up to date Covid numbers and jokes of the day. You are able to search different states in the United States. These searches are saved to local storage and update daily. You can also get daily jokes to lighten the mood and your day. Worked with Msas12 and Kmsaunders7 to create this application.
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Button href="" variant="primary">GitHub</Button>
                <Button href="" variant="info">Launch</Button>
            </Card.Body>
        </Card>
        </Row>
        <Row>
        <Card 
        className="text-center" 
        bg="warning"
        border="dark"
        style={{ width: '40rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title>Covid Is No Joke</Card.Title>
                <Card.Text>
                Application to provide up to date Covid numbers and jokes of the day. You are able to search different states in the United States. These searches are saved to local storage and update daily. You can also get daily jokes to lighten the mood and your day. Worked with Msas12 and Kmsaunders7 to create this application.
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Button href="" variant="primary">GitHub</Button>
                <Button href="" variant="info">Launch</Button>
            </Card.Body>
        </Card>
        </Row>
        <Row>
        <Card 
        className="text-center" 
        bg="warning"
        border="dark"
        style={{ width: '40rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title>Brew Crew</Card.Title>
                <Card.Text>
                Application is in development.
                Collaborating with Msas12, Kmsaunders, Anniemcfarland7 and Sarah Pietz
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

export default Collaborations;