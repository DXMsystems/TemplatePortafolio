import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./ContactForm.css";
import Anuncio from "./Anuncio";

export default function ContactForm() {
  const [modalShow, setModalShow] = useState(false);
  const [Name, setName] = useState("");
  const [Mail, setMail] = useState("");
  const [Subject, setSubject] = useState("");
  const [Message, setMessage] = useState("");

  
  const clearForm = () => {
    setName('');
    setSubject('');
    setMail('');
    setMessage('');
  }

  const findFormErrors = () => {
    if (datos.nombre =="") {
      
    }

  }

  let datos = {
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: ''
  }


  const buttonHandler = () => {

    datos.nombre = Name;
    datos.correo = Mail;
    datos.asunto = Subject;
    datos.mensaje = Message;
    
    console.log(datos);

    setModalShow(true);
    clearForm();
  };

  return (
    <>
      <Form>
        <Form.Label className="subtitulo">Message me</Form.Label>

        <Row>
          <Col>
            {/* NOMBRE */}
            <Form.Group className="mb-3 form-cell" controlId="Nombre">
              <Form.Control
                type='text'
                placeholder="Name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col>
            {/* EMAIL */}
            <Form.Group className="mb-3 form-cell" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                value={Mail}
                onChange={(e) => setMail(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          {/* ASUNTO*/}
          <Form.Group className="mb-3 form-cell" controlId="subject">
            <Form.Control
              type='text'
              placeholder="Subject"
              value={Subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </Form.Group>
        </Row>

        {/* MENSAJE */}
        <Form.Group className="mb-3 form-cell" controlId="message">
          <Form.Control
            type='text'
            as="textarea"
            rows={4}
            placeholder="Message"
            value={Message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>

        {/*  BOTON */}
        <Button variant="btn" onClick={() => buttonHandler()}>
          Send Message
        </Button>
      </Form>

      <Anuncio
        //@ts-ignore
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
