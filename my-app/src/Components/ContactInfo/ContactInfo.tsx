import { Col, Row } from "react-bootstrap";
import "./ContactInfo.css";
import "../SectionTitle/SectionTitle.css";

//@ts-ignore
export default function ContactInfo(props) {
  const mail = props.mail;
  const link = props.link;
  return (
    <>
      <Row>
        <div className="diviciondeAhuevo">
          <i className={"iconos bi " + props.iconClass}></i>
        </div>
        <Col className="borde__contact-item" xs={10}>
          <h1 className="item__info-item">{props.titulo}</h1>
          {mail ? (
            <a href="mailto:jrgels99@gmail.com" className="itemDescription">
              {props.texto}
            </a>
          ) : link ? (
            <a href={props.link} className="itemDescription">
              {props.texto}
            </a>
          ) : (
            <p className="itemDescription">{props.texto}</p>
          )}
        </Col>
      </Row>
    </>
  );
}