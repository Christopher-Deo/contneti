import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/brand-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css'
// import './Navigation.css'


const Navigation = () => {
  return (
    <div>
      <Navbar bg="light" sticky="top" expand="md" collapseOnSelect >
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" className="logo px-4" height='50' />        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="/blog" className='navItem'>Blog</Nav.Link>

            <Nav.Link href="/products" className='navItem'>Products</Nav.Link>

            <Nav.Link href="/emails" className='navItem'>Emails</Nav.Link>

            <Nav.Link href="/tweets" className='navItem'>Tweets</Nav.Link>
          
            <Nav.Link href="/settings" className='navItem'>Settings</Nav.Link></Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation