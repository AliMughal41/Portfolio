import React, { useEffect, useRef } from "react";
import "../styles/Skills.css";
const Skills = () => {
  const skillsRef = useRef(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "fas fa-code",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "React.js", level: 85 },
        { name: "Tailwind CSS", level: 92 },
      ],
    },
    {
      title: "Backend Development",
      icon: "fas fa-server",
      skills: [
        { name: "Node.js", level: 82 },
        { name: "Express.js", level: 80 },
        { name: "MongoDB", level: 78 },
        { name: "REST APIs", level: 85 },
        { name: "JWT Authentication", level: 80 },
      ],
    },

    {
      title: "Tools & Technologies",
      icon: "fas fa-tools",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Postman", level: 85 },
        { name: "Figma", level: 80 },
        { name: "Socket.IO", level: 78 },
        { name: "Cloudinary", level: 82 },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll(".skill-progress");
            progressBars.forEach((bar) => {
              const width = bar.getAttribute("data-width");
              bar.style.width = width;
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="section" ref={skillsRef}>
      <h2 className="section-title">Skills & Technologies</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>
              <i className={category.icon}></i> {category.title}
            </h3>
            {category.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="skill-item">
                <div className="skill-name">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    data-width={`${skill.level}%`}
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;