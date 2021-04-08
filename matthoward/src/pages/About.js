import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function About() {
    return (
        <div>
            <Container>
                <Row className="justify-content-center">
                    <h1>About Me</h1>
                </Row>
                <Row>
                    <Col>
                    <Image src="images/IMG_Seattle.jpeg" fluid />
                    </Col>
                    <Col>
                    <p>
                    My name is Matthew Howard and I am a St. Louis native who is a certified Full Stack Web Developer from Washington University-St. Louis. I have an undergraduate degree in Biology with an Emphasis in Biomedical Science and a Masters in Science Education. I have plenty of experience working independtly on projects as well as collaborating on teams. My experience also includes leading and managing projects and researching and analyzing items.  With my art background, I can bring a creative flair to any task required.
                    </p>
                    <p>
                    My hobbies include collecting sports memorabilia, traveling, hiking, rock climbing, playing bass guitar, painting/drawing, and just overall creating things.
                    </p>
                    <p>
                    I am a huge sports fan from Hockey to Wrestling and everything inbetween. One of my goals is to combine my love of sports and love of travel to see the St. Louis Blues play hockey in every NHL arena.  I’ve had the opportunity to visit 7 arenas so far.  As an avid traveler, I’ve had the opportunity to visit many states as well as the country of Spain.  Spain was an amazing experience that made me fall in love with the country.
                    </p>
                    <il>You can check me out on Social Media:</il>
                    <ul>Instagram: <a href="https://www.instagram.com/depression.art.inc" target="_blank"> Art </a></ul>
                    <ul>Instagram:<a href="https://www.instagram.com/bluescollector2.0" target="_blank"> Sports </a></ul>
                    <ul>Instagram:<a href="https://www.instagram.com/mhlth282" target="_blank"> Personal </a></ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;

