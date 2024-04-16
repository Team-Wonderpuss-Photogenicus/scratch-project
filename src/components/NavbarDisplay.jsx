import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import Avatar from 'react-avatar';

function NavbarDisplay() {
  return (
    <Navbar
      bg='dark'
      data-bs-theme='dark'
      collapseOnSelect
      expand='lg'
      className='bg-body-tertiary'
    >
      <Container>
        <Navbar.Brand href='#home'>App-Name</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#features'>Favorites</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href='#deets'>User Name</Nav.Link>
          </Nav>
          {/* <Avatar name='User Name' size='50' textSizeRatio={1.75} /> */}

          <Avatar githubHandle='sitebase' size={50} round='20px' />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarDisplay;
