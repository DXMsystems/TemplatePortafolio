import { Form, Button, Container, Row, Col } from "react-bootstrap";
import ContactForm from "../Components/ContactForm/ContactForm";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import ContactInfo from "../Components/ContactInfo/ContactInfo";

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
          
          <ContactInfo iconClass="bi-file-person-fill" titulo="Nombre" texto="Jorge Sanchez"/>
          <ContactInfo
            iconClass="bi-geo-alt-fill"
            titulo="Location"
            texto="Ciudad de México, México."
          />
          <ContactInfo iconClass="bi-send" titulo="Email me" texto="jrgels99@gmail.com" mail={true}/>
          <ContactInfo iconClass="bi-linkedin" titulo="Linkedin" texto="Check out my Linkedin"/>
        </Col>
      </Row>
    </Container>
  );
}
