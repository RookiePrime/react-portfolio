import React from 'react';
import { Nav } from 'react-bootstrap'

const Navigation = () => {
    return (
        <Nav className='Navigation'>
            <Nav.Item>
                <Nav.Link href='/home'>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey='about-me'>About Me</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey='portfolio'>Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey='contact-me'>Contact Me</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey='resume'>Resume</Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default Navigation;