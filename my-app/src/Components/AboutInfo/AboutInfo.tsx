import "./AboutInfo.css";

//@ts-ignore
export default function AboutInfo(props) {
  return (
    <>
      <span className="about-element">{props.titulo}</span>
      <span>{props.subtitulo}</span>
    </>
  );
}
