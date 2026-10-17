import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Skill from "./components/skill/Skill";
import Portfolio from "./components/portfolio/Portfolio";
import Credentials from "./components/credentials/Credentials";
import Contact from "./components/contact/Contact";
import { ThemeProvider } from "./context/ThemeContext";
import { LocaleProvider, useLocale } from "./context/LocaleContext";
import useScrollReveal from "./hooks/useScrollReveal";

function PortfolioApp() {
  const { content, language } = useLocale();
  useScrollReveal(language);

  return (
    <ThemeProvider>
      <a className="skip-link" href="#main-content">{content.skipLink}</a>
      <Navbar />
      <main id="main-content">
        <Home />
        <About />
        <Services />
        <Skill />
        <Portfolio />
        <Credentials />
        <Contact />
      </main>
    </ThemeProvider>
  );
}

function App() {
  return (
    <LocaleProvider>
      <PortfolioApp />
    </LocaleProvider>
  );
}

export default App;
