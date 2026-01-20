import React from "react";
import "./Skill.css";
import * as skillIcons from "../../assets/images/skills";

const Skill = () => {
  const skills = [
    {
      id: 1,
      name: "VueJS",
      image: skillIcons.vueIcon,
      class: "vue",
    },
    {
      id: 2,
      name: "React",
      image: skillIcons.reactIcon,
      class: "react",
    },
    {
      id: 3,
      name: "JavaScript",
      image: skillIcons.jsIcon,
      class: "js",
    },
    {
      id: 4,
      name: "HTML/CSS",
      image: skillIcons.htmlCssIcon,
      class: "html",
    },
    {
      id: 5,
      name: "Git",
      image: skillIcons.gitIcon,
      class: "git",
    },
    {
      id: 6,
      name: "SQL",
      image: skillIcons.mysqlIcon,
      class: "sql",
    },
    {
      id: 7,
      name: "Laravel",
      image: skillIcons.laravelIcon,
      class: "laravel",
    },
    {
      id: 8,
      name: "Canva",
      image: skillIcons.canvaIcon,
      class: "canva",
    },
  ];

  return (
    <div className="skills">
      <div className="skills-container">
        <h4>Skills & Abilities</h4>
        <div className="skill-cards">
          {skills.map((skill) => (
            <div key={skill.id} className="skill-card">
              <div className="skill-icon"></div>
              <img
                src={skill.image}
                alt={skill.name}
                className="skill-image"
                loading="lazy"
              />
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
