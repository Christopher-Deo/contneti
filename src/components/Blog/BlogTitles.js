import React, { useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import uuidv4 from 'react-uuid';
const { Configuration, OpenAIApi } = require("openai");



const BlogTitles = ({ selectedBlogTitle, handleBlogTitleChange }) => {
    
    const [isLoading, setIsLoading] = useState(false);
    const [blogTitles, setBlogTitles] = useState([]);

    const newKey = JSON.parse(window.localStorage.getItem('Contenti'));
   
    const clearTitles = () => {
        setBlogTitles([]);
        console.log('titles cleared');
    };

    const configuration = new Configuration({
        apiKey: newKey,
        basePath: 'https://api.openai.com/v1',
    });

    const axiosInstance = axios.create({
        baseURL: 'https://api.openai.com/v1',
    });
   
    // const openai = new OpenAIApi(configuration, undefined, axiosInstance);
   
    const generateTitles = async () => {
        setIsLoading(true);
        console.log('blogTitle = ', selectedBlogTitle);
        const prompt = `Generate ten unique, distinct, & engaging, and creative blog titles about ${selectedBlogTitle}\n\n`;
        const model = 'text-davinci-003';

        const requestBody = {
            prompt: prompt,
            temperature: 0.1,
            max_tokens: 2048,
            n: 5,
            temperature: 0.7,
            top_p: 0.9,
            frequency_penalty: 0,
            presence_penalty: 0.0,
            stop: ['\n'],
        };

        const requestConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${newKey}`,
            },
        };

        axios.post(`https://api.openai.com/v1/engines/${model}/completions`, requestBody, requestConfig)
            .then(response => {
                if (response.data && response.data.choices) {
                    const titles = response.data.choices.map(choice => choice.text.trim());
                    setBlogTitles(titles);
                    console.log('titles = ', titles);
                    // console.log('openAI response = ', response.data);
                }
                setIsLoading(false);
                // console.log(response.data);
                console.log(response.data.choices[0].text);
                console.log(response.data.choices[1].text);
                console.log(response.data.choices[2].text);
                console.log(response.data.choices[3].text);
                console.log(response.data.choices[4].text);
                // console.log(response.data.choices[5].text);
                // console.log(response.data.choices[6].text);
                // console.log(response.data.choices[7].text);
                // console.log(response.data.choices[8].text);
                // console.log(response.data.choices[9].text);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            });
    };
        

    useEffect(() => {
        if (selectedBlogTitle) {
            console.info('console.info call = ', selectedBlogTitle);
            generateTitles();
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
                                    <li key={uuidv4()}>
                                        <label htmlFor={title}>
                                            <input
                                                type="radio"
                                                value={title}
                                                // checked={selectedBlogTitle === title}
                                                onChange={handleBlogTitleChange}
                                            />
                                            <span key={title}> {title}</span>
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
                            onClick={generateTitles}
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
