import React from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';

const Tweets = () => {
  return (
    <section className='mt-3'>
      <h1 className='my-3 text-center'>Tweet Generator</h1>
      <Container className=' p-3 border border-2 border-success rounded'>
        <Form className='border border-2 border-primary rounded p-3'>
          <h3 className='mt-2 text-center'>Tweet Generator</h3>
          <p className='text-center'>Enter a topic into the form. Click "submit" to generate unique tweets</p>
          <Form.Group className="mb-3" controlId="formTopic">
            <Form.Label>Enter a topic</Form.Label>
            <Form.Control
              type="text"
              placeholder="Topic"
            >
            </Form.Control>
          </Form.Group>
          <div className='d-flex justify-content-end'>
          <Button
            className='btn btn-sm btn-outline-dark text-white'
            type="button"
          >
            Generate Tweets
            </Button>
            </div>
        </Form>
      </Container>
      <Container className='mt-3 p-3 border border-2 border-success rounded'>
        <h2 className='mt-1 text-center'>Generated Tweets</h2>
        <Card className="mt-3 border border-2 border-primary">
          <Card.Body>
            <Card.Title className='mt-1 text-center border border-1 border-danger rounded'>
              Tweets
            </Card.Title>
            <Card.Text className='mt-3 border rounded px-2 py-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Fugit harum commodi animi repellendus,
              quo nihil est cumque ea assumenda enim molestias temporibus
              consectetur deleniti laborum maiores nobis nemo facilis atque?
              Quae dolorem velit ab reiciendis aperiam corporis mollitia
              consequatur sint debitis magni corrupti nihil, earum excepturi
              adipisci animi blanditiis? Maxime!
            </Card.Text>
            <Card.Text className='mt-3 border rounded px-2 py-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Fugit harum commodi animi repellendus,
              quo nihil est cumque ea assumenda enim molestias temporibus
              consectetur deleniti laborum maiores nobis nemo facilis atque?
              Quae dolorem velit ab reiciendis aperiam corporis mollitia
              consequatur sint debitis magni corrupti nihil, earum excepturi
              adipisci animi blanditiis? Maxime!
            </Card.Text>
          </Card.Body>
          <Card.Footer className='d-flex justify-content-end'>
            <Button className='btn btn-sm btn-outline-dark text-white'>
              Generate Tweet
            </Button>
          </Card.Footer>
        </Card>
      </Container>
    </section>
  );
};

export default Tweets;
