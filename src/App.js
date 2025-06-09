import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Services from "./components/services/Services";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Testimonials from "./components/testimonials/Testimonials";
import Resume from "./components/resume/Resume";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Navbar from "./components/navbar/Navbar";
import Skill from "./components/skill/Skill";

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <About />
      <Skill/>
      <Services />
      <Portfolio />
      <Contact />
    </Router>
  );
}

export default App;
