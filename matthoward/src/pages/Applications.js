import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Applications() {
  return (
    <div>
      <Container className="justify-content-center">
        <Row
        className="text-center">
          <Col 
          size="md-12">
            <h1>Applications</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
        <Card
            className="text-center"
            bg="warning"
            border="dark"
            style={{ width: '40rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Matt's Burgers</Card.Title>
              <Card.Text>
              Application to provide users the opportunity to either track the burger of the day or burgers that they would like to eat. They have the opportunity to add burgers, devour burgers, make them available, and delete them.
                </Card.Text>
            </Card.Body>
            <Card.Body>
              <Button href="https://github.com/mahoward2s/Burger" variant="primary">GitHub</Button>
              <Button href="https://limitless-eyrie-37289.herokuapp.com/" variant="info">Launch</Button>
            </Card.Body>
          </Card>
        </Row>
        <Row className="justify-content-center">
          <Card
            className="text-center"
            bg="warning"
            border="dark"
            style={{ width: '40rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Matt's Quiz</Card.Title>
              <Card.Text>
              This is a study tool for users to test their knowledge of JavaScript. It is a timed quiz that provides multiple questions and if they answer correctly it will go to the next question. If a user answers incorrectly there is a time penalty. Try it out and see if you can get the highest score or beat your own personal best. High Score stores on local storage so the user can see who holds the highest score or look at their own records.
                </Card.Text>
            </Card.Body>
            <Card.Body>
              <Button href="https://github.com/mahoward2s/Timed-Code-Quiz" variant="primary">GitHub</Button>
              <Button href="https://mahoward2s.github.io/Timed-Code-Quiz/" variant="info">Launch</Button>
            </Card.Body>
          </Card>
        </Row>
        <Row className="justify-content-center">
        <Card
            className="text-center"
            bg="warning"
            border="dark"
            style={{ width: '40rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Five Day Forecast</Card.Title>
              <Card.Text>
              This application allows a user to search cities around the world to see the current weather. It also provides the customer with a 5 day forecast of the city. The city is stored on the local storage to allow users to reselect the city they searched to get an updated forecast. Users are able to clear out the entire search field. It provides wind, uv index, humidity, and temperature for the user.
                </Card.Text>
            </Card.Body>
            <Card.Body>
              <Button href="https://github.com/mahoward2s/Five-Day-Forecast" variant="primary">GitHub</Button>
              <Button href="https://mahoward2s.github.io/Five-Day-Forecast/" variant="info">Launch</Button>
            </Card.Body>
          </Card>
        </Row>
        <Row className="justify-content-center">
        <Card
            className="text-center"
            bg="warning"
            border="dark"
            style={{ width: '40rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Daily Work Planner</Card.Title>
              <Card.Text>
              This applications provides the user with a a daily work planner. At the top of the application it provides the user with the date and time. Users are able to add different meetings, lunch dates, and other activities in their planner to keep track. As the day progresses the planner will turn gray informing the customer it has passed, red is during the present and is occuring right now, and green are future events still to come. Activities are stored on local storage.
                </Card.Text>
            </Card.Body>
            <Card.Body>
              <Button href="https://github.com/mahoward2s/My-Daily-Work-Planner" variant="primary">GitHub</Button>
              <Button href="https://mahoward2s.github.io/My-Daily-Work-Planner/" variant="info">Launch</Button>
            </Card.Body>
          </Card>
        </Row>
        <Row className="justify-content-center">
        <Card
            className="text-center"
            bg="warning"
            border="dark"
            style={{ width: '40rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Password Generator</Card.Title>
              <Card.Text>
              This application allows a user to generator a random password. When the application is launched it alerts the user with multiple prompts to outline the criteria of the password. Users are initially prompted with the length of the password, then they are prompted with specific characters they would like in the password (lowercase, uppercase, numbers, and special characters).
                </Card.Text>
            </Card.Body>
            <Card.Body>
              <Button href="ttps://github.com/mahoward2s/Password-Generator" variant="primary">GitHub</Button>
              <Button href="https://mahoward2s.github.io/Password-Generator/" variant="info">Launch</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default Applications;
