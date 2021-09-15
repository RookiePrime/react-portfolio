import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import GhLogo from '../../assets/images/link_logos/GitHub-Mark-64px.png';
import LiLogo from '../../assets/images/link_logos/LI-In-Bug.png';
import FbLogo from '../../assets/images/link_logos/f_logo_RGB-Blue_58.png';

const Footer = () => {

    const imageLinksArr = [
        {
            image: GhLogo,
            link: 'https://github.com/RookiePrime',
            alt: 'The GitHub Octocat logo'
        },
        {
            image: LiLogo,
            link: 'https://www.linkedin.com/in/kiefer-levine/',
            alt: 'The LinkedIn logo'
        },
        {
            image: FbLogo,
            link: 'https://www.facebook.com/profile.php?id=100002973256310',
            alt: 'The Facebook logo'
        }
    ];

    return (
        <Container className='Footer d-flex align-items-center'>
            <Row className='d-flex align-items-center justify-content-evenly'>
                {imageLinksArr.map((obj, i) => {
                    return (
                        <Col xs={2} s={3} md={1} key={`link-${i}`}>
                            <a href={obj.link}>
                                <Image src={obj.image} alt={obj.alt} />
                            </a>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default Footer;