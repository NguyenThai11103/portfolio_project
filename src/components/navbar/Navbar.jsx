import { useEffect, useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";
import { useLocale } from "../../context/LocaleContext";
import { profile } from "../../data/portfolioData";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();
  const { content, language, toggleLanguage } = useLocale();
  const navItems = content.nav.map(([href, label]) => ({ href, label }));

  useEffect(() => {
    const sectionIds = ["home", ...navItems.map((item) => item.href.slice(1))];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0.01, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [language]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <nav className="nav container" aria-label={language === "vi" ? "Điều hướng chính" : "Main navigation"}>
        <a className="nav-brand" href="#home" onClick={() => setMenuOpen(false)}>
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
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="nav-mobile-contact" href={`mailto:${profile.email}`}>
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
      </nav>
      {menuOpen && <button className="nav-backdrop" type="button" aria-label={content.menuClose} onClick={() => setMenuOpen(false)} />}
    </header>
  );
};

export default Navbar;
