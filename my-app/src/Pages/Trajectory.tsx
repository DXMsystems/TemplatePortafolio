import { Card, Col, Row } from "react-bootstrap";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import "./Trajectory.css"
import TrajectoryCard from "../Components/TrajectoryCard/TrajectoryCard";

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
            {/* <div>
              <Card className="card-tr">
                <Card.Body>
                  <span className="item-arrow"></span>
                  <Card.Title className="cardTit-tr">Computer Science</Card.Title>
                  <Card.Subtitle className="cardSub-tr">UNAM 2018 - 4eva</Card.Subtitle>
                  <Card.Text className="cardtxt-tr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</Card.Text>
                </Card.Body>
              </Card>
            </div> */}
            <TrajectoryCard tit="Computer Engineering" sub="UNAM 2018-2022" txt="No aprendi ni berga jeje xD"/>

          </Col>
          <Col>
            
          </Col>
        </Row>
        
      </div>
    </>
  );
}
