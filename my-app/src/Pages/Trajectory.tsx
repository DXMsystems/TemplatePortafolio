import { Col, Row } from "react-bootstrap";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import "./Trajectory.css";
import TrajectoryCard from "../Components/TrajectoryCard/TrajectoryCard";
import Subsection from "../Components/Subsection/Subsection";
import AboutCard from "../Components/AboutCard/AboutCard";

export default function Trajectory() {
  return (
    <>
      <div className="container">
        <SectionTitle
          descripcion="Check out my Trajectory"
          title="Trajectory"
        />

        <div>
          <h1 className="Subtt">Lenguajes & technologies</h1>
          <Row>
            <Col>
              <AboutCard iconClass="devicon-debian-plain"
              cardTitle="Debian"
              cardText="Nos rifamos con tus servidores Debian"/>
            </Col>
            <Col>

            </Col>
            <Col>
            </Col>
          </Row>
        </div>

        <Subsection description="Some of my achievements" title=" Resume" />
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
