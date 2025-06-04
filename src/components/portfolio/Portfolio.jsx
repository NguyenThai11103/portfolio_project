import React, { useState } from "react";
import "./Portfolio.css";
import RelieflinkImg from "../../assets/images/relieflink.png";
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
      link: "#",
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
