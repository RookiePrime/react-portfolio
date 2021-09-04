import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Navigation from '../Navigation';

const Header = (props) => {
    const {
        pageSelected, 
        setPageSelected
    } = props;

    return (
        <Container className='Header'>
            <Row>
                <h1>Kiefer's Portfolio</h1>
            </Row>
            <Row>
                <Navigation
                    pageSelected={pageSelected}
                    setPageSelected={setPageSelected}
                />
            </Row>
        </Container>
    );
};

export default Header;