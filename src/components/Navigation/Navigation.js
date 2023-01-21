import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/brand-logo.png';
import './Navigation.css'
 

const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" sticky="top" expand="md" collapseOnSelect>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" className="logo" height='125' />
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="/blog" className='navItem'>Blog</Nav.Link>

            <Nav.Link href="/products" className='navItem'>Products</Nav.Link>

            <Nav.Link href="/emails" className='navItem'>Emails</Nav.Link>
            
            <Nav.Link href="/tweets" className='navItem'>Tweets</Nav.Link>
          </Nav>
        </Navbar.Collapse>
</Navbar>
    </div>
  )
}

export default Navigation
