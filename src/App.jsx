import Navbar from "./conponents/Navbar.jsx";
import Footer from "./conponents/Footer.jsx";

import Hero from "./conponents/Hero.jsx";
import Project from "./Project.jsx";
// import Skill from "./Skill.jsx";
import About from "./Aboutme.jsx";
import Contact from "./Contact.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Project />
      {/* <Skill /> */}
      <About />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
