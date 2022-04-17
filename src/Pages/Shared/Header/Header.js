import React from 'react';
import { signOut } from 'firebase/auth';
import{Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
 import auth from '../../../firebase.int.js'
const Header = () => {
    const [user] =useAuthState(auth)
    const  handelSignOut =()=>{
      signOut(auth)
    }
    return (
      <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
        <Navbar.Brand as={Link} to="/home">Photograper</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home#service">Service</Nav.Link>
            <Nav.Link as={Link}to="/about">About</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            </NavDropdown> */}
          </Nav>
          <Nav>
              { 
              user ? <button className='btn  text-drak' onClick={handelSignOut}>sing out</button>  :
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
      
                }
                 <Nav.Link >
               </Nav.Link>  
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      </>  
    );
};

export default Header;