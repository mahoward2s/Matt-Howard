import React from "react";
import Navbar from "react-bootstrap/Navbar"
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavigationBar() {
  return (
<Navbar bg="dark" expand="lg">
  <Navbar.Brand href="#home">Matt Howard</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">About</Nav.Link>
      <NavDropdown title="Portfolio" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Collaboration</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Applications</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Websites</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Personal Projects</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#link">Contact</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
  );
}

export default NavigationBar;
