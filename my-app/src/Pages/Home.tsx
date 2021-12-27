import React from "react";
import Header from "../Components/Header/Header";
//@ts-ignore
import video from "../Pages/materials/hacker.mp4";
import "./Home.css"

const Home = () => {
  return (
    <div>
      <h1 className="texto">Nombre Apellido</h1>
      <video autoPlay loop muted className="background-video">
        <source src={video} type="video/mp4"/>
      </video>
    </div>
  )
};

export default Home;
