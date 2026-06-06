import React from "react";
import "../styles/Education.css";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "University of the Punjab, Lahore",
      period: "2021 - 2025",
      grade: "CGPA: 3.13 out of 4.0",
      description:
        "Comprehensive study of computer science fundamentals, software engineering, MERN stack development, database systems, web development, and modern programming technologies. Developed Skill Bridge job portal as final year project using MongoDB, Express.js, React.js, and Node.js with real-time chat functionality.",
    },
    {
      degree: "Intermediate in Computer Science (ICS)",
      institution: "BISE Gujranwala Board",
      period: "2019 - 2021",
      grade: "Marks: 672 out of 1100",
      description:
        "Strong foundation in mathematics, physics, and computer science. Developed initial programming skills and understanding of computer systems, algorithms, and logical problem-solving approaches that prepared for university education.",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Board of Intermediate & Secondary Education",
      period: "2017 - 2019",
      grade: "Marks: 911 out of 1100",
      description:
        "Excellent academic performance with focus on science and mathematics. Built strong analytical and problem-solving skills that formed the foundation for future technical education and career development in IT field.",
    },
  ];

  return (
    <section id="education" className="education section">
      <h2 className="section-title">Education</h2>
      <div className="education-timeline">
        {educationData.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-content">
              <h3>{edu.degree}</h3>
              <div className="date">{edu.period}</div>
              <div className="grade">{edu.grade}</div>
              <p style={{ marginTop: "10px", fontSize: "15px" }}>
                {edu.institution}
              </p>
              <p style={{ marginTop: "10px", color: "#ccc", lineHeight: "1.6" }}>
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;