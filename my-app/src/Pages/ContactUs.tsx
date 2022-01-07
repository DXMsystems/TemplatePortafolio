import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import ContactForm from "../Components/ContactForm/ContactForm";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <Container>
      <SectionTitle
        descripcion="Feel free to contact me anytime"
        title="Get In Touch"
      />

      <Row>
        <Col>
          <ContactForm />
        </Col>

        <Col>
          <h1 className="subtitulo">Contact Info</h1>
          <p className="contactText">
            Always available for freelance work if the right project comes
            along, Feel free to contact me!
          </p>
          <Row>
            <Col className="borde" xs={1}>
            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-file-person-fill iconos"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11z" />
                </svg>
            </Col>
            <Col xs={11}>
              <h1 className="item__info-item">Name</h1>
              <p className="itemDescription">Jorge Sanchez</p>
            </Col>
            
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
