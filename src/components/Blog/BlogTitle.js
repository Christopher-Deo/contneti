import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';
import openai from 'openai';


const BlogTitle = (props) => {
    const [blogTitles, setBlogTitles] = useState([]);
const loadMessage = "Loading Blog Titles..."
    //making the api call to the AI model
    const useGetTitles = () => {
        useEffect(() => {
            async function generateBlogTitles() {
                const openaiApiKey = props.data;
                const prompt = `Generate 10 blog titles on ${props.topic}`;
                const completions = await openai.completions.create({
                    engine: 'davinci',
                    prompt,
                    max_tokens: 60,
                    n: 10,
                    stop: '\n',
                    temperature: 0.5,
                }, { apiKey: openaiApiKey });
                const titles = completions.choices.map((c) => c.text.trim());
                setBlogTitles(titles);
            }
            generateBlogTitles();
        }, [props.topic]);
    };

    const clearTitles = () => {
        setBlogTitles([])
    }



    return (
        <>

            <h2 className='mt-3 text-center'>Blog Title Suggestions</h2>
            <Card className="mt-3 border border-2 border-primary">
                <Card.Body>
                    <Card.Title
                        className='mt-1 text-center border border-1 border-danger rounded'>
                        Blog Titles
                    </Card.Title>
                    <Form.Text className='text-muted'>
                        Select title suggestion to generate blog post
                    </Form.Text>
                    <Card.Text>
                        <div>
                            {blogTitles.length > 0 ? (
                                <ul>
                                    {blogTitles.map((title) => {
                                        <li key={title}>
                                            {title}
                                        </li>;
                                    })}
                                </ul>
                            ) : (
                                <p>Loading blog titles...</p>
                            )}
                        </div>
                    </Card.Text>
                </Card.Body>
                <Card.Footer >
                    <div className='d-flex justify-content-between'>
                        <Button
                            className='btn btn-danger btn-sm btn-outline-dark text-white'
                            type='button'
                            onClick={clearTitles}
                        >
                            Clear Titles
                        </Button>
                        <Button
                            className='btn btn-sm btn-outline-dark text-white'
                            variant='primary'
                            onClick={useGetTitles}
                        >
                            Generate Additional Titles</Button>
                    </div>
                </Card.Footer>
            </Card>

        </>
    );
};

export default BlogTitle;