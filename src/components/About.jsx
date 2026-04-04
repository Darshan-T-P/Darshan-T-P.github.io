import React from 'react';
import './About.css';
import { Network, Database, Brain, Globe } from 'lucide-react';

const About = () => {
  const metrics = [
    { label: "Projects", value: "15+" },
    { label: "Experience", value: "3+ YOE" },
    { label: "Status", value: "Active" },
    { label: "Role", value: "Intern" }
  ];

  const features = [
    { icon: <Brain size={24} />, title: "AI/ML Systems", description: "Designing intelligent logic pipelines and models." },
    { icon: <Globe size={24} />, title: "Full Stack", description: "Building scalable and performant web applications." },
    { icon: <Database size={24} />, title: "Data Workflows", description: "Architecting reliable data ingestion and analysis." },
    { icon: <Network size={24} />, title: "DevOps", description: "Streamlining deployment and infrastructure." },
  ];

  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-modern glass-card">
        <div className="about-content-wrapper">
          <div className="about-text-content">
            <h3 className="about-heading-modern">Engineering system-level solutions.</h3>
            <p className="modern-paragraph">
              Hello! I'm <strong>Darshan</strong>, an engineer operating at the system level. I don't just write code; I construct logic pipelines that solve problems. My focus resides at the intersection of Artificial Intelligence, scalable Full Stack Development, and robust DevOps workflows.
            </p>
            <p className="modern-paragraph mt-4">
              I believe in learning by breaking and fixing. From training deep learning models mapping vehicle flows to architecting web platforms, my runtime thrives on challenges.
            </p>
          </div>
          
          <div className="metrics-modern-grid">
            {metrics.map((metric, idx) => (
              <div key={idx} className="metric-box-modern">
                <span className="metric-value-modern">{metric.value}</span>
                <span className="metric-label-modern">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-features-grid">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h4 className="feature-title">{feature.title}</h4>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
