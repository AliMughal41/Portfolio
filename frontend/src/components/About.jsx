import React from "react";
import "../styles/About.css";


const About = () => {
  const stats = [
    { value: "10+", label: "Projects Delivered" },
    { value: "1", label: "Years Experience" },
    { value: "7+", label: "Happy Clients" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <section id="about" className="section">
      <h2 className="section-title">Why Hire Me?</h2>
      <div className="two-column">
        <div>
          <h3>My Experience</h3>
          <p>
            I bring a unique blend of technical expertise and creative
            problem-solving to every project. As a BS Information Technology
            graduate from University of the Punjab (CGPA: 3.08/4.00), I have
            successfully delivered numerous projects using the MERN stack.
          </p>
          <p>
            My passion lies in creating seamless user experiences and robust
            applications that exceed client expectations. From developing
            full-featured job portals with real-time chat to building
            cloud-based hospital management systems, I stay updated with the
            latest industry trends to deliver modern, scalable solutions.
          </p>
        </div>
        <div className="cards-grid">
          {stats.map((stat, index) => (
            <div key={index} className="card">
              <div className="value">{stat.value}</div>
              <div className="label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
