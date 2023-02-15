import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import logo from '../../images/brand-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Navigation.css'


const Navigation = () => {


  return (
    <div >
      <Navbar
        bg="light"
        sticky="top"
        expand="md"
        collapseOnSelect >
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" className="logo px-4" height='50' />        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='px-3 '>
          <Nav>
            <Nav.Link href="/blog" className='navItem'>Blog</Nav.Link>

            <Nav.Link href="/products" className='navItem'>Products</Nav.Link>

            <Nav.Link href="/emails" className='navItem'>Emails</Nav.Link>

            <Nav.Link href="/tweets" className='navItem'>Tweets</Nav.Link>

            <Nav.Link href="/settings" className='navItem'>Settings</Nav.Link>

            <Nav.Link href="/profile" className='navItem'>Profile</Nav.Link>
            <Button
              className='btn-light btn-outline-dark btn-sm'
              type='button'
            >
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;