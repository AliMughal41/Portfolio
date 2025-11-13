import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import API_URL from "../config/api";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `${API_URL}/api/v1/message/send`,
        formData
      );

      if (response.data.success) {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to send message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Address",
      value: "Walton Road, Lahore, Pakistan",
    },
    {
      icon: "fas fa-phone",
      title: "Phone",
      value: "+92 344 4133108",
    },
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "alimghal41@gmail.com",
    },
    {
      icon: "fas fa-globe",
      title: "LinkedIn",
      value: "linkedin.com/in/ali-mughal",
    },
  ];

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3 style={{ color: "#4ade80", marginBottom: "30px" }}>
            Contact Information
          </h3>
          {contactInfo.map((info, index) => (
            <div key={index} className="contact-item">
              <i className={info.icon}></i>
              <div>
                <h4>{info.title}</h4>
                <p>{info.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="contact-form">
          <h3 style={{ color: "#4ade80", marginBottom: "30px" }}>Send Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn" disabled={loading}>
              <span>{loading ? "Sending..." : "Send Message"}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;