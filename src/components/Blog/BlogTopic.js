import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';



const BlogTopic = (props) => {
    const [topic, setTopic] = useState('');

    const addTopic = (event) => {
        event.preventDefault();
        props.setSelectedBlogTitle(topic);
        console.log('blog topic is ', event);
    };

    const resetTopic = () => {
        setTopic('');
        console.log('topic cleared');
    };

    useEffect(() => {
        console.log('selected blog title = ', props.selectedBlogTitle);
    });

    console.log(`the blog topic is ${topic}`);
    return (
        <>
            <h2 className='mt-2 text-center'>Blog Post Title Generator</h2>
            <p className='text-center'>Enter a topic into the form. Click "submit" to generate 10 blog title ideas</p>
            <Form
                className='border border-2 border-primary rounded p-3'
                onSubmit={addTopic}
            >
                <Form.Group
                    className="mb-3"
                    controlId="formTopic"
                >
                    <Form.Label>
                        Enter a topic
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Topic"
                        onChange={(e) => setTopic(e.target.value)}
                        value={topic}

                    >
                    </Form.Control>
                </Form.Group>
                <div
                    className='d-flex justify-content-between'
                >
                    <Button
                        className='btn btn-danger btn-sm btn-outline-dark text-white'
                        type='button'
                        onClick={resetTopic}
                    >
                        Reset Topic
                    </Button>
                    <Button
                        className='btn btn-sm btn-outline-dark text-white'
                        type="submit"
                    >
                        Get Ideas
                    </Button>
                </div>
            </Form>
        </>
    );
};

export default BlogTopic;
