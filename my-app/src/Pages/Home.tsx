import { useEffect } from "react";
//@ts-ignore
import video from "../Pages/materials/hacker.mp4";
import "./Home.css";
import "../Components/SectionTitle/SectionTitle.css"
import typeWritterEffect from "../Pages/typingEfect/app";
import "./typingEfect/style.css";
import HamburguerMenu from "../Components/HamburguerMenu/HamburguerMenu";

const Home = () => {
  useEffect(() => {
    typeWritterEffect();
  }, []);

  return (
    <div className="home-container">
      <HamburguerMenu></HamburguerMenu>
      <div className="name-container">
        <h1 className="titulo">Jorge Sanchez</h1>
      </div>
      <div className="hero">
        <h1 className="title">I'm a </h1>
        <h1 className="typewrite"></h1>
      </div>
      <video autoPlay loop muted className="background-video">
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Home;
