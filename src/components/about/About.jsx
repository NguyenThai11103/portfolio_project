import React from 'react';
import './About.css';
import avatar from '../../assets/images/ava.jpg';
import { FaArrowCircleRight } from 'react-icons/fa';

const About = () => {
  const info = {
    name: 'Nguyễn Ngọc Duy Thái',
    email: 'kkdn011@gmail.com',
    address: 'Da Nang, Viet Nam',
    phone: '0775585746',
    date: '01-11-2003'
  }
  const experience = [
    {
      year: '2015-2021',
      title: 'LEAD UI/UX DESIGNER',
      company: 'ACME Company',
      desc: 'I have responsibly led a team of 12 designers to help, supervise and approve their designs to make sure it matches client expectations and latest design standards.'
    },
    {
      year: '2011-2015',
      title: 'WEB DEVELOPER',
      company: 'Dynamic Capital INC',
      desc: 'I was responsible for all the in-house and client-based web development assignments. I take pride in having helped the best of clients and getting maximum ratings for the company.'
    },
    {
      year: '2003-2011',
      title: 'UI/UX DESIGNER',
      company: 'Dynamic Capital INC',
      desc: 'I was a part of an amazing design team and worked together with them to help design and develop apps and websites for different clients of the company.'
    }
  ];
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-top" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', marginBottom: '2.5rem' }}>
          <div className="about-image" style={{ maxWidth: '350px', flex: '0 0 350px', marginRight: '2.5rem' }}>
            <div className="image-container">
              <img src={avatar} alt="Profile" style={{ width: '350px', height: '350px', objectFit: 'cover', borderRadius: '18px' }} />
              <div className="image-overlay"></div>
              <div className="image-decoration circle-1"></div>
              <div className="image-decoration circle-2"></div>
            </div>
          </div>
          <div className="about-text" style={{ flex: 1 }}>
            <p className="about-description">
              Tôi là một Fullstack Developer đam mê với việc tạo ra những trải nghiệm người dùng tuyệt vời. 
              Với kiến thức vững chắc về các công nghệ web hiện đại, tôi luôn cố gắng tạo ra những ứng dụng 
              web đẹp mắt, thân thiện và hiệu quả.
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
            <div className="about-stats">
              
            </div>
          </div>
        </div>
        <div className="about-experience">
          <h4 className="experience-title">My Experience</h4>
          <ul className="experience-timeline">
            {experience.map((exp, idx) => (
              <li key={idx} className="timeline-item">
                <div className="timeline-left">
                  <div className="timeline-year">{exp.year}</div>
                  <div className="timeline-arrow"><FaArrowCircleRight /></div>
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