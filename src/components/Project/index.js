import React from 'react';
import { Card } from 'react-bootstrap';

const Project = ({ title, image, liveLink, repoLink }) => {
    return (
        <Card className="Project shadow m-2">
            <Card.Img src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <Card.Link href={liveLink}>Try the app!</Card.Link>
                    <br />
                    <Card.Link href={repoLink}>See the repo!</Card.Link>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Project;