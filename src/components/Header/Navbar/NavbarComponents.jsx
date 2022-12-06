import React from "react";
import { Navbar, Nav, Container} from "react-bootstrap";
import "./Navbar.css";
import { Link } from "react-router-dom";
export const NavbarComponent = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Link to="/home">
            <Navbar.Brand>
              <img
                src="https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27&2"
                alt="logo"
              ></img>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
    
            <Nav>
              <Nav.Link to="#deets">English</Nav.Link>
              <Nav.Link to="#deets">List Your Property</Nav.Link>
              <Nav.Link to="#deets">Support</Nav.Link>
              <Nav.Link to="#deets">Trips</Nav.Link>
              <Nav.Link to={"/login"}>  <Link to={'/login'}>Sign in</Link></Nav.Link>
            
              <Nav.Link eventKey={2} to="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};