import React from "react";
import { Image, Container, Row, Col } from 'react-bootstrap'


function Home() {
    return (
        <div>
            <Container>
                <Row className="justify-content-center">
                    <h1>Where Science and Art Intertwine</h1>
                </Row>
                <Row>
                    <Col>
                        <Image src={process.env.PUBLIC_URL + "/images/IMG_Coding.jpg"} fluid />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;