import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { Container, Form, Button } from 'react-bootstrap';
import { actions } from "../redux/apiSlice";


const Settings = (props) => {
    const [input, setInput] = useState('');
    const [apiKey, setApiKey] = useState(input);
    const dispatch = useDispatch();


    const handleChange = ((event) => {
        setInput(event.target.value);
    });

    const handleClick = ((event) => {
        event.preventDefault();
        setApiKey(input);

        console.log('My api key is ', apiKey);
    });

    useEffect(() => {
        console.log('props ', props);
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
                    type='button'
                    variant='warning'
                    onClick={() => actions.setValue(
                        { payload: input }
                    )}
                >
                    Add API Key
                </Button>
            </Form>
        </Container>
    );
};
const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        apiKey: state.apiKey
    };
};

export default connect(mapStateToProps)(Settings);