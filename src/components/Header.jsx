import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { CREATE_AD, DASHBOARD } from "../constants/routes";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-white" style={{ zIndex: 999 }}>
      <Container fluid>
        <Navbar.Brand>
          <Nav.Link as={NavLink} to={DASHBOARD}>
            APP LOGO
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to={DASHBOARD}>
              DASHBOARD
            </Nav.Link>
            <Nav.Link as={NavLink} to={CREATE_AD}>
              CREATE ADS
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
