import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <Container>
      <div>
        <h1 className="descripcion">Feel free to contact me anytime</h1>
        <h1 className="titulo">Get In Touch</h1>
      </div>

      <Row>
        <Col>
          <Form>
            <Form.Label className="subtitulo">Message me</Form.Label>

            <Row>
              <Col>
                {/* NOMBRE */}
                <Form.Group className="mb-3 form-cell" controlId="subject">
                  <Form.Control placeholder="Name" />
                </Form.Group>
              </Col>

              <Col>
                {/* EMAIL */}
                <Form.Group
                  className="mb-3 form-cell"
                  controlId="formBasicEmail"
                >
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              {/* ASUNTO*/}
              <Form.Group className="mb-3 form-cell" controlId="subject">
                <Form.Control placeholder="Subject" />
              </Form.Group>
            </Row>

            {/* MENSAJE */}
            <Form.Group className="mb-3 form-cell" controlId="message">
              <Form.Control as="textarea" rows={4} placeholder="Message" />
            </Form.Group>
            <Button variant="btn" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>


        <Col>
        
        </Col>


      </Row>
    </Container>
  );
}
