import { ResetTv } from '@mui/icons-material';
import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

const Settings = ({ callback }) => {

    const [apiKey, setApiKey] = useState('');

    const handleChange = ((event) => {
        setApiKey(event.target.value);
    });

    const handleClick = ((event) => {
        event.preventDefault();
        setApiKey(apiKey);
        console.log('My api key is ', apiKey);
        
    });

    const state = {
        key: apiKey
    };

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
                            value={apiKey}
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