import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

const Settings = () => {
    const [input, setInput] = useState('');
    const [apiKey, setApiKey] = useState(input);

    const handleChange = ((event) => {
        setInput(event.target.value);
    });

    const handleClick = ((event) => {
        event.preventDefault();
        setApiKey(input);
        console.log('My api key is ', apiKey);
    });


    return (
        <>
            <h1 className='text-center'>Settings</h1>
            <Container className='mt-5 p-4 border border-2 border-success rounded' >
                <Form className='mt-3 p-3 border border-primary rounded'>
                    <h3 className='text-center'>Input Your OpenAI API Key Below</h3>
                    <Form.Group className="my-5" controlId="formApiKey">
                        <Form.Label>OpenAI API Key</Form.Label>
                        <Form.Control type="text"
                            placeholder="Enter API Key"
                            value={input}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <div className='d-flex justify-content-end'>
                        <Button
                            className='btn btn-sm btn-outline-dark text-white'
                            type='submit'
                            onClick={handleClick}
                        >
                            Add API Key
                        </Button>
                    </div>
                </Form>
            </Container>
        </>
    );
};

export default Settings;