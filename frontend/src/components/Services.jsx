import React from "react";
import "../styles/Services.css";
const Services = () => {
  const services = [
    {
      icon: "fas fa-laptop-code",
      title: "Web Development",
      description:
        "Full-stack web development using MERN stack (MongoDB, Express.js, React.js, Node.js). I create responsive, fast, and scalable web applications with clean, maintainable code, REST APIs, JWT authentication, and optimal user experience.",
    },

    {
      icon: "fas fa-paint-brush",
      title: "UI/UX Design",
      description:
        "Creating intuitive and visually appealing user interfaces using Figma. I design modern, clean interfaces that are both functional and aesthetically pleasing with focus on user experience and accessibility.",
    },
    {
      icon: "fas fa-database",
      title: "Database Management",
      description:
        "Expert database design and management with MongoDB and MySQL. I ensure optimal performance, security, data integrity, and scalability for your data storage needs with efficient query optimization.",
    },
    {
      icon: "fas fa-cloud",
      title: "API Development",
      description:
        "RESTful API development and integration services with Express.js and Node.js. I create robust, secure, and well-documented APIs with Postman testing that enable seamless communication between systems.",
    },
    {
      icon: "fas fa-tools",
      title: "Real-time Features",
      description:
        "Implementation of real-time functionality using Socket.IO for chat applications, live notifications, collaborative tools, and interactive features that enhance user engagement and application responsiveness.",
    },
  ];

  return (
    <section id="services" className="services section">
      <h2 className="section-title">My Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">
              <i className={service.icon}></i>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;