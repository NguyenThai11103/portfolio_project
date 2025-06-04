import React from 'react';
import './About.css';
import avatar from '../../assets/images/ava.jpg';

const About = () => {
  const info = {
    name: 'Nguyễn Ngọc Duy Thái',
    email: 'kkdn011@gmail.com',
    address: 'Da Nang, Viet Nam',
    phone: '0775585746',
    date: '01-11-2003'
  }
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="image-container">
              <img src={avatar} alt="Profile" />
              <div className="image-overlay"></div>
              <div className="image-decoration circle-1"></div>
              <div className="image-decoration circle-2"></div>
            </div>
          </div>
          <div className="about-text">
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
      </div>
    </section>
  );
};

export default About;