import React from "react";
import { Card, ListGroup, Button, Container, Row, Col } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, fagithub } from '@fortawesome/free-brands-svg-icons'

function Contact() {
  return (
    <div>
      <Container className="justify-content-center">
        <Row className="text-center">
          <Col size="md-12">
            <h1>Contact Me</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Card
            className="text-center"
            border="dark"
            style={{ width: '40rem' }}>
            <Card.Img
              variant="top"
              src="images/IMG_Phones.jpg" 
              alt="image of payphones"
              />
            <Card.Body>
              <Card.Title>Matthew Howard</Card.Title>
              <Card.Text>
                Feel Free To Reach Out Anytime.
              </Card.Text>
            </Card.Body>
            <ListGroup
              className="list-group-flush">
            </ListGroup>
          </Card>
        </Row>
        <Row>
          <Col>
            <Card
              className="text-center"
              style={{ width: '18rem' }}>
              <Card.Img variant="top"
              alt="image of github profile"
              src="images/emojime.jpeg"/>
              <Card.Body>
                <Card.Title>Profiles:</Card.Title>
                <Card.Text>
                  Below are my various profiles.
                </Card.Text>
                <Button
                  href="https://github.com/mahoward2s"
                  target="_blank"
                  variant="primary">GitHub
                  <fagithub />
                </Button>
                <Button
                  href="https://www.linkedin.com/in/matthew-h-974498108/"
                  target="_blank"
                  variant="info">LinkedIn
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="text-center"
              style={{ width: '18rem' }}>
              <Card.Img variant="top"
              alt="Call Me Image"
              src="images/CallMe.png"/>
              <Card.Body>
                <Card.Title>Contact:</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button
                  href="mailto:<nowiki>mahoward2s@gmail.com?subject=' Contact From Portfolio'"
                  target="_blank"
                  variant="secondary">Email
                </Button>
                <Button
                  href="tel:3146245710"
                  variant="secondary">Phone
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="text-center"
              style={{ width: '18rem' }}>
              <Card.Img variant="top" 
              alt="Image of SEMO, LU, and WUSTL"
              src="images/Colleges.png"/>
              <Card.Body>
                <Card.Title>Resume:</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button
                  href="https://docs.google.com/document/d/1PRWn6gj7CNjXeJ8znhUkrbMLis3eGa6DaqXzQsRpPe0/edit?usp=sharing"
                  target="_blank"
                  variant="success">Google
                </Button>
                <Button
                  variant="danger"
                  href="./public/images/Matt_Howard_Resume.pdf"
                  target="_blank" class="btn btn-warning"
                  download><i
                    class="fa fa-download"></i>PDF
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="text-center"
              style={{ width: '18rem' }}>
              <Card.Img 
              variant="top" 
              alt="image of matt with dalmatian"
              src="images/FacebookProfile.jpg"/>
              <Card.Body>
                <Card.Title>Social Media:</Card.Title>
                <Card.Text>
                  Check out my various Social Media accounts
                </Card.Text>
                <Button
                  href="https://www.instagram.com/mhlth282"
                  target="_blank"
                  variant="dark">Personal
                </Button>
                <Button
                  href="https://www.instagram.com/depression.art.inc"
                  target="_blank"
                  variant="dark">Art
                </Button>
                <Button
                  href="https://www.instagram.com/bluescollector2.0"
                  target="_blank"
                  variant="dark">Sports
                </Button>
                <Button
                  href="https://www.facebook.com/mahoward2s/"
                  target="_blank"
                  variant="dark">Facebook
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
