import React from "react";
import { Card, Button, Container, Row, Col} from 'react-bootstrap';

function Websites() {
  return (
    <div>
      <Container>
        <Row className="text-center">
          <Col size="md-12">
            <h1>Websites</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
        <Card
            className="text-center"
            bg="light"
            border="dark"
            style={{ width: '40rem' }}>
            <Card.Img variant="top" src="images/HoriseonSocialSolutions.gif" />
            <Card.Body>
              <Card.Title>Horiseon Social Solutions</Card.Title>
              <Card.Text>
              This project a client came to me with a website design. I had to connect the images and fix the layout of the website. I linked the navbar with the appropriate section in the website.
                </Card.Text>
            </Card.Body>
            <Card.Body>
              <Button href="https://github.com/mahoward2s/Code-Refractor" target="_blank" variant="primary">GitHub</Button>
              <Button href="https://mahoward2s.github.io/Code-Refractor/" target="_blank" variant="info">Launch</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default Websites;