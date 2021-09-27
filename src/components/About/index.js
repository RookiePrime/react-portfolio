import React from 'react';
import { Container, Col, Image, Row } from 'react-bootstrap';
import me from '../../assets/images/me.png'

const About = () => {
    return (
        <Container className='About Page shadow'>
            <Row>
                <h2>About Me</h2>
            </Row>
            <Row>
                <Col md={6}>
                    <Image src={me} alt='A picture of myself.' />
                </Col>
                <Col md={6}>
                    <p>A back-end web developer with a problem-solving mind, interested in making the unlikely work and the likely work better. Recently earned a certificate in full stack web development from the University of Toronto, having developed skills using HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, React.js and responsive web design. I have been told by collaborators that I get things done. I worked in a team of five to develop a travel-oriented social app making use of a MySQL back-end, to create a hub for people to tell their travel stories. As an eager learner and natural “helper”, I am excited to use my technical skills and collaborative nature to write cleaner code, identify errors, and help your team continue to develop innovative, exciting work.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default About;