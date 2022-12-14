import React, { useCallback } from "react";
import Particles from "react-particles";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import { loadFull } from "tsparticles";
import Navbar from "./components/Navbar"
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import Projects from "./components/Projects/Projects"
import Resume from "./components/Resume/Resume"
import About from "./components/About/About";
import logo from "./logo.svg";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"
import particlesOptions from "./particles.json";


function App() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
    <Router>
      <div className="App">
        <Particles options={particlesOptions} init={particlesInit} />
        <Navbar />
        <Routes>
          <Route path="/MJKPortfolio" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/project" exact element={<Projects />} />
          <Route path="/resume" exact element={<Resume />} />
          <Route
        path="*"
        element={<Navigate to="/MJKPortfolio" replace />}
    />       
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
