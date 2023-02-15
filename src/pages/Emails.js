import React from 'react';
import { Form, Card, Container, Button } from 'react-bootstrap';


const Emails = () => {
  return (
    <section className='mt-3'>
      <h1 className='my-3 text-center'>Marketing Email Generator</h1>
      <Container className=' p-3 border border-2 border-success rounded'>
        <h2 className='mt-2 text-center'>Email Generator</h2>
        <Form className='p-3 border border-2 border-primary rounded'>
          <p className='text-center'>Enter a topic into the form. Click "submit" to generate subject line ideas</p>
          <Form.Group className="mb-3" controlId="formTopic">
            <Form.Label>Enter a topic</Form.Label>
            <Form.Control
              type="text"
              placeholder="Topic"
            >
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formLink">
            <Form.Label>Enter affiliate/product link</Form.Label>
            <Form.Control
              type="text"
              placeholder="Affiliate or product URL"
            >
            </Form.Control>
          </Form.Group>
          <div className='d-flex justify-content-end'>
            <Button
              className='btn-sm'
              type='submit'
              variant='warning'
            >
              Get Ideas
            </Button>
          </div>
        </Form>


        <Card className="mt-3 border border-2 border-primary">
          <h2 className='mt-1 text-center'>Subject Line Suggestions</h2>
          <Card.Body>
            <Card.Title
              className='mt-1 text-center border border-1 border-danger rounded'>
              Email Subjects
            </Card.Title>
            <Form.Text className='text-muted'>
              Select subject line to generate new email
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
          <Card.Footer className='d-flex justify-content-end'>
            <Button className='mt-2 btn-sm' variant='primary'>More Subject Lines</Button>
          </Card.Footer>
        </Card>
      </Container>
      <Container className='mt-3 p-3 border border-2 border-success rounded'>
        <h2 className='mt-1 text-center'>Generated Marketing Email</h2>
        <Card className="mt-3 border border-2 border-primary">
          <Card.Body>
            <Card.Title className='mt-1 text-center border border-1 border-danger rounded'>
              Email
            </Card.Title>
            <Card.Text className='mt-3 border rounded px-2 py-2'>
              <h3 className='text-center'>Sample Email</h3>
              <p className='p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Fugit harum commodi animi repellendus,
                quo nihil est cumque ea assumenda enim molestias temporibus
                consectetur deleniti laborum maiores nobis nemo facilis atque?
                <a href='https//christopherdeo.com' target='none'>Quae dolorem velit</a> ab reiciendis aperiam corporis mollitia
                consequatur sint debitis magni corrupti nihil, earum excepturi
                adipisci animi blanditiis? Maxime!
              </p>
            </Card.Text>
          </Card.Body>
          <Card.Footer className='d-flex justify-content-end'>
            <Button
              className='btn-sm'
              variant='primary'
            >
              Add To Clipboard
            </Button>
          </Card.Footer>
        </Card>
      </Container>
    </section>
  );
};

export default Emails;
