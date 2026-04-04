import React from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="contact-modern-wrapper glass-card">
        <div className="contact-modern-content">
          <div className="contact-modern-info">
            <h3 className="contact-modern-heading">Let's build something together.</h3>
            <p className="contact-modern-text">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Let's connect and build something scalable.
            </p>
            
            <div className="contact-modern-details">
              <div className="detail-modern-item glass-card hover-lift">
                <div className="detail-modern-icon-wrapper">
                  <Mail className="detail-modern-icon" size={24} />
                </div>
                <div className="detail-modern-content">
                  <span className="detail-modern-label">Email Address</span>
                  <a href="mailto:hello@darshan.dev" className="detail-modern-value">hello@darshan.dev</a>
                </div>
              </div>
              
              <div className="detail-modern-item glass-card hover-lift">
                <div className="detail-modern-icon-wrapper">
                  <MapPin className="detail-modern-icon" size={24} />
                </div>
                <div className="detail-modern-content">
                  <span className="detail-modern-label">Location</span>
                  <span className="detail-modern-value">Earth / Remote</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-modern-form">
            <div className="form-modern-header">
              <h3>Send a Message</h3>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-modern-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" placeholder="John Doe" className="form-modern-input" />
              </div>
              <div className="form-modern-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" placeholder="john@example.com" className="form-modern-input" />
              </div>
              <div className="form-modern-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" rows="4" placeholder="How can I help you?" className="form-modern-input"></textarea>
              </div>
              <button type="submit" className="btn-glow submit-modern-btn">
                Send Message <Send size={16} className="btn-icon" />
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <footer className="footer-modern">
        <div className="footer-modern-content">
          <p className="footer-modern-tagline">Building intelligent systems and automated workflows.</p>
          <p className="footer-modern-copyright">&copy; {new Date().getFullYear()} darshan.dev. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
