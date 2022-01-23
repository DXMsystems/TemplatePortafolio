import "./Subsection.css";

//@ts-ignore
export default function Subsection(props) {
  return (
    <div>
      <h1 className="subsection-description">{props.description}</h1>
      <h1 className="subsection-title">{props.title}</h1>
    </div>
  );
}
