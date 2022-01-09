import "./SectionTitle.css";

//@ts-ignore
function SectionTitle(props) {
  return (
    <div>
      <h1 className="descripcion">{props.descripcion}</h1>
      <h1 className="titulo">{props.title}</h1>
    </div>
  );
}

export default SectionTitle;
