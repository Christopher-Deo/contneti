import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Container, Button, Card } from 'react-bootstrap';
import BlogTitle from '../components/Blog/BlogTitle';
// const { Configuration, OpenAIApi } = require("openai");

const Blog = (props) => {
  const [topic, setTopic] = useState('');
  const [title, setTitle] = useState('');

  
  const handleTopicChange = ((e) => {
    setTopic(e.target.value);
    console.log(`topic changed to ${e.target.value}`);
  });

  const handleTopicSubmit = ((event) => {
    event.preventDefault();
    setTopic(topic);
    console.log('Blog topic onSubmit is ', topic);
  });

  function resetTopic() {
    setTopic('');
    console.log('topic cleared');
  };

  


  return (
    <>
      <section className='mt-3'>
        <h1 className='my-3 text-center'>Blog Post Generator</h1>
        <Container className=' p-3 border border-2 border-success rounded'>
          <h2 className='mt-2 text-center'>Blog Post Title Generator</h2>
          <p className='text-center'>Enter a topic into the form. Click "submit" to generate 10 blog title ideas</p>
          <Form
            className='border border-2 border-primary rounded p-3'
            onSubmit={handleTopicSubmit}
          >
            <Form.Group className="mb-3" controlId="formTopic">
              <Form.Label>Enter a topic</Form.Label>
              <Form.Control
                type="text"
                placeholder="Topic"
                value={topic}
                onChange={handleTopicChange}
              >
              </Form.Control>
            </Form.Group>
            <div className='d-flex justify-content-between'>
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

          <BlogTitle />          
        </Container>


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



