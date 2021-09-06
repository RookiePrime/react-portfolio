import React from 'react';
import { Container, Col, Image, Row } from 'react-bootstrap';

const About = () => {
    return (
        <Container className='About Page shadow-lg p-2'>
            <Row>
                <h2>About Me</h2>
            </Row>
            <Row>
                <Col md={6}>
                    <Image src='./assets/images/JPEG_Turaga.jpg' alt='A drawn cartoon avatar.' />
                </Col>
                <Col md={6}>
                    <p>I'm a budding web developer with training in the MERN stack, and ready to take on whatever technologies are thrown at me!</p>
                </Col>
            </Row>
        </Container>
    );
};

export default About;