import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../Pages/materials/logo.png"
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <Row>
        <Col xs={4}>
            <Link to="/">
              <img src={logo} alt="The cum Machine logo" className="menu-logo" />
            </Link>
        </Col>
        <Col xs={8}>
          <ul className="header-menu">
            <li>
              <Link to="/about-me" className="menu-option">About Me</Link>
            </li>
            <li>
              <Link to="/trajectory" className="menu-option">Trajectory</Link>
            </li>
            <li>
              <Link to="/contact-us" className="menu-option">Contact Us</Link>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
