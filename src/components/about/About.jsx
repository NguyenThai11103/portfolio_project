import React from "react";
import "./About.css";
import avatar from "../../assets/images/ava.jpg";
import { FaArrowCircleRight } from "react-icons/fa";

const About = () => {
  const info = {
    name: "Nguyễn Ngọc Duy Thái",
    email: "kkdn011@gmail.com",
    address: "Da Nang, Viet Nam",
    phone: "0775585746",
    date: "01-11-2003",
  };
  const experience = [
    {
      year: "2023-2025",
      title: "Developer",
      company: "DZ FULLSTACK",
      desc: "Led and executed both in-house and client web development projects from concept to deployment. Delivered high-quality solutions on time, optimized performance, and ensured user-friendly interfaces. Consistently achieved top client satisfaction ratings, contributing to the company’s reputation for excellence.",
    },
    {
      year: "2022-2023",
      title: "Intern Developer",
      company: "DZ FULLSTACK",
      desc: "Assisted senior developers in building and maintaining web applications. Gained hands-on experience in front-end and back-end development, debugging, and version control. Collaborated in team projects, applied coding best practices, and contributed to delivering functional prototypes to clients.",
    },
    {
      year: "2021-Present",
      title: "Bachelor of Information Technology",
      company: "Duy Tan University",
      desc: "Currently pursuing a Bachelor’s degree in Information Technology. Focused on software development, database management, and web technologies. Actively participating in academic projects and extracurricular activities to enhance both technical and teamwork skills.",
    },
  ];
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div
          className="about-top"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            marginBottom: "2.5rem",
          }}
        >
          <div
            className="about-image"
            style={{
              maxWidth: "350px",
              flex: "0 0 350px",
              marginRight: "2.5rem",
            }}
          >
            <div className="image-container">
              <img src={avatar} alt="Profile" />
              <ul className="social-media">
                <li>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                </li>
              </ul>
              <div className="card-info">
                <div className="title">Nguyễn Ngọc Duy Thái</div>
                <div className="subtitle">Fullstack Developer</div>
              </div>
            </div>
          </div>
          <div className="about-text" style={{ flex: 1 }}>
            <p className="about-description">
              Tôi là một Fullstack Developer đam mê với việc tạo ra những trải
              nghiệm người dùng tuyệt vời. Với kiến thức vững chắc về các công
              nghệ web hiện đại, tôi luôn cố gắng tạo ra những ứng dụng web đẹp
              mắt, thân thiện và hiệu quả.
            </p>
            <div className="personal-info">
              <div className="info-item">
                <span className="info-label">Tên:</span>
                <span className="info-value">{info.name}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">{info.email}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Địa điểm:</span>
                <span className="info-value">{info.address}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Năm sinh:</span>
                <span className="info-value">{info.date}</span>
              </div>
            </div>
            <div className="about-stats"></div>
          </div>
        </div>
        <div className="about-experience">
          <h4 className="experience-title">My Experience</h4>
          <ul className="experience-timeline">
            {experience.map((exp, idx) => (
              <li key={idx} className="timeline-item">
                <div className="timeline-left">
                  <div className="timeline-year">{exp.year}</div>
                  <div className="timeline-arrow">
                    <FaArrowCircleRight />
                  </div>
                  <div className="timeline-company">{exp.company}</div>
                </div>
                <div className="timeline-right">
                  <div className="timeline-title">{exp.title}</div>
                  <div className="timeline-desc">{exp.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
