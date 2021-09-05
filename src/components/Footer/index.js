import React from 'react';
import { Container, Image } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container className='Footer d-flex justify-content-evenly align-items-center'>
            <a href='https://github.com/RookiePrime'> 
                <Image src='./assets/images/GitHub-Mark-64px.png' roundedCircle />
            </a>
            <a href='https://www.linkedin.com/in/kiefer-levine-38844920b/'>
                <Image src='./assets/images/Li-In-Bug.png' />
            </a>
            <a href='https://www.facebook.com/profile.php?id=100002973256310'>
                <Image src='./assets/images/f_logo_RGB-blue_58.png' />
            </a>
        </Container>
    );
};

export default Footer;