import React, { useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
const { Configuration, OpenAIApi } = require("openai");

const BlogTitles = ({ selectedBlogTitle, handleBlogTitleChange }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [blogTitles, setBlogTitles] = useState([]);

    const newKey = JSON.parse(window.localStorage.getItem('Contenti'));

    const configuration = new Configuration({
        apiKey: newKey
    });
    const openai = new OpenAIApi(configuration);

    const clearTitles = () => {
        setBlogTitles([]);
        console.log('titles cleared');
    };

    const handleGenerateArticle = () => {
        setIsLoading(true);
        console.log('openai = ', openai);
        console.log('blogTitle = ', selectedBlogTitle);
        const prompt = `Generate 10 unique, engaging, and creative blog titles about ${selectedBlogTitle}\n\n`;
        const model = 'text-davinci-003';
        const parameters = {
            prompt,
            model,
            max_tokens: 75,
            n: 10,
            temperature: 0.7,
            stop: '\n',
        };
        openai.createCompletion(parameters)
            .then(response => {
                const titles = response.choices.map(choice => choice.text.trim());
                setBlogTitles(titles);
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            });
    };

    console.log(openai);
    useEffect(() => {
        if (selectedBlogTitle) {
            console.info('console.info call = ', selectedBlogTitle);
            handleGenerateArticle();
        }
    }, [selectedBlogTitle]);

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
                    <div>
                        {blogTitles.length > 0 ? (
                            <ul>
                                {blogTitles.map((title) => (
                                    <li key={title}>
                                        <label htmlFor={title}>
                                            <input
                                                type="radio"
                                                value={title}
                                                checked={selectedBlogTitle === title}
                                                onChange={handleBlogTitleChange}
                                            />
                                            <span>{title}</span>
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <span>{isLoading ? 'Loading blog titles...' : 'Click "Generate Additional Titles" to get started.'}</span>
                        )}
                    </div>
                </Card.Body>
                <Card.Footer>
                    <div className='d-flex justify-content-between'>
                        <Button
                            className='btn btn;
