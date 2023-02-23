import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Container, Button, Card } from 'react-bootstrap';
import BlogTitle from '../components/Blog/BlogTitle';
const { Configuration, OpenAIApi } = require("openai");

const Blog = (props) => {
  
  const [title, setTitle] = useState("");
  // const [blogPost, setBlogPost] = useState("");

  const generateTitle = async (props) => {
    const configuration = new Configuration({
      apiKey: '{ props.apiKey }'
    });

    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Generate 10 blog titles from  `,
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

  

  // "Create a form to input a keyword and use that keyword to generate a list of 10 blog titles  \n\nimport React, { useState } from 'react';\n\nconst GenerateBlogTitles = () => {\n  const [keyword, setKeyword] = useState('');\n  const [blogTitles, setBlogTitles] = useState([]);\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    // use keyword to generate list of 10 blog titles\n    setBlogTitles([\n      '10 Tips for Writing a Great Blog Post',\n      'The Benefits of Writing a Blog',\n      'How to Get Started Writing Blog Posts',\n      'Steps for Writing an Engaging Blog Post',\n      'The Pros and Cons of Writing Blogs',\n      'Creating a Blogging Routine that Works',\n      'Writing Tips for Bloggers',\n      'The Best Blogging Platforms for Beginners',\n      'How to Promote Your Blog Posts',\n      'The Ultimate Guide to Writing a Blog Post'\n    ]);\n  };\n\n  return (\n    <div>\n      <form onSubmit={handleSubmit}>\n        <label>\n          Enter a Keyword:\n          <input",
  return (
    <>
      <section className='mt-3'>
        <h1 className='my-3 text-center'>Blog Post Generator</h1>
        <BlogTitle />

          
        <Container className='mt-3 p-3 border border-2 border-success rounded'>
          <h2 className='mt-1 text-center'>Generated Blog Post</h2>
          <Card className="mt-3 border border-2 border-primary">
            <Card.Body>
              <Card.Title className='mt-1 text-center border border-1 border-danger rounded'>
                Article
              </Card.Title>
              <Card.Text className='mt-3 border rounded px-2 py-2'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime distinctio,
                optio voluptatum similique nostrum numquam nobis quaerat, officiis delectus
                accusamus odit ipsa fugiat quia. Repellat enim qui doloribus, assumenda unde
                alias harum sunt sed officiis soluta similique nihil nobis. Iure quos maxime
                expedita eaque! Expedita enim provident ipsum error veritatis animi veniam
                voluptatum fugiat delectus nisi. Quasi perferendis ut aut accusamus repellat,
                dolorum libero cupiditate omnis, aperiam officia quos. Porro, id eligendi dicta
                est minima nemo quod sed, cupiditate totam, commodi nihil voluptates vero ex
                quas sint laudantium incidunt minus obcaecati dolorum eum provident consectetur!
                Et ipsum ipsam iure nesciunt illo nisi quo accusamus quaerat ratione aut, repellat
                quasi saepe? Voluptatibus dicta unde quae velit, minima quidem dolor id voluptates
                recusandae odio neque explicabo tenetur alias rem commodi sapiente ex quaerat nihil
                hic animi! Consequatur magni cum quisquam odit explicabo. In aliquam repellendus
                sequi odio cumque. Quas, placeat vel minus consequatur unde cupiditate debitis consectetur
                velit molestiae reprehenderit laboriosam alias eos illum cum rem, vero non impedit
                nisi nihil modi possimus? Voluptas ipsum minus numquam temporibus laboriosam.
                Dicta deserunt corrupti animi dolorum expedita maiores nulla maxime incidunt dolore sint
                mollitia possimus assumenda explicabo aliquam eos, voluptatum quidem dignissimos vel
                perspiciatis? Temporibus atque, earum, vel non molestias suscipit dolorum omnis modi
                fugiat soluta quis illum voluptatum unde eveniet! Ad repellendus ea dolorem accusamus
                veritatis officiis, mollitia aliquam unde eum cupiditate praesentium corporis assumenda
                nisi hic repellat quos minus neque, eligendi architecto nulla. Iure enim rerum facere earum.
                Sapiente id nihil eligendi.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className='d-flex justify-content-between'>
                <Button
                  className='btn btn-sm btn-success btn-outline-dark text-white'
                  type="submit"
                >Export to File</Button>
                <Button
                  className='btn btn-sm btn-outline-dark text-white'
                  type="submit"
                >Generate New Post
                </Button>
              </div>
            </Card.Footer>
          </Card>
        </Container>
      </section>
    </>
  );
};

export default Blog;



