import { Col, Row } from "react-bootstrap";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import "./Trajectory.css";
import Subsection from "../Components/Subsection/Subsection";
import TrajectoryCard from "../Components/TrajectoryCard/TrajectoryCard";
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
          {/* Para mas iconos: https://devicon.dev/ */}
          <Row>
            <Col className="about-col--icons">
              <AboutCard
                iconClass="devicon-ubuntu-plain"
                cardTitle="Linux Servers"
                cardText="Experience with Linux Servers based on Debian/Ubuntu"
              />
            </Col>
            <Col className="about-col--icons">
              <AboutCard
                iconClass="devicon-react-original"
                cardTitle="React / React Native"
                cardText="Solid knowledge for web and app development with React"
              />
            </Col>
            <Col className="about-col--icons">
              <AboutCard
                iconClass="devicon-javascript-plain"
                cardTitle="JavaScript"
                cardText="Experience using JS for Frontend and Programs"
              />
            </Col>
          </Row>

          <Row>
            <Col className="about-col--icons">
              <AboutCard
                iconClass="devicon-python-plain"
                cardTitle="Python"
                cardText="Experience developing programs with Python"
              />
            </Col>
            <Col className="about-col--icons">
              <AboutCard
                iconClass="devicon-docker-plain"
                cardTitle="Docker"
                cardText="Experience creating containers, images, docker-compose and dockerfiles"
              />
            </Col>
            <Col className="about-col--icons">
              <AboutCard
                iconClass="devicon-android-plain"
                cardTitle="App Development"
                cardText="Knowledge developing Android and IOS apps with React Native "
              />
            </Col>
          </Row>
        </div>

        <Subsection description="Some of my achievements" title=" Resume" />
        <div className="ed-ex"></div>
        <Row>
          <h1 className="Col-tit">Education & experience</h1>
        </Row>

        <Row>
          <Col className="about-col--icons">
            <TrajectoryCard
              tit="Computer Engineering"
              sub="UNAM | FES ARAGON 2018-2022"
              txt="I have learned: Programming, Networks,
              Creation of Databases (SQL),
              Design and implementation of electronic circuits through the use of programmable logic circuits (PIC) and Arduino,
              Cloud Computing with AWS"
            />
          </Col>
          <Col className="about-col--icons">
            <TrajectoryCard
              tit="Freelance Project Manager"
              sub="Web Development | 2021"
              txt="Responsible for the coordination, planning and implementation of web pages,
              Responsible of the Front-End development using React JS and TypeScript,
              I set up Linux servers using Debian, Docker and NGINX"
            />
          </Col>
        </Row>

        <Row>
          <Col className="about-col--icons">
            <TrajectoryCard
              tit="Space Instrumentation Laboratory"
              sub="UNAM | LINX 2022 to date"
              txt="Development of a satellite simulation environment with Python. Develop an AI Service Deployment System Using Edge Computing and TensorFlow for the CubeSat Nano-SWAI"
            />
          </Col>
          <Col className="about-col--icons">
            <TrajectoryCard
              tit="Web Development"
              sub="Sonderu | 2022 to date"
              txt="Full Stack web development"
            />
          </Col>
        </Row>
      </div>
    </>
  );
}
