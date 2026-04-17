import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Mail } from 'lucide-react';
import './Navbar.css';

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

const Navbar = ({ toggleTerminal, isTerminalOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'contact'];
      let current = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: './home', href: '#home', id: 'home' },
    { name: './about', href: '#about', id: 'about' },
    { name: './skills', href: '#skills', id: 'skills' },
    { name: './projects', href: '#projects', id: 'projects' },
    { name: './achievements', href: '#achievements', id: 'achievements' },
    { name: './contact', href: '#contact', id: 'contact' },
  ];

  const socialLinks = [
    { icon: <GithubIcon size={20} />, href: 'https://github.com/', label: 'GitHub' },
    { icon: <LinkedinIcon size={20} />, href: 'https://linkedin.com/', label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: 'mailto:hello@darshan.dev', label: 'Email' },
  ];

  return (
    <nav className={`navbar premium-glass ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        
        <a href="#home" className="logo">
          <div className="logo-box">&gt;_</div>
          <span className="logo-text">darshan.dev_</span>
        </a>

        {/* Desktop Menu */}
        <div className="desktop-nav">
          <ul className="nav-menu">
            {navLinks.map((link) => (
              <li key={link.id} className="nav-item">
                <a 
                  href={link.href} 
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="utility-buttons">
            <button className={`nav-icon-btn ${isTerminalOpen ? 'active-icon' : ''}`} onClick={toggleTerminal} aria-label="Open Terminal Assistant">
              <Terminal size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Nav Top Right */}
        <div className="mobile-controls">
          <button className={`nav-icon-btn ${isTerminalOpen ? 'active-icon' : ''}`} onClick={toggleTerminal} aria-label="Open Terminal Assistant">
            <Terminal size={20} />
          </button>
          <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu premium-glass ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a 
                href={link.href} 
                className={`mobile-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-socials">
          {socialLinks.map((social, idx) => (
            <a key={idx} href={social.href} className="mobile-social-icon" target="_blank" rel="noopener noreferrer" aria-label={social.label}>
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

