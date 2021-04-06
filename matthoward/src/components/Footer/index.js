import React from "react";
import Navbar from "react-bootstrap/Navbar"
import "./style.css";

function Footer() {
  return (
<Navbar bg="dark" variant="dark" expand="lg" fixed="bottom">
  <Navbar.Brand id="footer">Website By: Mahoward2s</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
</Navbar>
  );
}

export default Footer;