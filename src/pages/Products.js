import React from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
// const { Configuration, OpenAIAPI } = require('openai-api');

const Products = (props) => {
  







  return (
    <div>
      <Container className='p-3 mt-3 border border-2 border-success rounded'>
        <h1 className="mt-5">📦 Generate Product Descriptions 📦</h1>
        <h4 className="mt-3"> Enter a product name and description below to generate a new product description.</h4>
        <Form className="mt-3 p-3 border border-primary border-2 rounded" >
          <Form.Group controlId="productDescriptionForm">
            <Form.Label>What Product Would You Like To Create A Description For?</Form.Label>
            <Form.Control
              type="text"
              name="productName"
              placeholder="Enter Product Name" />
            <Form.Label className='mt-3'>What is the type of product</Form.Label>
            <Form.Control
              type="text"
              name="productType"
              placeholder="Enter type of product" />
            <Form.Label className='mt-3'>Provide some basic details about the product</Form.Label>
            <Form.Control
              type="text"
              name="productDetails"
              placeholder="Enter basic details" />
            <Form.Text className="text-muted">
              Enter as much information as possible for more accurate descriptions
            </Form.Text>
          </Form.Group>

          <div className='d-flex justify-content-end'>
            <Button type="submit" className='btn btn-sm btn-outline-dark text-white mt-3'>
              Generate Product Descriptions
            </Button>
          </div>
        </Form>
        <Card className="mt-5 border border-2 border-primary">
          <Card.Body>
            <Card.Title className='mt-1 text-center border border-1 border-danger rounded'>Product Description</Card.Title>
            <Card.Text className='mt-3 border rounded px-2 py-2'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam laudantium eos nisi maxime? Cumque delectus minus nostrum omnis possimus temporibus.
            </Card.Text>
          </Card.Body>
          <Card.Footer className='d-flex justify-content-between'>
            <Button className='btn btn-sm btn-outline-dark btn-success text-white'>Export to File</Button>
            <Button className='btn btn-sm btn-outline-dark text-white'>Get Another Version</Button>
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
};

export default Products;










