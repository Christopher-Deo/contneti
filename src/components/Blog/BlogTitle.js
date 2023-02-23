import React, {useState} from 'react'
import { Form, Button, Card, Container } from 'react-bootstrap'


const BlogTitle = () => {
    const [topic, setTopic] = useState("");
    const [keyword, setKeyword] = useState("");
    
    //change and click handlers
    const handleChange = ((event) => {
        setKeyword(event.target.value);
    });

    const handleClick = ((event) => {
        event.preventDefault();
        setTopic(keyword);

    });

  return (
      <>
          <Container className=' p-3 border border-2 border-success rounded'>
              <h2 className='mt-2 text-center'>Blog Post Title Generator</h2>
              <p className='text-center'>Enter a topic into the form. Click "submit" to generate 10 blog title ideas</p>
          <Form className='border border-2 border-primary rounded p-3'>
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
              <div className='d-flex justify-content-end'>
                  <Button
                      className='btn btn-sm btn-outline-dark text-white'
                      type='submit'
                      onClick={handleClick}
                  >
                      Get Ideas
                  </Button>
              </div>
          </Form>
          <h2 className='mt-3 text-center'>Blog Title Suggestions</h2>
          <Card className="mt-3 border border-2 border-primary">
              <Card.Body>
                  <Card.Title
                      className='mt-1 text-center border border-1 border-danger rounded'>
                      Blog Titles
                  </Card.Title>
                  <Form.Text className='text-muted'>
                      Select title suggestion to generate blog post
                  </Form.Text>
                  <Card.Text className='mt-3 border rounded px-2 py-2'>
                      <input className="mx-2" type="radio" aria-label="radio button for blog title selection" />
                      Lorem ipsum dolor sit amet.
                  </Card.Text>
                  <Card.Text className='mt-3 border rounded px-2 py-2'>
                      <input className="mx-2" type="radio" aria-label="radio button for blog title selection" />
                      Lorem ipsum dolor sit amet.
                  </Card.Text>
                  <Card.Text className='mt-3 border rounded px-2 py-2'>
                      <input className="mx-2" type="radio" aria-label="radio button for blog title selection" />
                      Lorem ipsum dolor sit amet.
                  </Card.Text>
              </Card.Body>
              <Card.Footer >
                  <div className='d-flex justify-content-end'>
                      <Button className='btn btn-sm btn-outline-dark text-white' variant='primary'>Generate Additional Titles</Button>
                  </div>
              </Card.Footer>
          </Card>
      </Container>
      </>
  )
}

export default BlogTitle
