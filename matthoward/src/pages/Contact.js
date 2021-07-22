import React from "react";
import { Card, ListGroup, Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin, faGoogle, faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import {faEnvelopeOpenText, faPhoneVolume, faFilePdf} from '@fortawesome/free-solid-svg-icons'

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
              border="dark"
              style={{ width: '18rem' }}>
              <Card.Img variant="top"
                alt="image of github profile"
                src="images/emojime.jpeg" />
              <Card.Body>
                <Card.Title>Profiles:</Card.Title>
                <Card.Text>
                  Below are my various profiles.
                </Card.Text>
                <Button
                  href="https://github.com/mahoward2s"
                  target="_blank"
                  variant="primary">
                    <FontAwesomeIcon icon={faGithubSquare} />
                </Button>
                <Button
                  href="https://www.linkedin.com/in/matthew-h-974498108/"
                  target="_blank"
                  variant="info">
                    <FontAwesomeIcon icon={faLinkedin} />
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="text-center"
              border="dark"
              style={{ width: '18rem' }}>
              <Card.Img variant="top"
                alt="Call Me Image"
                src="images/CallMe.png" />
              <Card.Body>
                <Card.Title>Contact:</Card.Title>
                <Card.Text>
                  Below is my personal email and phone number.  Feel free to reach out to discuss our next project.
                </Card.Text>
                <Button
                  href="mailto:<nowiki>mahoward2s@gmail.com?subject=' Contact From Portfolio'"
                  target="_blank"
                  variant="secondary">
                    <FontAwesomeIcon icon={faEnvelopeOpenText} />
                </Button>
                <Button
                  href="tel:3146245710"
                  variant="secondary">
                    <FontAwesomeIcon icon={faPhoneVolume} />
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="text-center"
              border="dark"
              style={{ width: '18rem' }}>
              <Card.Img variant="top"
                alt="Image of SEMO, LU, and WUSTL"
                src="images/Colleges.png" />
              <Card.Body>
                <Card.Title>Resume:</Card.Title>
                <Card.Text>
                  Below you can choose Google Docs or PDF for a copy of my resume.
                </Card.Text>
                <Button
                  href="https://docs.google.com/document/d/1PRWn6gj7CNjXeJ8znhUkrbMLis3eGa6DaqXzQsRpPe0/edit?usp=sharing"
                  target="_blank"
                  variant="success">
                    <FontAwesomeIcon icon={faGoogle} />
                </Button>
                <Button
                  variant="danger"
                  href="./public/images/Matt_Howard_Resume.pdf"
                  target="_blank" class="btn btn-warning"
                  download><i
                    class="fa fa-download"></i>
                    <FontAwesomeIcon icon={faFilePdf} />
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="text-center"
              border="dark"
              style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                alt="image of matt with dalmatian"
                src="images/FacebookProfile.jpg" />
              <Card.Body>
                <Card.Title>Social Media:</Card.Title>
                <Card.Text>
                  Check out my various Social Media accounts
                </Card.Text>
                <Button
                  href="https://www.instagram.com/mhlth282"
                  target="_blank"
                  variant="dark">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                    Personal
                </Button>
                <Button
                  href="https://www.instagram.com/depression.art.inc"
                  target="_blank"
                  variant="dark">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                    Art
                </Button>
                <Button
                  href="https://www.instagram.com/bluescollector2.0"
                  target="_blank"
                  variant="dark">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                    Sports
                </Button>
                <Button
                  href="https://www.facebook.com/mahoward2s/"
                  target="_blank"
                  variant="dark">
                    <FontAwesomeIcon icon={faFacebookSquare} />
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
