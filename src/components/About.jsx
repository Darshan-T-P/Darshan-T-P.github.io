import React from 'react';
import './About.css';

const About = () => {
  const metrics = [
    { label: "PROJECTS", value: "15+" },
    { label: "EXPERIENCE", value: "3+ YEARS" },
    { label: "STATUS", value: "ACTIVE" },
    { label: "CURRENT_ROLE", value: "INTERN" }
  ];

  return (
    <section id="about" className="section-container">
      <h2 className="section-title">./about --user</h2>
      
      <div className="about-module glass-card">
        <div className="module-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="module-title-bar">user_profile.cfg</span>
        </div>
        
        <div className="about-grid">
          {/* Left panel - Description */}
          <div className="about-left param-panel">
            <h3 className="panel-heading">// Description</h3>
            <p className="highlight-text">
              Hello! I'm <span className="highlight-neon">Darshan</span>, an engineer operating at the system level. I don't just write code; I construct logic pipelines that solve problems. My focus resides at the intersection of Artificial Intelligence, scalable Full Stack Development, and robust DevOps workflows.
            </p>
            <p className="highlight-text mt-4">
              I believe in learning by breaking and fixing. From training deep learning models mapping vehicle flows to architecting web platforms, my runtime thrives on challenges.
            </p>
          </div>
          
          {/* Right panel - Terminal execution format */}
          <div className="about-right terminal-panel">
            <div className="term-line">
              <span className="term-prompt">root@system:~#</span> cat identity.json
            </div>
            <div className="term-output">
              <pre>
{`{
  "name": "darshan",
  "role": "developer",
  "location": "india",
  "status": "available_for_opportunities"
}`}
              </pre>
            </div>
          </div>
        </div>

        {/* Bottom Metrics */}
        <div className="metrics-grid">
          {metrics.map((metric, idx) => (
            <div key={idx} className="metric-card sys-box hover-glow">
              <span className="metric-bracket">[</span>
              <span className="metric-label">{metric.label}:</span>
              <span className="metric-value">{metric.value}</span>
              <span className="metric-bracket">]</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
