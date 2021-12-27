import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";
import Layout from "./Pages/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
