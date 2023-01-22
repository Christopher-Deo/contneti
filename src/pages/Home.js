import react from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../images/brand-logo.png';
import Display from '../components/Display/Display';
const Home = () => {
  return (
    <main className='homePage'>
      <Container>
        <Carousel>
          <Carousel.Item>
            <img className='d-block w-300'src={logo} alt="Contenti logo" height="200"/>
          </Carousel.Item>
        </Carousel>
        <br/>
        <br />
        <h1>Cure your writer's block the easy way!</h1>
          <p>Start by choosing any of the options below to start generating content.</p>
          <br />
          <br />
          <div className="generationOptions">
            <Row>
              <Col>
                <Display
                  header="Blog Post"
                  title="Generate Blog Posts"
                  text="just some random text written"
                  theLink="/blog"
                />
              </Col>
              <Col>
                <Display
                  header="Blog Post"
                  title="Generate Blog Posts"
                  text="just some random text written"
                  theLink="/products"
                />
              </Col>
              <Col>
                <Display
                  header="Blog Post"
                  title="Generate Blog Posts"
                  text="just some random text written"
                  theLink="/emails"
                />
              </Col>
              <Col>
                <Display
                  header="Blog Post"
                  title="Generate Blog Posts"
                  text="just some random text written"
                  theLink="/tweets"
                />
              </Col>
            </Row>
          </div>
      </Container>

    </main>
  );
};

export default Home;
