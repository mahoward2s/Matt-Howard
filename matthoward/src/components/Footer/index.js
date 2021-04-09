import React from "react";
import { Navbar, Nav } from "react-bootstrap"
import "./style.css";

function Footer() {
  return (
    <Navbar 
    className="justify-content-center" 
    bg="dark" 
    variant="primary" 
    expand="sm" 
    fixed="bottom">
        <Navbar.Brand id="footer"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        <Nav className="justify-content-center">Website By: Mahoward2s</Nav>
    </Navbar>
  );
}

export default Footer;