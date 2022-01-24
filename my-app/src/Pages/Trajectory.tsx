import { Card, Col, Row } from "react-bootstrap";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import "./Trajectory.css";
import TrajectoryCard from "../Components/TrajectoryCard/TrajectoryCard";
import Subsection from "../Components/Subsection/Subsection";
import TrajectorySkills from "../Components/TrajectorySkills/TrajectorySkills";


export default function Trajectory() {
  return (
    <>
      <div className="container">
        <SectionTitle
          descripcion="Check out my Trajectory"
          title="Trajectory"
        />
      
      <TrajectorySkills url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" cardTitle="Bootstrap" cardText="High"/>


        <Subsection
          description="Some of my achievements"
          title=" Resume"
        />
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
            <TrajectoryCard
              tit="Computer Engineering"
              sub="UNAM 2018-2022"
              txt="No aprendi ni berga jeje xD"
            />
          </Col>
          <Col>
            <TrajectoryCard
              tit="Prepa 6"
              sub="UNAM 2018-2022"
              txt="No aprendi ni berga jeje xD"
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <TrajectoryCard
              tit="Camara que digo?"
              sub="UNAM 2018-2022"
              txt="No aprendi ni berga jeje xD"
            />
          </Col>
          <Col>
            <TrajectoryCard
              tit="Jeje te menti, no tengo experiencia xD"
              sub="UNAM 2018-2022"
              txt="No aprendi ni berga jeje xD"
            />
          </Col>
        </Row>
      </div>
    </>
  );
}
