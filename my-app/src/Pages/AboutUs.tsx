import { Container, Row, Col, Button, Card } from "react-bootstrap";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import "./AboutUs.css";
import myPic from "./materials/info-pic.jpg";
import AboutInfo from "../Components/AboutInfo/AboutInfo";
import Subsection from "../Components/Subsection/Subsection";

export default function AboutUs() {
  return (
    <>
      <div className="container">
        <SectionTitle descripcion="Know me" title="About me" />

        <div className="info-section">
          <Row>
            <Col xs={5}>
              <img src={myPic} className="info-pic" alt="about pic" />
            </Col>
            <Col>
              <h1 className="green-title">Who am I?</h1>
              <h1 className="subtitulo-blanco">
                I'm Jorge Sanchez, a Software Engineer and Web Developer
              </h1>
              <p className="p-about">
                I am a freelancer based in Mexico City and i have been building
                noteworthy UX/UI designs and websites for years, which comply
                with the latest design trends. I help convert a vision and an
                idea into meaningful and useful products. Having a sharp eye for
                product evolution helps me prioritize tasks, iterate fast and
                deliver faster.
              </p>
              <div className="content-info">
                <Row>
                  <Col>
                    <AboutInfo titulo="Nombre:" subtitulo="Jorge Sanchez" />
                  </Col>
                  <Col>
                    <AboutInfo titulo="Email:" subtitulo="jrgels99@gmail.com" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <AboutInfo titulo="Age:" subtitulo="22" />
                  </Col>
                  <Col>
                    <AboutInfo titulo="From:" subtitulo="Mexico City" />
                  </Col>
                </Row>
              </div>
              <div className="bottom-elements">
                <Button variant="btn">
                  Download CV
                </Button>
              </div>
            </Col>
          </Row>
          <div className="div-pic"></div>
        </div>

        <Subsection description="Services I offer" title="My Services" />
        <Row>
          <Col>
            <div className="service">
            <Card className="card">
              {/* <Card.Img className="bi bi-code"/> */}
              <i className="bi bi-code"></i>
              <Card.Body>
                <Card.Title className="card-title">Design Trends</Card.Title>
                <Card.Text className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Card.Text>
              </Card.Body>

            </Card>
            </div>
            
          </Col>
          <Col>
            <Card>

            </Card>
          </Col>
          <Col>
            <Card></Card>
          </Col>
        </Row>

        <Row>
          <Col>
          <Card></Card>
          </Col>
          <Col>
          <Card></Card>
          </Col>
          <Col>
          <Card></Card>
          </Col>
        </Row>


      </div>
    </>
  );
}
