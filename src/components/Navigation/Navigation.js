import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
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
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <img src={logo} alt="logo" className="logo px-4" height='50' />
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle />
                <Navbar.Collapse className='px-3 '>
                    <Nav>
                        <LinkContainer to="/blog">
                            <Nav.Link className='navItem'>Blog</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/products">
                            <Nav.Link className='navItem'>Products</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/emails">
                            <Nav.Link className='navItem'>Emails</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/tweets">
                        <Nav.Link className='navItem'>Tweets</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/settings">
                        <Nav.Link className='navItem'>Settings</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/profile">
                        <Nav.Link className='navItem'>Profile</Nav.Link>
                        </LinkContainer>
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