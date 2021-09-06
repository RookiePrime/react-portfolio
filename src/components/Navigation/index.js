import React from 'react';
import { Nav } from 'react-bootstrap'

const Navigation = props => {
    const {
        pageSelected,
        setPageSelected
    } = props;

    const navlinks = [
        {
            text: 'About Me',
            eventKey: 'about'
        },
        {
            text: 'Portfolio',
            eventKey: 'portfolio'
        },
        {
            text: 'Contact',
            eventKey: 'contact'
        },
        {
            text: 'Resume',
            eventKey: 'resume'
        },
    ];

    function handlePageSelect(e) {
        // Gets the eventKey of the chosen nav item.
        const selectedPage = e.target.dataset.rbEventKey;
        // Sets the state, telling the app what content to show and how to change the appearance of what we're looking at.
        selectedPage && setPageSelected(selectedPage);
    };

    return (
        <Nav className='Navigation' onClick={handlePageSelect}>
            {navlinks.map((navlink, i) => (
                <Nav.Item key={i} className={`nav ${pageSelected === navlink.eventKey && 'selected'}`}>
                    <Nav.Link eventKey={navlink.eventKey}>{navlink.text}</Nav.Link>
                </Nav.Item>
            ))}
        </Nav>
    );
};

export default Navigation;