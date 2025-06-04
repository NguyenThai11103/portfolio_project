import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <div className="nav__profile">
          <div className="nav__profile-img">
            <img src="./ava.jpg" alt="profile" />
          </div>
          <div className="nav__profile-info">
            <h3 className="nav__profile-name">Your Name</h3>
            <p className="nav__profile-role">Web Developer</p>
          </div>
        </div>

        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a
                  href="#home"
                  onClick={() => setActiveNav("#home")}
                  className={
                    activeNav === "#home"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-estate"></i>
                  <span>Home</span>
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#about"
                  onClick={() => setActiveNav("#about")}
                  className={
                    activeNav === "#about"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-user"></i>
                  <span>About</span>
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
                  <i className="uil uil-briefcase-alt"></i>
                  <span>Services</span>
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#resume"
                  onClick={() => setActiveNav("#resume")}
                  className={
                    activeNav === "#resume"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-graduation-cap"></i>
                  <span>Resume</span>
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
                  <i className="uil uil-scenery"></i>
                  <span>Portfolio</span>
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#blog"
                  onClick={() => setActiveNav("#blog")}
                  className={
                    activeNav === "#blog"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-file-alt"></i>
                  <span>Blog</span>
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
                  <i className="uil uil-message"></i>
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav__social">
          <a href="#" className="nav__social-link">
            <i className="uil uil-facebook-f"></i>
          </a>
          <a href="#" className="nav__social-link">
            <i className="uil uil-twitter"></i>
          </a>
          <a href="#" className="nav__social-link">
            <i className="uil uil-instagram"></i>
          </a>
        </div>

        <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
          <i className={toggle ? "uil uil-times" : "uil uil-bars"}></i>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
