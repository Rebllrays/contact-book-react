import React from 'react'
import {Navbar, Container, Nav, Button} from 'react-bootstrap';

const Header = ({handleShow}) => {
  return (
    <Navbar className='navbar'>
        <Container className='container'>
          <Navbar.Brand href="#home" className='navbar-brand'>Contact Book</Navbar.Brand>

          <Button variant="outline-light" onClick={handleShow}>
            <img src="https://cdn-icons-png.flaticon.com/512/9356/9356967.png" alt="" />
          </Button>
        </Container>
      </Navbar>
  )
}

export default Header;