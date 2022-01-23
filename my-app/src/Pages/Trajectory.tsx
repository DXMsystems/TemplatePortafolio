import { Col, Row } from "react-bootstrap";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import "./Trajectory.css"

export default function Trajectory() {
  return (
    <>
      <div className="container">
        <SectionTitle descripcion="Check out my Trajectory" title="Trajectory"/>

        <div className="ed-ex"></div>
        <Row>
          <Col>
          <h1 className="Col-tit">Education</h1>
          </Col>
          <Col>
          <h1 className="Col-tit">Experience</h1>
          </Col>
        </Row>

        <Row>
          <Col>
            <h1 className="Box-title">Computer Engineering</h1>
          </Col>
        </Row>
        
      </div>
    </>
  );
}
