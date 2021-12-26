import React from "react";
import Header from "../Components/Header/Header";
//@ts-ignore
import video from "../Pages/materials/hacker.mp4";

const Home = () => {
  return (
    <div>
      homehomehome
      <video autoPlay loop muted
      style={{
        position:"absolute",
        width:"100%",
        left:"50%",
        top:"50%",
        height:"100%",
        objectFit:"cover",
        transform:"translate(-50%, -50%)",
        zIndex: "-1"
      }}>
        <source src={video} type="video/mp4"/>
      </video>
    </div>
  )
};

export default Home;
