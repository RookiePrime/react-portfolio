import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Project from '../Project';

const Portfolio = () => {

    const projectsArr = [
        {
            title: 'Tarokka Deck',
            image: '/assets/images/project_previews/tarokka.png',
            liveLink: 'https://rookieprime.github.io/tarokka-deck/',
            repoLink: 'https://github.com/RookiePrime/tarokka-deck'
        },
        {
            title: 'PokeCards',
            image: '/assets/images/project_previews/pokecards.png',
            liveLink: 'https://rookieprime.github.io/Juno-JS-Project-2/',
            repoLink: 'https://github.com/RookiePrime/Juno-JS-Project-2'
        },
        {
            title: 'Bardic',
            image: '/assets/images/project_previews/bardic.png',
            liveLink: 'https://bardic.herokuapp.com/',
            repoLink: 'https://github.com/FanCinco/Bardic'
        },
        {
            title: 'Crunch Time',
            image: '/assets/images/project_previews/crunchtime.png',
            liveLink: 'https://crunchteam04.github.io/Crunch-Time/',
            repoLink: 'https://github.com/crunchteam04/Crunch-Time'
        },
        {
            title: 'Tech Blog',
            image: '/assets/images/project_previews/techblog.png',
            liveLink: 'https://still-headland-68938.herokuapp.com/',
            repoLink: 'https://github.com/RookiePrime/tech-blog'
        },
        {
            title: 'Weather Dashboard',
            image: '/assets/images/project_previews/weather.png',
            liveLink: 'https://rookieprime.github.io/weather-dashboard/',
            repoLink: 'https://github.com/RookiePrime/weather-dashboard'
        }
    ];

    return (
        <Container className='Portfolio Page shadow'>
            <Row>
                {projectsArr.map((project, i) => {
                    return (
                        <Col xs={6} md={4} lg={3} xl={2} key={`card-${i}`}>
                            <Project
                                title={project.title}
                                image={project.image}
                                liveLink={project.liveLink}
                                repoLink={project.repoLink}
                            />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default Portfolio;