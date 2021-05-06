import React from "react";

import { Container, Row, Col, Image} from 'react-bootstrap';

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
                    My name is Matthew Howard and I am a St. Louis native who is a full Stack Web Developer with a background in Science and Science Education.  I recently earned a certificate in Full Stack Web Development from Washington University-St. Louis, where I developed skills in JavaScript, CSS, React.js, responsive web design, and many more. 
                    </p>
                    <p>
                    I am effective at utilizing skills and experience to problem solve and create user-appealing applications.  I have a reputation for learning quickly and using detail orientated and ‘out of the box’ thinking to attack and resolve complex problems and projects.
                    </p>
                    <p>
                    With each project, I aim to engage the user and create a meaningful user experience with mobile first development approach.  I worked on a team to develop a MERN application which enables users to search for local breweries, allowing for ease of use when travelling or exploring the areas around their living situation. 
                    </p>
                    <p>
                    I have an undergraduate degree in Biology with an Emphasis in Biomedical Science and a Masters in Science Education.  I have plenty of experience working independently on projects as well as collaborating on teams.  My experience also includes leading and managing project; and researching and analyzing items.  With my art background, I can bring a creative flair to any task required. 
                    </p>
                    <p>
                    When I am not designing or developing, I enjoy collecting sports memorabilia, traveling, hiking, rock climbing, playing bass guitar, painting/drawing, and just overall creating things.
                    </p>
                    <p>
                    I am a huge sports fan from hockey to wrestling and everything in between.  One of my goals is to combine my love of sports and love of travel to see the St. Louis Blues play hockey in every NHL arena.  I’ve had the opportunity to visit 7 arenas so far.  As an avid traveler, I’ve had the opportunity to visit many states as well as the country of Spain.
                    </p>
                    <p>
                    I’m excited to leverage my skills as part of a fast-paced, quality driven team.  Reach out to me to chat about our next project!
                    </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;

