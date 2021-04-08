import React from "react";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavigationBar() {
  return (
<Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="/home">Matt Howard</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
    <Nav className="mr-auto" className="justify-content-end">
      <Nav.Link href="/about">About</Nav.Link>
      <NavDropdown title="Portfolio" id="basic-nav-dropdown">
        <NavDropdown.Item href="/collaborations">Collaborations</NavDropdown.Item>
        <NavDropdown.Item href="/applications">Applications</NavDropdown.Item>
        <NavDropdown.Item href="/websites">Websites</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/personalprojects">Personal Projects</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}

export default NavigationBar;
