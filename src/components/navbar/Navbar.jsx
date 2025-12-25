import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const info = {
    name: "Nguyễn Thái",
    role: "Fullstack Developer",
  };
  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav__logo">
          <div className="nav__profile-info">
            <h3 className="nav__profile-name">{info.name}</h3>
            <p className="nav__profile-role">{info.role}</p>
          </div>
        </div>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={
                  activeNav === "#services"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-briefcase-alt"></i> Services
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery"></i> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message"></i> Contact
              </a>
            </li>
          </ul>

          <div className="nav__close" onClick={() => setToggle(!toggle)}>
            <i className="uil uil-times"></i>
          </div>
        </div>

        <div className="nav__social">
          {/* <a href="#" className="nav__social-link">
            <i className="uil uil-facebook-f"></i>
          </a>
          <a href="#" className="nav__social-link">
            <i className="uil uil-twitter"></i>
          </a>
          <a href="#" className="nav__social-link">
            <i className="uil uil-instagram"></i>
          </a> */}
        </div>

        <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
