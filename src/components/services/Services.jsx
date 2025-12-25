import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that enhance user experience.'
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications using React Native and Flutter.'
    },
    {
      icon: '🚀',
      title: 'Performance Optimization',
      description: 'Optimize your applications for speed, scalability, and efficiency.'
    },
    {
      icon: '🔒',
      title: 'Blockchain',
      description: 'Development of decentralized applications and smart contracts on various blockchain platforms.'
    },
    {
      icon: '🛠',
      title: 'Maintenance',
      description: 'Ongoing support and maintenance to keep your applications running smoothly.'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <h2 className="section-title">My Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;