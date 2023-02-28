import React, { useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
const { Configuration, OpenAIApi } = require("openai");



const BlogTitles = (props) => {
    const newKey = window.localStorage.getItem('Contenti');

    const [isLoading, setIsLoading] = useState(false);
    const [blogTitles, setBlogTitles] = useState([]);

    const configuration = new Configuration({
        apiKey: newKey
    });
    const openai = new OpenAIApi(configuration);



    const handleTitleSelection = (logTitles) => { props.setBlogTitles([]); };
    const clearTitles = () => {
        props.setBlogTitles([]);
        console.log('titles cleared');
    };

    const handleGenerateArticle = () => {
        setIsLoading(true);
        console.log('openai = ', openai);
        // openai.apiKey = newKey;
        console.log('blogTitle = ', props.selectedBlogTitle);
        const prompt = `Generate 10 unique and engaging blog titles about ${props.selectedBlogTitle}\n\n`;
        const model = 'text-davinci-003';
        const parameters = {
            prompt,
            model,
            max_tokens: 50,
            n: 10,
            temperature: 0.7,
            stop: '\n',
        };
        openai.createCompletion(parameters)
            .then(response => {
                const titles = response.choices.map(choice => choice.text.trim());
                props.setBlogTitles(titles);
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            });
    };

    console.log(openai);
    useEffect(() => {
        console.info('console.info call = ', props.selectedBlogTitle);
        handleGenerateArticle();
    }, [props.selectedBlogTitle]);

    return (
        <>
            <h2 className='mt-3 text-center'>Blog Title Suggestions</h2>
            <Card className="mt-3 border border-2 border-primary">
                <Card.Body>
                    <Card.Title className='mt-1 text-center border border-1 border-danger rounded'>
                        Blog Titles
                    </Card.Title>
                    <Form.Text className='text-muted'>
                        Select title suggestion to generate blog post
                    </Form.Text>
                    <Card.Text>
                        {blogTitles.length > 0 ? (
                            <ul>
                                {blogTitles.map((title) => (
                                    <li key={title}>
                                        <label>
                                            <input
                                                type="radio"
                                                value={title}
                                            // checked={props.selectedBlogTitle === title}
                                            // onChange={props.handleBlogTitleChange}
                                            />
                                            <span>{title}</span>
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <span>{isLoading ? 'Loading blog titles...' : 'Click "Generate Additional Titles" to get started.'}</span>
                        )}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
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
                            disabled={isLoading}
                            onClick={handleGenerateArticle}
                        >
                            {isLoading ? 'Generating...' : 'Generate Additional Titles'}
                        </Button>
                    </div>
                </Card.Footer>
            </Card>
        </>
    );
};

export default BlogTitles;
