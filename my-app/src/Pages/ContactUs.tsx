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

        <Col></Col>
      </Row>
    </Container>
  );
}
