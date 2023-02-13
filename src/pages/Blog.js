import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Container, Button } from 'react-bootstrap';
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
        <Container>
          <h1 className='mt-5'>Blog Post Generator</h1>
          <p>Enter a topic into the form. Click "submit" to generate 10 blog title ideas</p>
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
        </Container>
        <Container>
          <h2 className='mt-5'>Blog Title Suggestions</h2>
          <div className='mt-3'>
            {/* list of suggestions goes here
            map response object to new array
            loop over array and extract each suggestion
            append suggestion to the list
            add a radio button to each suggestion as selection device
            create new post using the selected suggestion
            or generate new list
            means of extracting the ideas and posts as a file
            for import into WP/blog
            */}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Blog;



