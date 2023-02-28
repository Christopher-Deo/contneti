import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Card } from 'react-bootstrap';
import BlogTopic from '../components/Blog/BlogTopic';
import BlogTitles from '../components/Blog/BlogTitles';
import BlogPost from '../components/Blog/BlogPost';
const { Configuration, OpenAIApi } = require("openai");

const Blog = (props) => {
  // const [selectedBlogTitle, setSelectedBlogTitle] = useState("");
  // const handleTopicChange = (topic) =>{ setTopic(topic)}
  // const handleTitleSelection = (blogTitles) => { setBlogTitles([]); };
  const [selectedBlogTitle, setSelectedBlogTitle] = useState(""); 

  useEffect(() => {
    console.log(selectedBlogTitle);
  },[selectedBlogTitle]);



  return (
    <>
      <section className='mt-3'>
        <h1 className='my-3 text-center'>Blog Post Generator</h1>
        <Container className=' p-3 border border-2 border-success rounded'>
          <BlogTopic setSelectedBlogTitle={setSelectedBlogTitle} />
          <BlogTitles selectedBlogTitle={selectedBlogTitle} />
        </Container>
        <BlogPost />


      </section>
    </>
  );
};

export default Blog;



