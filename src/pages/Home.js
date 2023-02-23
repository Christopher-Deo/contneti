import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from '../components/Display/Display';


const Home = () => {
  //to be used in callback function to lift state from settings component
  const [state, setState] = useState({});
  
  const callback = payload => {
    setState(payload);
    console.log(state);
  }

  return (
    <main className='homePage py-5'>
      <Container className='container container-fluid'>
        <h1 className='text-center'>Cure your writer's block the easy way!</h1>
        <p className='text-center'>Start by choosing any of the options below to start generating content.</p>

        <div className="generationOptions border border-danger rounded py-3 px-3 bg-primary">
          <Row>
            <Col>
              <Display
                header="Blog Post"
                title="Generate Blog Posts"
                text="Create unique and engaging blog posts without having to fight writer's block!"
                theLink="/blog"
              />
            </Col>
            <Col>
              <Display
                header="Emails"
                title="Generate Marketing Emails"
                text="Create your entire email campaign with the click of a button!"
                theLink="/emails"
              />
            </Col>
            <Col>
              <Display
                header="Tweets"
                title="Generate Unique Tweets"
                text="Quickly and easily create humorous and engaging tweets!"
                theLink="/tweets"
              />
            </Col>
            <Col>
              <Display
                header="Product Descriptions"
                title="Generate Product Descriptions"
                text="Instantly create compelling product descriptions!"
                theLink="/products"
              />
            </Col>
          </Row>
        </div>
      </Container>

    </main>
  );
};

export default Home;
