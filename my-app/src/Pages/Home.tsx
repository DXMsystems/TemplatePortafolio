import React from "react";
import Header from "../Components/Header/Header";
//@ts-ignore
import video from "../Pages/materials/hacker.mp4";
import "./Home.css"

const Home = () => {
  return (
    <div>
      homehomehome
      <video autoPlay loop muted className="background-video">
        <source src={video} type="video/mp4"/>
      </video>
    </div>
  )
};

export default Home;
