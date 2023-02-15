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
        <Container className='mt-5 p-4 border border-2 border-success rounded' >
            <h1 className='text-center'>Settings</h1>

            <Form className='mt-3 p-3 border border-primary rounded'>
                <Form.Group className="mb-3" controlId="formApiKey">
                    <Form.Label>OpenAI API Key</Form.Label>
                    <Form.Control type="text"
                        placeholder="Enter API Key"
                        value={input}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button
                    type='submit'
                    variant='warning'
                    onClick={handleClick}
                >
                    Add API Key
                </Button>
            </Form>
        </Container>
    );
};

export default Settings;