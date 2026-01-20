import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Loading from "./components/loading/Loading";
import { ThemeProvider } from "./context/ThemeContext";

// Lazy load heavy components for better initial load performance
const About = lazy(() => import("./components/about/About"));
const Skill = lazy(() => import("./components/skill/Skill"));
const Services = lazy(() => import("./components/services/Services"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const Contact = lazy(() => import("./components/contact/Contact"));

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Home />
        <Suspense fallback={<Loading />}>
          <About />
          <Skill />
          <Services />
          <Portfolio />
          <Contact />
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
