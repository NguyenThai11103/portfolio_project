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
              <img
                src={avatar}
                alt="Profile"
                style={{
                  width: "350px",
                  height: "350px",
                  objectFit: "cover",
                  borderRadius: "18px",
                }}
              />
              <div className="image-overlay"></div>
              <div className="image-decoration circle-1"></div>
              <div className="image-decoration circle-2"></div>
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
