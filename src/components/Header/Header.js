import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap"
import { NavLink, Link } from "react-router-dom"
function Header(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/" className="navbar-brand"><Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

          </Nav>
          <Nav>
            <li className="nav-item"><NavLink to="/signin" className="nav-link">Sign in</NavLink></li>
            <li className="nav-item"><NavLink to="/signup" className="nav-link">Sign up</NavLink></li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;