import "./AboutInfo.css";

//@ts-ignore
export default function AboutInfo(props) {
  return (
    <>
      {props.titulo == "Email:" ? (
        <>
          <span className="about-element">{props.titulo}</span>
          <a href="mailto:jrgels99@gmail.com" className="about-element">{props.subtitulo}</a>
        </>
      ) : (
        <>
          <span className="about-element">{props.titulo}</span>
          <span>{props.subtitulo}</span>
        </>
      )}
    </>
  );
}
