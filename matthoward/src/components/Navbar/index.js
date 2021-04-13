import React from "react";
import { Navbar, Nav, NavDropdown }from "react-bootstrap"
import "./style.css";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavigationBar() {
  return (
<Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand to="/home" as={Link}>Matt Howard</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
    <Nav className="mr-auto" className="justify-content-end">
      <Nav.Link to="/about" as={Link}>About</Nav.Link>
      <NavDropdown title="Portfolio" id="basic-nav-dropdown">
        <NavDropdown.Item as={Link} to="/collaborations">Collaborations</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/applications">Applications</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/websites">Websites</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to="/personalprojects">Personal Projects</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}

export default NavigationBar;
