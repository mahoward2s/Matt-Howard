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
        <Row className="text-center">
          <Col size="md-12">
            <h1>Collaborations</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
        <Card 
        className="text-center" 
        bg="warning"
        border="dark"
        style={{ width: '40rem' }}>
            <Card.Img variant="top" src="./images/CovidNoJoke.gif" />
            <Card.Body>
                <Card.Title>Covid Is No Joke</Card.Title>
                <Card.Text>
                Application to provide up to date Covid numbers and jokes of the day. You are able to search different states in the United States. These searches are saved to local storage and update daily. You can also get daily jokes to lighten the mood and your day. Worked with Msas12 and Kmsaunders7 to create this application.
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Button href="https://github.com/Msas12/COVID-Is-No-Joke-" variant="primary">GitHub</Button>
                <Button href="https://msas12.github.io/COVID-Is-No-Joke-/" variant="info">Launch</Button>
            </Card.Body>
        </Card>
        </Row>
        <Row className="justify-content-center">
        <Card 
        className="text-center" 
        bg="warning"
        border="dark"
        style={{ width: '40rem' }}>
            <Card.Img variant="top" src="../images/DOGS!.gif" alt="gif of Adopt Don't Shop Ususage"/>
            <Card.Body>
                <Card.Title>Adopt Don't Shop</Card.Title>
                <Card.Text>
                Adopt Don't Shop is a dog adoption agency website. Allows users to view available dogs to adopt, including pictures using multer. Included is a success story page, where users can write about a happy adoption story. When admin logs into the website/app they have the opportunity to upload images of available dogs and provde information about them before the dogs get posted for everyone to see and adopt. There are a lot of things that we would like to incorporate going forward.
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Button href="https://github.com/Msas12/Project-2" variant="primary">GitHub</Button>
                <Button href="https://project2msksmh.herokuapp.com/" variant="info">Launch</Button>
            </Card.Body>
        </Card>
        </Row>
        <Row className="justify-content-center">
        <Card 
        className="text-center" 
        bg="warning"
        border="dark"
        style={{ width: '40rem' }}>
            <Card.Img variant="top" src="" alt=""/>
            <Card.Body>
                <Card.Title>Brew Crew</Card.Title>
                <Card.Text>
                Application is in development.
                Collaborating with Msas12, Kmsaunders, Anniemcfarland7 and Sarah Pietz
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Button href="https://github.com/Msas12/brew-crew" variant="primary">GitHub</Button>
                <Button href="" variant="info">Launch</Button>
            </Card.Body>
        </Card>
        </Row>
      </Container>
    </div>
  );
}

export default Collaborations;