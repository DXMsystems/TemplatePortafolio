import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import minilogo from "../../Pages/materials/minilogo.png";
import "./HamburguerMenu.css";

export default function HamburguerMenu() {
  return (
    <div className="cel-menu">
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/">
              <img
                src={minilogo}
                alt="Solutions logo"
                className="menu-minilogo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">
                <Link to="/about-me" className="menu-option">
                  About Me
                </Link>
              </Nav.Link>
              <Nav.Link href="#pricing">
                <Link to="/trajectory" className="menu-option">
                  Trajectory
                </Link>
              </Nav.Link>
              <Nav.Link href="#pricing">
                <Link to="/contact-us" className="menu-option">
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
