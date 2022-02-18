import { Form, Button, Container, Row, Col } from "react-bootstrap";
import ContactForm from "../Components/ContactForm/ContactForm";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import ContactInfo from "../Components/ContactInfo/ContactInfo";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <Container>
      <SectionTitle
        descripcion="Feel free to contact me anytime"
        title="Get In Touch"
      />

      <Row>
        <Col xs={12} md={6} className="contact-form-col">
          <ContactForm />
        </Col>

        <Col xs={12} md={6}> 
          <h1 className="subtitulo">Contact Info</h1>
          <p className="contactText">
            Always available for freelance work. Feel free to contact me!
          </p>
          
          <ContactInfo iconClass="bi-file-person-fill" titulo="Name" texto="Jorge Sanchez"/>
          <ContactInfo iconClass="bi-geo-alt-fill" titulo="Location" texto="Mexico City, Mexico."/>
          <ContactInfo iconClass="bi-send" titulo="Email me" texto="jrgels99@gmail.com" mail={true}/>
          <ContactInfo iconClass="bi-linkedin" titulo="LinkedIn" texto="Check out my Linkedin" link="https://www.linkedin.com/in/jorge-luis-s%C3%A1nchez-ch%C3%A1vez-55ba9322a/"/>
          <ContactInfo iconClass="bi-github" titulo="GitHub" texto="Check out my GitHub" link="https://github.com/Jrgels"/>
        </Col>
      </Row>
    </Container>
  );
}
