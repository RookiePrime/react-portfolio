import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container className='Contact'>
            <Form>
                <h2>Contact Me!</h2>
                <Form.Group controlId='formBasicName'>
                    <Form.Label>Enter your name</Form.Label>
                    <Form.Control type='name' placeholder='Your name goes here!' />
                </Form.Group>
                <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type='email' placeholder='something@some.com' />
                </Form.Group>
                <Form.Group controlId='formBasicMessage'>
                    <Form.Label>Enter your message</Form.Label>
                    <Form.Control as='textarea' rows={3} />
                </Form.Group>
                <Button variant='primary' type='submit' onClick={e => { e.preventDefault() }}>Submit</Button>
            </Form>
        </Container>
    );
};

export default Contact;