import React, { useState } from "react";
import "./Portfolio.css";
import {
  RelieflinkImg,
  EDUBRIDGETRACE,
  AgriTrace,
  CityResQ360,
} from "../../assets/images";
const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Relieflink",
      category: "web",
      image: RelieflinkImg,
      description:
        "A full-featured e-commerce platform built with React and Node.js",
      link: "https://github.com/NguyenThai11103/DTU-Relieflink-documents",
    },
    {
      id: 2,
      title: "EduBridgeTrace",
      category: "web",
      image: EDUBRIDGETRACE,
      description:
        "A full-featured education platform built with blockchain technology",
      link: "https://vietvo371.github.io/EduTraceBridge_docs/GettingStarted/",
    },
    {
      id: 3,
      title: "AgriTrace",
      category: "web",
      image: AgriTrace,
      description:
        "A full-featured agriculture platform built with blockchain technology",
      link: "#",
    },
    {
      id: 4,
      title: "CityResQ360",
      category: "web",
      image: CityResQ360,
      description:
        "A full-featured smart-city platform built with microservices architecture",
      link: "https://nguyenthai11103.github.io/DTU-CityResQ360-documents/intro",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">
        <h2 className="section-title">My Portfolio</h2>
        <div className="portfolio-filters">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`filter-btn ${filter === "web" ? "active" : ""}`}
            onClick={() => setFilter("web")}
          >
            Web Apps
          </button>
          <button
            className={`filter-btn ${filter === "mobile" ? "active" : ""}`}
            onClick={() => setFilter("mobile")}
          >
            Mobile Apps
          </button>
        </div>
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div className="portfolio-item" key={project.id}>
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <div className="portfolio-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href={project.link} className="portfolio-link">
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
