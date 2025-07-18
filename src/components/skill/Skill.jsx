import React from 'react';
import './Skill.css';

const Skill = () => {
  const skills = [
    {
      id: 1,
      name: 'VueJS',
      image: 'https://flexdash.github.io/docs/developing-widgets/vue-logo.png',
      class: 'vue'
    },
    {
      id: 2,
      name: 'React',
      image: 'https://th.bing.com/th/id/OIP.HLxLvGJV-6r8ZR8AK4F9KAHaEO?rs=1&pid=ImgDetMain',
      class: 'react'
    },
    {
      id: 3,
      name: 'JavaScript',
      image: 'https://th.bing.com/th/id/OIP._Tf_ut9cHRc_alfQPj9gUAHaHa?rs=1&pid=ImgDetMain',
      class: 'js'
    },
    {
      id: 4,
      name: 'HTML/CSS',
      image: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png',
      class: 'html'
    },
    {
      id: 5,
      name: 'Git',
      image: 'https://www.20i.com/blog/wp-content/uploads/2022/08/git-blog-header.png',
      class: 'git'
    },
    {
      id: 6,
      name: 'SQL',
      image: 'https://logospng.org/download/mysql/mysql-512.png',
      class: 'sql'
    },
    {
      id: 7,
      name: 'PHP',
      image: 'https://logowik.com/content/uploads/images/php.jpg',
      class: 'php'
    },
    {
      id: 8,
      name: 'Canva',
      image: 'https://freelogopng.com/images/all_img/1656734305canva-app-icon.png',
      class: 'canva'
    }
  ];

  return (
    <div className="skills">
      <div className="skills-container">
        <h4>Skills & Abilities</h4>
        <div className="skill-cards">
          {skills.map((skill) => (
            <div key={skill.id} className="skill-card">
              <div className="skill-icon">
              </div>
              <img src={skill.image} alt={skill.name} className="skill-image" />
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
