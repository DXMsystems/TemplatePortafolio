import React from 'react'
import { Col, Row } from 'react-bootstrap'
import "./ContactInfo.css"
import "../SectionTitle/SectionTitle.css"

//@ts-ignore
export default function ContactInfo(props) {
    return (
        <>
        <h1 className="subtitulo">Contact Info</h1>
          <p className="contactText">
            Always available for freelance work if the right project comes
            along, Feel free to contact me!
          </p>
          <Row>
            <Col className="borde__contact-item" xs={1}>
            
            </Col>
            <Col xs={11}>
              <h1 className="item__info-item">{props.titulo}</h1>
              <p className="itemDescription">{props.texto}</p>
            </Col>
            
          </Row>
          </>
    )
}
            