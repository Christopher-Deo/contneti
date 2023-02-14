import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


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
        <section className='mx-5 my-5'>
            <h1 className='text-center mt-3'>Settings</h1>

            <Form className='mt-3'>
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
        </section>
    );
};

export default Settings;