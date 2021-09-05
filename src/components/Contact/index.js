import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import validateEmail from '../../utils/helpers';

const Contact = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    const handleChange = e => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
        
            !isValid ? 
            setErrorMessage('Email address invalid.') : 
            setErrorMessage('');
        } else {
            !e.target.value.length ?
            setErrorMessage(`The ${e.target.name} field is required.`) :
            setErrorMessage('');
        }
        !errorMessage && setFormState({...formState, [e.target.name]: e.target.value });
    };

    return (
        <Container className='Contact'>
            <Form>
                <h2>Contact Me!</h2>
                <Form.Group controlId='formBasicName'>
                    <Form.Label>Enter your name</Form.Label>
                    <Form.Control type='name' name='name' placeholder='Your name goes here!' defaultValue={name} onBlur={handleChange} />
                </Form.Group>
                <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type='email' name='email' placeholder='something@some.com' defaultValue={email} onBlur={handleChange} />
                </Form.Group>
                <Form.Group controlId='formBasicMessage'>
                    <Form.Label>Enter your message</Form.Label>
                    <Form.Control as='textarea' name='message' rows={5} defaultValue={message} onBlur={handleChange} />
                </Form.Group>
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
                <Button type='submit' onClick={e => { e.preventDefault() }}>Submit</Button>
            </Form>
        </Container>
    );
};

export default Contact;