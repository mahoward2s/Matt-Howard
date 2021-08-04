import React from "react";
import { Card, ListGroup, Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin, faGoogle, faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpenText, faPhoneVolume, faFilePdf } from '@fortawesome/free-solid-svg-icons'


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
        <Row
          style={{
            padding: '15px 15px'
          }}
        >
          <Col
            style={{
              padding: '15px 110px'
            }}
          >
            <Card
              className="text-center"
              border="dark"
              style={{ width: '20rem' }}>
              <Card.Img variant="top"
                alt="image of github profile"
                src="images/emojime.jpeg" />
              <Card.Body>
                <Card.Title>Profiles</Card.Title>
                <Button
                  className="gitHubButton"
                  bsStyle='default'
                  style={{
                    borderRadius: '8px',
                    padding: '1px 8px',
                    fontSize: '35px',
                    backgroundColor: '#000000'
                  }}
                  href="https://github.com/mahoward2s"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithubSquare} />
                </Button>
                <Button
                  className="linkedInButton"
                  bsStyle='default'
                  style={{
                    borderRadius: '8px',
                    padding: '1px 8px',
                    fontSize: '35px',
                    backgroundColor: '#0a66c2'
                  }}
                  href="https://www.linkedin.com/in/matthew-h-974498108/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col
            style={{
              padding: '15px 15px'
            }}
          >
            <Card
              className="text-center"
              border="dark"
              style={{ width: '20rem' }}>
              <Card.Img variant="top"
                alt="Call Me Image"
                src="images/CallMe.png" />
              <Card.Body>
                <Card.Title>Contact</Card.Title>
                <Button
                  className="emailButton"
                  bsStyle='default'
                  style={{
                    borderRadius: '8px',
                    padding: '1px 8px',
                    fontSize: '35px',
                    backgroundColor: '#1b8dff'
                  }}
                  href="mailto:<nowiki>mahoward2s@gmail.com?subject=' Contact From Portfolio'"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faEnvelopeOpenText} />
                </Button>
                <Button
                  className="phoneButton"
                  bsStyle='default'
                  style={{
                    borderRadius: '8px',
                    padding: '1px 8px',
                    fontSize: '35px',
                    backgroundColor: '#1abe22'
                  }}
                  href="tel:3146245710"
                >
                  <FontAwesomeIcon icon={faPhoneVolume} />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row
          style={{
            padding: '15px 15px'
          }}
        >
          <Col
            style={{
              padding: '15px 110px'
            }}
          >
            <Card
              className="text-center"
              border="dark"
              style={{ width: '20rem' }}>
              <Card.Img variant="top"
                alt="Image of SEMO, LU, and WUSTL"
                src="images/Colleges.png" />
              <Card.Body>
                <Card.Title>Resume</Card.Title>
                <Button
                  className='googleDocResumeButton'
                  bsStyle='default'
                  style={{
                    borderRadius: '8px',
                    padding: '1px 8px',
                    fontSize: '35px',
                    backgroundColor: '#3b0ac2'
                  }}
                  href="https://docs.google.com/document/d/1PRWn6gj7CNjXeJ8znhUkrbMLis3eGa6DaqXzQsRpPe0/edit?usp=sharing"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGoogle} />
                </Button>
                <Button
                  className="pdfResumeButton"
                  href="./public/images/Matt_Howard_Resume.pdf"
                  target="_blank"
                  class="btn btn-danger"
                  bsStyle='default'
                  style={{
                    borderRadius: '8px',
                    padding: '1px 8px',
                    fontSize: '35px',
                    backgroundColor: 'rgb(163, 9, 9)'
                  }}
                  download><i class="fa fa-download"></i>
                  <FontAwesomeIcon icon={faFilePdf} />
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col
            style={{
              padding: '15px'
            }}
          >
            <Card
              className="text-center"
              border="dark"
              style={{ width: '20rem' }}>
              <Card.Img
                variant="top"
                alt="image of matt with dalmatian"
                src="images/FacebookProfile.jpg" />
              <Card.Body>
                <Card.Title>Social Media</Card.Title>
                <Button
                  className="personalInstagramButton"
                  bsStyle='default'
                  style={{
                    borderRadius: '8px',
                    padding: '1px 8px',
                    fontSize: '25px',
                    backgroundColor: '#dd0695'
                  }}
                  href="https://www.instagram.com/mhlth282"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagramSquare} />
                  Personal
                </Button>
                <Button
                  className="artInstagramButton"
                  bsStyle='default'
                  style={{
                    borderRadius: '8px',
                    padding: '1px 8px',
                    fontSize: '25px',
                    backgroundColor: '#dd0695'
                  }}
                  href="https://www.instagram.com/depression.art.inc"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagramSquare} />
                  Art
                </Button>
                <Button
                  className="sportsInstagramButton"
                  bsStyle='default'
                  style={{
                    borderRadius: '8px',
                    padding: '1px 8px',
                    fontSize: '25px',
                    backgroundColor: '#dd0695'
                  }}
                  href="https://www.instagram.com/bluescollector2.0"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagramSquare} />
                  Sports
                </Button>
                <Button
                  className="faceBookButton"
                  bsStyle='default'
                  style={{
                    borderRadius: '8px',
                    padding: '1px 8px',
                    fontSize: '35px',
                    backgroundColor: '#3578e5'
                  }}
                  href="https://www.facebook.com/mahoward2s/"
                  target="_blank"
                >
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
