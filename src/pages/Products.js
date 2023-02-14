import React from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
const { Configuration, OpenAIAPI } = require('openai-api');

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: 'The response from the description generator will be shown here', 
      response: '...awaiting response'
    };

    onFormSubmit = e => {
      e.preventDefault();

      const formData = new FormData(e.target);
      formDataObj = Object.formEntries(formData.entries());
      console.log(formDataObj.productName);

      // OpenAI code
      const configuration = new Configuration({
        apiKey: sk - GW3KJWxdqLPgNjcVNwTqT3BlbkFJWBalxbXVUomnCH41lDHG
      });
      const openai = new OpenAIApi(configuration);

      // openai.createCompletion('text-davinci-003'{
      // prompt: `Write a detailed, smart, informative, and professional product description for ${formDataObj.productName}}`;
      // temperature: 0.8,
      // max_tokens: 512,
      // top_p: 1,
      // frequency_penalty: 0,
      // presence_penalty: 0,
    // })
    // .then(response) => {
    //   this.setState({
    //     heading: `Product Descriptions Suggestions for: ${formDataObj.productName}`,
    //     response: `${response.data.choices[0].text}`
    //   }).catch(error => {
    //     console.error('OpenAI error', error);
    //   });
      // this.setState({
      //   heading: `Product Descriptions Suggestions for: ${formDataObj.productName}`,
      //   response: `The response from the description generator will be shown here`
      // });


      // const response = await openai.createCompletion({
      //   model: "text-davinci-003",
      //   prompt: "generate product description for: M2 MacBook Pro\n\nIntroducing the M2 MacBook Pro, the most powerful and versatile MacBook to date. Featuring a stunning 13.3\" display with a Retina True Tone display, and powered by the latest Apple M2 processor, this MacBook Pro is perfect for tackling any task, no matter the complexity. The M2 MacBook Pro comes with the latest Apple technology, including up to 16GB RAM and up to a 2TB SSD for maximum storage capacity. Plus, the M2 MacBook Pro features a full-size Magic Keyboard, Touch ID, and an expansive Force Touch trackpad for unparalleled performance and convenience. With up to 11 hours of battery life, the M2 MacBook Pro is perfect for all-day use, wherever you go.",
      //   temperature: 0.8,
      //   max_tokens: 512,
      //   top_p: 1,
      //   frequency_penalty: 0,
      //   presence_penalty: 0,
      // });





    };
    return (
      <div>
        <Container>
          <h1 className="mt-5">📦 Generate Product Descriptions 📦</h1>
          <h4 className="mt-3">📝 Enter a product name and description below to generate a new product description.</h4>
          <Form className="mt-5" onSubmit={this.onFormSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>What Product Would You Like To Create A Description For?</Form.Label>
              <Form.Control
                type="text"
                name="productName"
                placeholder="Enter Product Name" />
              <Form.Text className="text-muted">
                Enter as much information as possible for more accurate descriptions
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              📝 Generate Product Description 🛍️
            </Button>
          </Form>
          <Card className="mt-5">
            <Card.Body>
              <Card.Title className='mt-3'>{this.state.heading}</Card.Title>
              <Card.Text className='mt-3'>
                <h4>{this.state.response}</h4>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }

export default Products;










