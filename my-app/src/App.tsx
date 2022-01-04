import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Trajectory from "./Pages/Trajectory";
import ContactUs from "./Pages/ContactUs";
import "./App.css";
import Layout from "./Pages/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about-me" element={<AboutUs/>}/>
        <Route path="/trajectory" element={<Trajectory/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
      </Route>
    </Routes>
  );
}

export default App;
