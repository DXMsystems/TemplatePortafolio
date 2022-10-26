import { Row, Col, Button, Card } from "react-bootstrap";
import { saveAs } from "file-saver";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import "./AboutUs.css";
import myPic from "./materials/info-pic.jpg";
import AboutInfo from "../Components/AboutInfo/AboutInfo";

export default function AboutUs() {
  const saveFile = () => {
    saveAs(window.location.pathname + "/curriculum.pdf", "Jorge_Luis_Sanchez_Chavez_CV.pdf");
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
                I am a freelancer based in Mexico City and I have been building
                noteworthy UX/UI designs and websites for years, which comply
                with the latest design trends. I help convert a vision and an
                idea into meaningful and useful products. Having a sharp eye for
                product evolution helps me prioritize tasks, iterate fast and
                deliver faster.
              </p>
              <div className="content-info">
                <Row>
                  <Col>
                    <AboutInfo titulo="Name:" subtitulo="Jorge Sanchez" />
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
      </div>
    </>
  );
}
