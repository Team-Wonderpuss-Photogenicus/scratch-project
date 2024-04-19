import React from 'react';
import styles from '../stylesheet/styles.scss';
import logoImg from '../assets/giphy.gif';
import profileImg from '../assets/profile.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarF = () => {
  return (
    <>
      {/* <div className='navbar'>
        <div className='logoContainer'>
          <img src={logoImg} alt='logo' className='logo' />
        </div>
        <div className='title'>Wonderpuss Photogenicus</div>
        <div className='profileContainer'>
          <button className='login'>Register</button>
          <button className='login'>Login</button>
          <img src={profileImg} alt='profile' className='profileImg' />
        </div>
      </div> */}
      <Navbar
        bg='dark'
        data-bs-theme='dark'
        expand='lg'
        className='bg-body-tertiary'
      >
        <Container fluid>
          <Navbar.Brand href='#'>
            {' '}
            <img
              alt=''
              src={logoImg}
              width='30'
              height='30'
              className='d-inline-block align-top'
            />
            Wonderpuss Photogenicus
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            ></Nav>
            <Form className='d-flex'>
              <Button variant='outline-primary'>Login</Button>
              <Button variant='outline-primary'>Register</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarF;
