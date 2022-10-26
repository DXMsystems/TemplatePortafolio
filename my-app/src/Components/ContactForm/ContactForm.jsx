import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./ContactForm.css";
import Anuncio from "./Anuncio";
import { isEmpty, mailError } from "./FormValidation";

export default function ContactForm() {
  const ERROR_CLASS = "form-control-error";
  const [formError, setformError] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [Name, setName] = useState({ value: "", errorClass: "" });
  const [Mail, setMail] = useState({ value: "", errorClass: "" });
  const [Subject, setSubject] = useState({ value: "", errorClass: "" });
  const [Message, setMessage] = useState({ value: "", errorClass: "" });
  //const url = "http://localhost:8000/contact-us";
  const url = window.location.pathname;

  const contactPost = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: Name.value,
        email: Mail.value,
        sub: Subject.value,
        msg: Message.value,
      }),
    };

    fetch(url, requestOptions).then((response) => console.log(response.status));
  };

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
    if (isEmpty(Mail.value) || mailError(Mail.value)) {
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
    if (hasError) {
      setformError(true);
    }
    return hasError;
  };

  const buttonHandler = () => {
    if (!formErrorHandler()) {
      contactPost();
      setModalShow(true);
      clearForm();
    }
    mailError();
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
            <h1 className={formError ? "h1Show" : "h1Hide"}>
              Fill all the fields correctly
            </h1>
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
