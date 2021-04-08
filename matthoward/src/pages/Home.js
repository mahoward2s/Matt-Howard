import React from "react";
import Image from 'react-bootstrap/Image'
import Container from "../components/Container";
import Row from "../components/Row";


function Home () {
    return (
        <div>
            <Container>
                <Row>
                    <h1>Where Science and Art Intertwine</h1>
                </Row>
                <Row>
                <Image src="holder.js/100px250" fluid />
                </Row>
            </Container>
        </div>
    );
}

export default Home;