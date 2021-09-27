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
            repoLink: 'https://github.com/RookiePrime/crazy-tetris',
            description: 'A new take on classic Tetris! Test your skills against strange blocks!'
        },
        {
            title: 'Tarokka Deck',
            image: tarokkaPrev,
            liveLink: 'https://rookieprime.github.io/tarokka-deck/',
            repoLink: 'https://github.com/RookiePrime/tarokka-deck',
            description: 'Does the Dungeons & Dragons world of Ravenloft capture your imagination? Use this page to enact fortune-telling with the power of a tarokka deck!'
        },
        {
            title: 'PokeCards',
            image: pokecardsPrev,
            liveLink: 'https://rookieprime.github.io/Juno-JS-Project-2/',
            repoLink: 'https://github.com/RookiePrime/Juno-JS-Project-2',
            description: 'Want to see a fun pokemon card? Click the generate button or type in a name first, and watch the card fall onto the page!'
        },
        {
            title: 'Bardic',
            image: bardicPrev,
            liveLink: 'https://bardic.herokuapp.com/',
            repoLink: 'https://github.com/FanCinco/Bardic',
            description: 'Interested in seeing the world? Want to share your stories with other people? This is the place.'
        },
        {
            title: 'Crunch Time',
            image: crunchTimePrev,
            liveLink: 'https://crunchteam04.github.io/Crunch-Time/',
            repoLink: 'https://github.com/crunchteam04/Crunch-Time',
            description: "Want to exercise but don't have the time for it? Crunch Time has you covered!"
        },
        {
            title: 'Tech Blog',
            image: techblogPrev,
            liveLink: 'https://still-headland-68938.herokuapp.com/',
            repoLink: 'https://github.com/RookiePrime/tech-blog',
            description: 'Interested in discussing technology news and ideas with like-minded people? Search no more.'
        },
        {
            title: 'Weather Dashboard',
            image: weatherPrev,
            liveLink: 'https://rookieprime.github.io/weather-dashboard/',
            repoLink: 'https://github.com/RookiePrime/weather-dashboard',
            description: 'Just type the name of a city and see the 5-day forecast!'
        },
    ];

    return (
        <Container className='Portfolio Page shadow'>
            <Row>
                {projectsArr.map((project, i) => {
                    return (
                        <Col xs={10} md={6} lg={4} xl={3} key={`card-${i}`}>
                            <Project
                                title={project.title}
                                image={project.image}
                                liveLink={project.liveLink}
                                repoLink={project.repoLink}
                                description={project.description}
                            />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default Portfolio;