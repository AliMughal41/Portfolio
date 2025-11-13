import React, { useState } from "react";
import API_URL from "../config/api";
import "../styles/Hero.css";

const Hero = () => {
  const [downloading, setDownloading] = useState(false);

  const socialLinks = [
    {
      icon: "fab fa-linkedin-in",
      url: "https://www.linkedin.com/in/ali-mughal-9bb661343",
      label: "LinkedIn",
    },
    {
      icon: "fab fa-github",
      url: "https://github.com/AliMughal41",
      label: "GitHub",
    },
    {
      icon: "fab fa-twitter",
      url: "https://x.com/AliMugh001",
      label: "Twitter",
    },
    {
      icon: "fab fa-instagram",
      url: "https://www.instagram.com/itss_ali_22",
      label: "Instagram",
    },
    {
      icon: "fab fa-facebook",
      url: "https://www.facebook.com/share/1AempqxJ1G/",
      label: "Facebook",
    },
  ];

  const handleDownloadCV = async () => {
    try {
      setDownloading(true);
      window.open(`${API_URL}/api/v1/cv/download`, "_blank");
      setDownloading(false);
    } catch (error) {
      console.error("Download error:", error);
      alert("Failed to download CV. Please try again.");
      setDownloading(false);
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h3>Hello, I'm</h3>
          <h1>Muhammad Ali</h1>
          <div className="subtitle">Full Stack Developer</div>
          <p>
            I'm a passionate Full Stack Developer specializing in creating
            exceptional digital experiences through modern web technologies
            (MERN Stack) and innovative mobile solutions (Flutter). Building
            scalable applications with clean code and optimal performance.
          </p>

          <div className="hero-buttons">
            <button
              onClick={handleDownloadCV}
              className="btn-primary"
              disabled={downloading}
            >
              {downloading ? "Downloading..." : "Download CV"}
            </button>

            <div className="social-icons">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="profile-container">
            <div className="profile-ring"></div>
            <img
              src="/image3.png"
              alt="Muhammad Ali"
              className="profile-img"
            />
            <div className="floating-elements">
              <div className="floating-element"></div>
              <div className="floating-element"></div>
              <div className="floating-element"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;