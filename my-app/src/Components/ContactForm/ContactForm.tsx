import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import "./ContactForm.css"

export default function ContactForm() {
    return (
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
    )
}
