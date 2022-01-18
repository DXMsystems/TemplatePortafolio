import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import "./AboutUs.css";
import myPic from "./materials/info-pic.jpg";

export default function AboutUs() {
  return (
    <>
      <div className="container">
        <Container>
          <SectionTitle descripcion="Know me" title="About me" />
        </Container>

        <div className="info-section">
          <Row>
            <Col>
              <img src={myPic} className="info-pic" alt="about pic" />
            </Col>
            <Col>
              <h1 className="">Who am I?</h1>
              <h1 className="">
                I'm Emma Smith, a visual UX/UI Designer and Web Developer
              </h1>
              <p className="">
                I am a freelancer based in the United Kingdom and i have been
                building noteworthy UX/UI designs and websites for years, which
                comply with the latest design trends. I help convert a vision
                and an idea into meaningful and useful products. Having a sharp
                eye for product evolution helps me prioritize tasks, iterate
                fast and deliver faster.
              </p>
              <div className="rayita"></div>
              <Row>
                <Col>
                  <span>Name: </span>
                  <span>Jorge Sanchez</span>
                </Col>
                <Col>
                  <span> Email: </span>
                  <span>jrgels99@gmail.com</span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span>Age: </span>
                  <span>22</span>
                </Col>
                <Col>
                  <span>From: </span>
                  <span>Mexico City</span>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="div-pic"></div>
        </div>
      </div>
    </>
  );
}
