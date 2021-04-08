import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
            style={{ width: '40rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>Matthew Howard</Card.Title>
              <Card.Text>
                Feel Free To Reach Out Anytime.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Profiles:</ListGroupItem>
              <ListGroupItem>
                <Button
                  href="https://github.com/mahoward2s"
                  target="_blank"
                  variant="primary">GitHub</Button>
                <Button
                  href="https://www.linkedin.com/in/matthew-h-974498108/"
                  target="_blank"
                  variant="info">LinkedIn</Button>
              </ListGroupItem>
              <ListGroupItem>Contact:</ListGroupItem>
              <ListGroupItem>
                <Button
                  href="mailto:<nowiki>mahoward2s@gmail.com?subject=' Contact From Portfolio'"
                  target="_blank"
                  variant="primary">Email</Button>
                <Button href="tel:3146245710"
                  variant="info">Phone</Button>
              </ListGroupItem>
              <ListGroupItem>Resume:</ListGroupItem>
              <ListGroupItem>
                <Button
                  href="https://docs.google.com/document/d/1PRWn6gj7CNjXeJ8znhUkrbMLis3eGa6DaqXzQsRpPe0/edit?usp=sharing" variant="primary">Google Doc</Button>
                <Button
                  variant="info"
                  href="./public/images/Matt_Howard_Resume.pdf"
                  target="_blank" class="btn btn-warning"
                  download><i
                    class="fa fa-download"></i>PDF</Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
