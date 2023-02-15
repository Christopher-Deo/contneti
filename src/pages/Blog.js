import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Container, Button, Card } from 'react-bootstrap';
const { Configuration, OpenAIApi } = require("openai");

const Blog = (props) => {
  const [topic, setTopic] = useState("");
  const [keyword, setKeyword] = useState("");
  const [title, setTitle] = useState("");
  // const [blogPost, setBlogPost] = useState("");

  const generateTitle = async (props) => {
    const configuration = new Configuration({
      apiKey: '{ props.apiKey }'
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Generate 10 blog titles from ${topic} `,
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
      .then(
        (response) => {
          setTitle({
            heading: `Blog title suggestions for :`,  //(${formDataObj.productName})
            response: `${response.data.choices[0].text}`

          });
          console.log(title);
        }
      ).catch(error => {
        console.error('OpenAI error', error);
      });
  };

  const handleChange = ((event) => {
    setKeyword(event.target.value);
  });

  const handleClick = ((event) => {
    event.preventDefault();
    setTopic(keyword);

  });

  // "Create a form to input a keyword and use that keyword to generate a list of 10 blog titles  \n\nimport React, { useState } from 'react';\n\nconst GenerateBlogTitles = () => {\n  const [keyword, setKeyword] = useState('');\n  const [blogTitles, setBlogTitles] = useState([]);\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    // use keyword to generate list of 10 blog titles\n    setBlogTitles([\n      '10 Tips for Writing a Great Blog Post',\n      'The Benefits of Writing a Blog',\n      'How to Get Started Writing Blog Posts',\n      'Steps for Writing an Engaging Blog Post',\n      'The Pros and Cons of Writing Blogs',\n      'Creating a Blogging Routine that Works',\n      'Writing Tips for Bloggers',\n      'The Best Blogging Platforms for Beginners',\n      'How to Promote Your Blog Posts',\n      'The Ultimate Guide to Writing a Blog Post'\n    ]);\n  };\n\n  return (\n    <div>\n      <form onSubmit={handleSubmit}>\n        <label>\n          Enter a Keyword:\n          <input",
  return (
    <>
      <section className='mt-3'>
        <h1 className='my-3 text-center'>Blog Post Generator</h1>
        <Container className=' p-3 border border-2 border-success rounded'>
          <h2 className='mt-2 text-center'>Blog Post Title Generator</h2>
          <p className='text-center'>Enter a topic into the form. Click "submit" to generate 10 blog title ideas</p>
          <Form>
            <Form.Group className="mb-3" controlId="formTopic">
              <Form.Label>Enter a topic</Form.Label>
              <Form.Control
                type="text"
                placeholder="Topic"
                value={keyword}
                onChange={handleChange}
              >
              </Form.Control>
            </Form.Group>
            <Button
              type='submit'
              variant='warning'
              onClick={handleClick}
            >
              Get Ideas
            </Button>
          </Form>

          <h2 className='mt-5 text-center'>Blog Title Suggestions</h2>
          <Card className="mt-5 border border-2 border-primary">
            <Card.Body>
              <Card.Title
                className='mt-1 text-center border border-1 border-danger rounded'>
                Blog Titles
              </Card.Title>
              <Form.Text className='text-muted'>
                Select title suggestion to generate blog post
              </Form.Text>
              <Card.Text className='mt-3 border rounded px-2 py-2'>
                <input className="m-1" type="radio" aria-label="radio button for blog title selection" />
                Lorem ipsum dolor sit amet.
              </Card.Text>
              <Card.Text className='mt-3 border rounded px-2 py-2'>
                <input className="m-1" type="radio" aria-label="radio button for blog title selection" />
                Lorem ipsum dolor sit amet.
              </Card.Text>
              <Card.Text className='mt-3 border rounded px-2 py-2'>
                <input className="m-1" type="radio" aria-label="radio button for blog title selection" />
                Lorem ipsum dolor sit amet.
              </Card.Text>
            </Card.Body>
            <Card.Footer >
              <Button className='mt-2 btn-sm' variant='primary'>Generate Additional Titles</Button>
            </Card.Footer>
          </Card>
        </Container>
        <Container className='mt-3 p-3 border border-2 border-success rounded'>
          <h2 className='mt-1 text-center'>Generated Blog Post</h2>
          <Card className="mt-3 border border-2 border-primary">
            <Card.Body>
              <Card.Title className='mt-1 text-center border border-1 border-danger rounded'>
                Article
              </Card.Title>
              <Card.Text className='mt-3 border rounded px-2 py-2'>
                <h3 className='text-center'>Sample Blog Title</h3>
                <p className='p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugit harum commodi animi repellendus,
                  quo nihil est cumque ea assumenda enim molestias temporibus
                  consectetur deleniti laborum maiores nobis nemo facilis atque?
                  Quae dolorem velit ab reiciendis aperiam corporis mollitia
                  consequatur sint debitis magni corrupti nihil, earum excepturi
                  adipisci animi blanditiis? Maxime!
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </section>
    </>
  );
};

export default Blog;



