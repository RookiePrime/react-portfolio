import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Project from '../Project';

import tarokkaPrev from '../../assets/images/project_previews/tarokka.png';
import pokecardsPrev from '../../assets/images/project_previews/pokecards.png';
import bardicPrev from '../../assets/images/project_previews/bardic.png';
import crunchTimePrev from '../../assets/images/project_previews/crunchtime.png';
import techblogPrev from '../../assets/images/project_previews/techblog.png';
import weatherPrev from '../../assets/images/project_previews/weather.png';
import crazyPrev from '../../assets/images/project_previews/crazy-tetris.png'

const Portfolio = () => {

    const projectsArr = [
        {
            title: 'Crazy Tetrominos',
            image: crazyPrev,
            liveLink: 'https://crazy-tetrominos.herokuapp.com/',
            repoLink: 'https://github.com/RookiePrime/crazy-tetris'
        },
        {
            title: 'Tarokka Deck',
            image: tarokkaPrev,
            liveLink: 'https://rookieprime.github.io/tarokka-deck/',
            repoLink: 'https://github.com/RookiePrime/tarokka-deck'
        },
        {
            title: 'PokeCards',
            image: pokecardsPrev,
            liveLink: 'https://rookieprime.github.io/Juno-JS-Project-2/',
            repoLink: 'https://github.com/RookiePrime/Juno-JS-Project-2'
        },
        {
            title: 'Bardic',
            image: bardicPrev,
            liveLink: 'https://bardic.herokuapp.com/',
            repoLink: 'https://github.com/FanCinco/Bardic'
        },
        {
            title: 'Crunch Time',
            image: crunchTimePrev,
            liveLink: 'https://crunchteam04.github.io/Crunch-Time/',
            repoLink: 'https://github.com/crunchteam04/Crunch-Time'
        },
        {
            title: 'Tech Blog',
            image: techblogPrev,
            liveLink: 'https://still-headland-68938.herokuapp.com/',
            repoLink: 'https://github.com/RookiePrime/tech-blog'
        },
        {
            title: 'Weather Dashboard',
            image: weatherPrev,
            liveLink: 'https://rookieprime.github.io/weather-dashboard/',
            repoLink: 'https://github.com/RookiePrime/weather-dashboard'
        },
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