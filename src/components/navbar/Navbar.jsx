import { useEffect, useRef, useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";
import { useLocale } from "../../context/LocaleContext";
import { profile } from "../../data/portfolioData";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const headerRef = useRef(null);
  const { theme, toggleTheme } = useTheme();
  const { content, language, toggleLanguage } = useLocale();
  const navItems = content.nav.map(([href, label]) => ({ href, label }));

  useEffect(() => {
    const sectionIds = ["home", ...navItems.map((item) => item.href.slice(1))];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    let frameId = 0;

    const updateScrollState = () => {
      frameId = 0;
      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 0);
      const progress = maxScroll > 0 ? Math.min(Math.max(scrollTop / maxScroll, 0), 1) : 0;
      headerRef.current?.style.setProperty("--scroll-progress", progress.toFixed(4));

      if (!sections.length) return;

      const sectionTops = sections.map((section) => section.getBoundingClientRect().top);
      if (sectionTops.every((top) => top === 0)) return;

      const activationLine = Math.max(112, Math.min(window.innerHeight * 0.34, 280));
      let currentSection = sections[0].id;

      sections.forEach((section, index) => {
        if (sectionTops[index] <= activationLine) currentSection = section.id;
      });

      if (maxScroll > 0 && scrollTop >= maxScroll - 2) {
        currentSection = sections.at(-1).id;
      }

      setActiveSection((current) => current === currentSection ? current : currentSection);
    };

    const scheduleUpdate = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(updateScrollState);
    };

    updateScrollState();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [language]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavigation = (event, href) => {
    if (!menuOpen) {
      setMenuOpen(false);
      return;
    }

    event.preventDefault();
    document.body.style.overflow = "";
    setMenuOpen(false);

    const target = document.getElementById(href.slice(1));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });

    if (window.location.hash !== href) {
      window.history.pushState(null, "", href);
    }
  };

  return (
    <header ref={headerRef} className="site-header">
      <nav className="nav container" aria-label={language === "vi" ? "Điều hướng chính" : "Main navigation"}>
        <a
          className={activeSection === "home" ? "nav-brand nav-brand--active" : "nav-brand"}
          href="#home"
          aria-current={activeSection === "home" ? "location" : undefined}
          onClick={(event) => handleNavigation(event, "#home")}
        >
          <span className="nav-brand__mark" aria-hidden="true">DT</span>
          <span>
            <strong>{profile.shortName}</strong>
            <small>{profile.title}</small>
          </span>
        </a>

        <div id="mobile-navigation" className={`nav-panel ${menuOpen ? "nav-panel--open" : ""}`}>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  className={activeSection === item.href.slice(1) ? "nav-link nav-link--active" : "nav-link"}
                  href={item.href}
                  aria-current={activeSection === item.href.slice(1) ? "location" : undefined}
                  onClick={(event) => handleNavigation(event, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="nav-mobile-contact" href="#contact" onClick={(event) => handleNavigation(event, "#contact")}>
            {content.navContact}
          </a>
        </div>

        <div className="nav-actions">
          <button
            className="nav-action nav-language"
            type="button"
            onClick={toggleLanguage}
            aria-label={content.switchLanguage}
            title={content.switchLanguage}
          >
            {language === "vi" ? "EN" : "VI"}
          </button>
          <button
            className="nav-action"
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "light" ? content.themeDark : content.themeLight}
          >
            {theme === "light" ? <FiMoon /> : <FiSun />}
          </button>
          <button
            className="nav-action nav-menu-button"
            type="button"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? content.menuClose : content.menuOpen}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
        <span className="nav-scroll-progress" aria-hidden="true" />
      </nav>
      {menuOpen && <button className="nav-backdrop" type="button" aria-label={content.menuClose} onClick={() => setMenuOpen(false)} />}
    </header>
  );
};

export default Navbar;
