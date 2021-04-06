import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Matthew Howard
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/about"
              className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
            >
              About
            </Link>
          </li>
{/*           <li className="nav-item dropdown">
            <Link
              to="/discover"
              className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
            >
              Discover
            </Link>
          </li> */}
          <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;




<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Portfolio
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Collaborations</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Applications</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Websites</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Personal Projects</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>