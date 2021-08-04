import React from "react";
import { Image, Container, Row, Col } from 'react-bootstrap'


function Home() {
    return (
        <div>
            <Container>
{/*                 <Row className="justify-content-center">
                    <h1>Where Science and Art Intertwine</h1>
                </Row>
                <Row>
                    <Col>
                        <Image src={process.env.PUBLIC_URL + "/images/IMG_Coding.jpg"} fluid />
                    </Col>
                </Row>
                <Row className="justify-content-center">
                <h1>To Design The Future</h1>
                </Row> */}
                <Row className="justify-content-center">
                    <Image
                    src={process.env.PUBLIC_URL + "/images/HomePage Animated.gif"}
                    style={{
                        height: '100vh',
                        width: '100vw',
                        margin: '0',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        position: 'absolute'
                    }}
                    />
                </Row>
            </Container>
        </div>
    );
}

export default Home;