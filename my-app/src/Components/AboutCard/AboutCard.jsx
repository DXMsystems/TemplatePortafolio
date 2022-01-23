import { Card } from "react-bootstrap";
import "./AboutCard.css";

//@ts-ignore
export default function AboutCard(props) {
  return (
    <div className="service">
      <Card className="card">
        <i className={"service-icon " + props.iconClass}></i>
        <Card.Body>
          <Card.Title className="card-title">{props.cardTitle}</Card.Title>
          <Card.Text className="card-text">{props.cardText}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
