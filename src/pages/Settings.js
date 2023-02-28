import React, { useState } from 'react';
import { useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Settings = (props) => {
    const [localApiKey, setLocalApiKey] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

   

    const handleChange = (event) => {
        console.log(`local api key value: ${event.target.value}`);
        setLocalApiKey(event.target.value);
    };

    const addKey = (event) => {
        event.preventDefault();
        console.log(`app level api key is: ${localApiKey}`);
        props.setApiKey(localApiKey);
    };

    useEffect(() => {
        if (props.data && props.data !== "") {
            setIsButtonDisabled(true);
        }
    }, [props.data]);

    
    return (
        <>
            <h1 className='text-center'>Settings</h1>
            <Container className='mt-5 p-4 border border-2 border-success rounded' >
                <Form
                    className='mt-3 p-3 border border-primary rounded'
                    onSubmit={addKey}
                >
                    <h3 className='text-center'>Input Your OpenAI API Key Below</h3>
                    <Form.Group className="my-5" controlId="formApiKey">
                        <Form.Label>OpenAI API Key</Form.Label>
                        <Form.Control type="text"
                            placeholder="Enter API Key"
                            value={props.apiKey || localApiKey}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <div className='d-flex justify-content-end'>
                        <Button
                            className='btn btn-sm btn-outline-dark text-dark'
                            type='submit'
                            disabled={isButtonDisabled}
                        >
                            {isButtonDisabled ? 'Enter Your Key' : 'Valid Key Entered'}
                        </Button>
                    </div>
                </Form>
            </Container>
        </>
    );
};

export default Settings;