import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content animate-fade-in">
          <div className="tech-badge-container">
            <span className="tech-badge">✨ Open for new opportunities</span>
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Darshan T P</span><br/>
            Building Intelligent Systems
          </h1>
          
          <p className="hero-subtitle">
            Developer, AI Builder, and DevOps Explorer. I automate workflows and thrive at the intersection of AI and Cloud Infrastructure to deliver scalable solutions.
          </p>
          
          <div className="hero-actions">
            <button onClick={scrollToProjects} className="btn-glow">
              View Portfolio
            </button>
            <button onClick={handleResume} className="btn-glow glass-btn">
              Download Resume
            </button>
          </div>
        </div>

        <div className="hero-visual animate-fade-in animate-delay-2">
          <div className="hero-image-wrapper">
             <div className="glow-backdrop"></div>
             <img 
               src="/developer_avatar_3d.png" 
               alt="Darshan T P Avatar" 
               className="hero-image-modern"
             />
          </div>
        </div>
      </div>
      
      {/* Background ambient gradients */}
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>
    </section>
  );
};

export default Hero;

