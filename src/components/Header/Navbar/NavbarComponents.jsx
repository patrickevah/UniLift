import React from "react";
import { Navbar, Container} from "react-bootstrap";
import "./Navbar.css";
import { Link } from "react-router-dom";
export const NavbarComponent = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Link to="/home">
            <Navbar.Brand>
              
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
    
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};