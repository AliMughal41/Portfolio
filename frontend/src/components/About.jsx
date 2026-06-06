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
            Motivated MERN Stack Developer skilled in building scalable full-stack web applications. With a strong foundation from my BS in Information Technology (CGPA: 3.13/4.00) from University of the Punjab, I've gained practical experience at Jinnah Technologies, focusing on performance optimization and clean code practices.
          </p>
          <p>
            My expertise spans responsive user interface development, efficient backend services, and modern web technologies. I'm passionate about creating seamless user experiences, solving complex problems, and continuously learning to deliver innovative solutions that exceed expectations.
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
