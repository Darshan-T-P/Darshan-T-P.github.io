import React from 'react';
import { Mail, User, MessageCircle, MapPin, Send } from 'lucide-react';
import './Contact.css';

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">./ping --network</h2>
      
      <div className="contact-wrapper glass-card">
        
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-heading">./establish_connection</h3>
            <p className="contact-text">
              I'm always open to discussing new projects, exchanging encrypted ideas, or joining your infrastructure. Let's build something scalable.
            </p>
            
            <div className="contact-details">
              <div className="detail-item">
                <div className="detail-icon-wrapper">
                  <Mail className="detail-icon" size={20} />
                </div>
                <div className="detail-content">
                  <span className="detail-label">SMTP RELAY</span>
                  <a href="mailto:hello@darshan.dev" className="detail-value">hello@darshan.dev</a>
                </div>
              </div>
              
              <div className="detail-item">
                <div className="detail-icon-wrapper">
                  <MapPin className="detail-icon" size={20} />
                </div>
                <div className="detail-content">
                  <span className="detail-label">NODE LOCATION</span>
                  <span className="detail-value">Server Earth</span>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://github.com/" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GithubIcon size={22} />
              </a>
              <a href="https://linkedin.com/" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon size={22} />
              </a>
              <a href="mailto:hello@darshan.dev" className="social-icon" aria-label="Email">
                <Mail size={22} />
              </a>
            </div>
          </div>
          
          <div className="contact-form">
            <div className="form-header">
              <span>Send Packet</span>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">&gt; set var_name</label>
                <input type="text" id="name" placeholder='"Guest"' className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="email">&gt; set var_reply_to</label>
                <input type="email" id="email" placeholder='"guest@host.com"' className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="message">&gt; let payload =</label>
                <textarea id="message" rows="4" placeholder='"Your encrypted message here..."' className="form-input"></textarea>
              </div>
              <button type="submit" className="btn-glow submit-btn">
                ./transmit <Send size={16} className="btn-icon" />
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-tagline">"I build intelligent systems, automate workflows, and live in the terminal."</p>
          <p className="footer-copyright">sys.exit(0) | &copy; {new Date().getFullYear()} darshan.dev</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
