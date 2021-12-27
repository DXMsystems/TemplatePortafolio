import React from "react";
import { Navbar, Container, Col, Row, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Container className="header-container">
      <Row>
        <Col>
          <div className="test">LOGO</div>
        </Col>
        <Col>
          <ul>
            <li>
              <Link to="/about-me">About Me</Link>
            </li>
            <li>
              <Link to="/trajectory">Trajectory</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
