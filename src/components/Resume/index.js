import React from 'react';
import { Container, Row, ListGroup } from 'react-bootstrap';

const Resume = () => {

    const skills = [
        'Coordinating with and planning projects with a team',
        'Learning new technologies',
        'HTML, CSS',
        'JavaScript, Web APIs, ES5 and ES6',
        'Git, GitHub, and remote team collaboration',
        'Node.js and Express.js',
        'MySQL and MongoDB databases',
        'Sequelize.js and Mongoose.js ORMs',
        'Handlebars.js and React.js front-end frameworks',
        'The MERN development stack',
        'Progressive Web Applications'
    ];

    return (
        <Container className='Resume Page shadow'>
            <Row>
                <div>
                    <h3>Skills</h3>
                </div>
                <div>
                    <ListGroup>
                        {skills.map((skill, i) => {
                            return (
                                <ListGroup.Item key={`skill-${i}`}>
                                    {skill}
                                </ListGroup.Item>
                            );
                        })}
                        <ListGroup.Item>
                            <a href='https://docs.google.com/document/d/1Zx15jHTphS7Uiq7hflVXqC6PvVf_kr_0p9a2wdH1xhk/edit?usp=sharing'>Click here to see my full resume!</a>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </Row>
        </Container>
    );
};

export default Resume;