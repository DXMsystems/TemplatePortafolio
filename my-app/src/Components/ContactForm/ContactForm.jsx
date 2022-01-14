import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./ContactForm.css";
import Anuncio from "./Anuncio";
import { isEmpty } from "./FormValidation";

export default function ContactForm() {
  const ERROR_CLASS = "form-control-error";
  const [formError, setformError] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [Name, setName] = useState({ value: "", errorClass: "" });
  const [Mail, setMail] = useState({ value: "", errorClass: "" });
  const [Subject, setSubject] = useState({ value: "", errorClass: "" });
  const [Message, setMessage] = useState({ value: "", errorClass: "" });

  let datos = {
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
  };

  const mailError = () => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !re.test(Mail.value);
}


  const clearForm = () => {
    setName({ value: "", errorClass: "" });
    setSubject({ value: "", errorClass: "" });
    setMail({ value: "", errorClass: "" });
    setMessage({ value: "", errorClass: "" });
    setformError(false);
  };

  const formErrorHandler = () => {
    let hasError = false;
    if (isEmpty(Name.value)) {
      setName({ value: Name.value, errorClass: ERROR_CLASS });
      hasError = true;

    }
    if (isEmpty(Mail.value)||mailError()) {
      setMail({ value: Mail.value, errorClass: ERROR_CLASS });
      hasError = true;
    }
    if (isEmpty(Subject.value)) {
      setSubject({ value: Subject.value, errorClass: ERROR_CLASS });
      hasError = true;
    }
    if (isEmpty(Message.value)) {
      setMessage({ value: Message.value, errorClass: ERROR_CLASS });
      hasError = true;
    }
    if(hasError){
      setformError(true);
    }
    return hasError;
  };

  const buttonHandler = () => {
    if (!formErrorHandler()) {
      setModalShow(true);
      clearForm();
    }
    mailError();

    datos.nombre = Name;
    datos.correo = Mail;
    datos.asunto = Subject;
    datos.mensaje = Message;
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
                type="text"
                placeholder="Name"
                className={Name.errorClass}
                value={Name.value}
                onChange={(e) =>
                  setName({
                    value: e.target.value,
                    errorClass: "",
                  })
                }
              />
            </Form.Group>
          </Col>

          <Col>
            {/* EMAIL */}
            <Form.Group className="mb-3 form-cell" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                className={Mail.errorClass}
                value={Mail.value}
                onChange={(e) =>
                  setMail({
                    value: e.target.value,
                    errorClass: "",
                  })
                }
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          {/* ASUNTO*/}
          <Form.Group className="mb-3 form-cell" controlId="subject">
            <Form.Control
              type="text"
              placeholder="Subject"
              className={Subject.errorClass}
              value={Subject.value}
              onChange={(e) =>
                setSubject({
                  value: e.target.value,
                  errorClass: "",
                })
              }
            />
          </Form.Group>
        </Row>

        {/* MENSAJE */}
        <Form.Group className="mb-3 form-cell" controlId="message">
          <Form.Control
            type="text"
            as="textarea"
            rows={4}
            placeholder="Message"
            className={Message.errorClass}
            value={Message.value}
            onChange={(e) =>
              setMessage({
                value: e.target.value,
                errorClass: "",
              })
            }
          />
        </Form.Group>

        <Row>
          <Col>
            {/*  BOTON */}
            <Button variant="btn" onClick={() => buttonHandler()}>
              Send Message
            </Button>
          </Col>
          <Col>
            <h1 className={formError?"h1Show": "h1Hide"}>Fill all the fills correctly</h1>
          </Col>
        </Row>
      </Form>

      <Anuncio
        //@ts-ignore
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
