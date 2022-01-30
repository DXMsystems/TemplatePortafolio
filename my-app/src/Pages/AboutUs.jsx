import { Row, Col, Button, Card } from "react-bootstrap";
import { saveAs } from "file-saver";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import "./AboutUs.css";
import myPic from "./materials/info-pic.jpg";
import AboutInfo from "../Components/AboutInfo/AboutInfo";
import Subsection from "../Components/Subsection/Subsection";
import AboutCard from "../Components/AboutCard/AboutCard";

export default function AboutUs() {
  const saveFile = () => {
    saveAs("http://localhost:8000/about-me/curriculum.pdf", "CV.pdf");
  };

  return (
    <>
      <div className="container">
        <SectionTitle descripcion="Know me" title="About me" />

        <div className="info-section">
          <Row>
            <Col xs={12} md={6}>
              <div className="div-pic">
                <img src={myPic} className="info-pic" alt="about pic" />
              </div>
            </Col>
            <Col xs={12} md={6}>
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
                <Button variant="btn" onClick={saveFile}>
                  Download CV
                </Button>
              </div>
            </Col>
          </Row>
          <div className="div-pic"></div>
        </div>

        <Subsection
          description="We offer several IT solutions"
          title="My Services"
        />
        {/* PARA BUSCAR NUEVOS ICONOS: https://icons.getbootstrap.com/icons/cpu-fill/ */}
        <Row>
          <Col className="about-col--icons">
            <AboutCard
              iconClass="bi bi-code"
              cardTitle="Design Trends"
              cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
          </Col>
          <Col className="about-col--icons">
            <AboutCard
              iconClass="bi bi-wordpress"
              cardTitle="Web Development"
              cardText="fdsafdgfdasga"
            />
          </Col>
          <Col className="about-col--icons">
            <AboutCard
              iconClass="bi bi-tablet"
              cardTitle="App Development"
              cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
            />
          </Col>
        </Row>

        <Row>
          <Col className="about-col--icons">
            <AboutCard
              iconClass="bi bi-robot"
              cardTitle="Process Automation"
              cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
            />
          </Col>
          <Col className="about-col--icons">
            <AboutCard
              iconClass="bi bi-info-circle"
              cardTitle="IT consulting"
              cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
            />
          </Col>
          <Col className="about-col--icons">
            <AboutCard
              iconClass="bi bi-pc-display-horizontal"
              cardTitle="Ya no se que poner"
              cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
            />
          </Col>
        </Row>
      </div>
    </>
  );
}
