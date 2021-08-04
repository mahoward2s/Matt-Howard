import React from "react";
import { Container, Row, Carousel, } from 'react-bootstrap';

function PersonalProjects() {
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <h1>Personal Projects</h1>
        </Row>
        <Row className="justify-content-center">
          <h1>Graphic Design</h1>
        </Row>
        <Row className="justify-content-center">
          <Carousel fade>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=First slide&bg=373940"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=282c34"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row className="justify-content-center">
          <h1>File Maker-Coming Soon</h1>
        </Row>
        <Row className="justify-content-center">
          <h1>Websites-Coming Soon</h1>
        </Row>
        <Row className="justify-content-center">
          <h1>Applications-Coming Soon</h1>
        </Row>
        <Row className="justify-content-center">
          <h1>WordPress-Coming Soon</h1>
        </Row>
      </Container>
    </div>
  );
}

export default PersonalProjects;