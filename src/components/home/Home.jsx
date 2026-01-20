import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

import "./Home.css";
import avatar from "../../assets/images/ava.jpg";

const Home = () => {
  return (
    <section className="home">
      {/* Background elements */}
      <div className="gradient-bg"></div>
      <div className="particle particle-blue"></div>
      <div className="particle particle-pink"></div>
      <div className="particle particle-yellow"></div>
      <div className="particle particle-purple"></div>

      <div className="home-container">
        <div className="home-intro">
          <div className="home-content">
            <div className="home-title">
              <h2 className="greeting">Hello, I'm</h2>
              <h1 className="name">Nguyễn Ngọc Duy Thái</h1>
              <h2 className="role">Fullstack Developer</h2>
            </div>

            <div className="home-buttons">
              <Link to="/contact" className="btn primary-btn">
                Contact Me
              </Link>
              <Link to="/projects" className="btn secondary-btn">
                View Projects
              </Link>
            </div>
            <ul class="example-1">
              <li class="icon-content">
                <a
                  class="link"
                  data-social="github"
                  aria-label="Github"
                  href=""
                >
                  <FaGithub />
                </a>
                <div class="tooltip">Github</div>
              </li>
              <li class="icon-content">
                <a
                  class="link"
                  data-social="facebook"
                  aria-label="Facebook"
                  href="/"
                >
                  <FaFacebook />
                </a>
                <div class="tooltip">Facebook</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="home-visual">
          <div className="profile-container">
            <div className="profile-image">
              <img src={avatar} alt="Profile" />
            </div>
            <div className="profile-decoration circle-1"></div>
            <div className="profile-decoration circle-2"></div>
            <div className="profile-decoration circle-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
