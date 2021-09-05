import React from 'react';
import { Container, Row, ListGroup } from 'react-bootstrap';

const Resume = () => {
    return (
        <Container className='Resume'>
            <Row>
                <h2>Resume</h2>
            </Row>
            <Row>
                <div>
                    <h3>Skills</h3>
                </div>
                <div>
                    <ListGroup>
                        <ListGroup.Item>Coordinating with and planning projects with a team</ListGroup.Item>
                        <ListGroup.Item>Learning new technologies</ListGroup.Item>
                        <ListGroup.Item>HTML, CSS</ListGroup.Item>
                    </ListGroup>
                </div>
            </Row>
        </Container>
    );
};

export default Resume;