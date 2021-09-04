import React from 'react';
import { Nav } from 'react-bootstrap'

const Navigation = props => {
    const {
        pageSelected,
        setPageSelected
    } = props;

    function handlePageSelect(e) {
        console.log(e);
        alert('clicked me', e)
    };

    return (
        <Nav className='Navigation'>
            <Nav.Item>
                <Nav.Link eventKey='about'>About Me</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey='portfolio'>Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey='contact-me' onClick={handlePageSelect}>Contact Me</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey='resume'>Resume</Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default Navigation;