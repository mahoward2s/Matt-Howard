import React from "react";
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function Home () {
    return (
        <div>
            <Container>
                <Row className="justify-content-center">
                    <h1>Where Science and Art Intertwine</h1>
                </Row>
                <Row>
                <Image src="" fluid />
                </Row>
            </Container>
        </div>
    );
}

export default Home;