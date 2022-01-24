import { Card } from "react-bootstrap";
import "./TrajectorySkills.css";

//@ts-ignore
export default function TrajectorySkills(props) {
  return <div>
      <Card className="card">
        <img className={"service-icon "} src={props.url} ></img>
        <Card.Body>
          <Card.Title className="card-title">{props.cardTitle}</Card.Title>
          <Card.Text className="card-text">{props.cardText}</Card.Text>
        </Card.Body>
      </Card>
  </div>;
}
