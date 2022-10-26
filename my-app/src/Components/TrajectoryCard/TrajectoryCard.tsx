import { Card } from "react-bootstrap";
import "./TrajectoryCard.css";

//@ts-ignore
export default function TrajectoryCard(props) {
  return (
  <Card className="card-tr card__trajectory--skills">
    <Card.Body>
      <span className="item-arrow"></span>
      <Card.Title className="cardTit-tr">{props.tit}</Card.Title>
      <Card.Subtitle className="cardSub-tr">{props.sub}</Card.Subtitle>
      <Card.Text className="cardtxt-tr">{props.txt}.</Card.Text>
    </Card.Body>
  </Card>
);
}
