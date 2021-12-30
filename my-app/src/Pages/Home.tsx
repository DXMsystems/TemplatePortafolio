import React from "react";
import Header from "../Components/Header/Header";
//@ts-ignore
import video from "../Pages/materials/hacker.mp4";
import "./Home.css"
import "./typingEfect/app"
import "./typingEfect/style.css"

const Home = () => {
  return (
    <div className="home-container">
      <div className="name-container">
      <h1 className="texto">Jorge Sanchez</h1>
      </div>
        <div className="hero">
          <h1 className="title">I'm a</h1>
          <h1 className="typewrite"></h1>
        </div>
      <video autoPlay loop muted className="background-video">
        <source src={video} type="video/mp4"/>
      </video>
    </div>
  )
};

export default Home;
