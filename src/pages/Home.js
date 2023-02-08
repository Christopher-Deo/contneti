import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from '../images/brand-logo.png';
import Display from '../components/Display/Display';
const Home = () => {
  return (
    <main className='homePage'>
      <Container className='container container-fluid'>
        <h1 className='mt-5 '>Cure your writer's block the easy way!</h1>
        <p>Start by choosing any of the options below to start generating content.</p>
        <br />
        <br />
        <div className="generationOptions">
          <Row>
            <Col>
              <Display
                header="Blog Post"
                title="Generate Blog Posts"
                text="Create unique and engaging blog posts in seconds!"
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
                text="Answer a few questions, click a button...BOOM! Product descriptions!"
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
