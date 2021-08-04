import React from "react";
import { Container, Row, Carousel, } from 'react-bootstrap';

function PersonalProjects() {
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <h1>Graphic Design</h1>
        </Row>
        <Row className="justify-content-center">
          <Carousel>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100"
                src="images/O'reilly 2020 Allstar Nameplate.png"
                alt="Oreilly Nameplate"
              />
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100"
                src="images/HUBERDEAU 2020 Allstar Nameplate.png"
                alt="Hubderdeau Nameplate"
              />
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100"
                src="images/Panarin Nameplate.png"
                alt="Panarin Nameplate"
              />
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100"
                src="images/Perron Winter Classic Nameplate.png"
                alt="Perron Nameplate"
              />
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100"
                src="images/Bozak SCF Nameplate.png"
                alt="Bozak Nameplate"
              />
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100"
                src="images/Schenn Stadium SeriesNameplate.png"
                alt="Schenn Stadium Series Nameplate"
              />
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100"
                src="images/Retro Blais Nameplate.png"
                alt="Blais Retro Nameplate"
              />
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100"
                src="images/Blais Nameplate.png"
                alt="Blais Nameplate"
              />
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100"
                src="images/Sobotka Nameplate.png"
                alt="Sobotka Nameplate"
              />
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100"
                src="images/Krug Bubble Nameplate.png"
                alt="Krug Bubble Nameplate"
              />
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100"
                src="images/Porter 38 Nameplate.png"
                alt="Porter 38 Nameplate"
              />
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row className="justify-content-center">
          <img
            src="images/Six Crosses.png"
            alt="Six Crosses Business Card Logo"
            style={{ 
              width: '25rem',
              padding: '15px'
            }}
          />
          <img
            src="images/Six Cross Design Logo.png"
            alt="Six Cross Design Logo"
            style={{ 
              width: '25rem',
              padding: '15px'
          }}
          />
          <img
            className="d-block w-100"
            src="images/Six Cross Vault.png"
            alt="Six Cross Vault Landing Page"
          />
        </Row>
        <Row className="justify-content-center">
          <h3>File Maker-Coming Soon</h3>
        </Row>
        <Row className="justify-content-center">
          <h3>Websites-Coming Soon</h3>
        </Row>
        <Row className="justify-content-center">
          <h3>Applications-Coming Soon</h3>
        </Row>
        <Row className="justify-content-center">
          <h3>WordPress-Coming Soon</h3>
        </Row>
      </Container>
    </div>
  );
}

export default PersonalProjects;