import React from 'react';
import { ShieldCheck, Award, Trophy, Verified } from 'lucide-react';
import './Achievements.css';

const Achievements = () => {
  const topStats = [
    { label: "Hackathons Won", value: "2+" },
    { label: "Global Rank", value: "6" },
    { label: "Projects Deployed", value: "4+" }
  ];

  const logEntries = [
    {
      year: "2025",
      event: "Smart India Hackathon",
      outcome: "Rank 6",
      desc: "Developed an optimal computer vision traffic management engine under strict latency constraints."
    },
    {
      year: "2025",
      event: "Special Mention",
      outcome: "AI Traffic System",
      desc: "Recognized for innovative use of reinforcement learning to predict flow distribution."
    }
  ];

  const certificates = [
    {
      title: "TensorFlow Developer Certificate",
      issuer: "DeepLearning.AI",
      link: "#"
    },
    {
      title: "GCP Cloud Infrastructure Fundamentals",
      issuer: "Google Cloud",
      link: "#"
    }
  ];

  return (
    <section id="achievements" className="section-container">
      <h2 className="section-title">Milestones & Certifications</h2>
      
      {/* Top Counters */}
      <div className="achievements-stats-modern">
        {topStats.map((stat, idx) => (
          <div key={idx} className="stat-counter-modern glass-card">
            <span className="stat-val-modern">{stat.value}</span>
            <span className="stat-key-modern">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="achievements-container-modern glass-card">
        {/* Milestones */}
        <div className="milestones-modern-section">
          <div className="section-heading-modern">
            <Trophy size={24} className="text-theme-blue" />
            <h3>Key Achievements</h3>
          </div>
          <div className="milestone-timeline">
            {logEntries.map((log, idx) => (
              <div key={idx} className="milestone-card hover-lift">
                <div className="milestone-header">
                   <div className="milestone-badge">{log.year}</div>
                   <h4 className="milestone-event">{log.event}</h4>
                   <span className="milestone-outcome">{log.outcome}</span>
                </div>
                <p className="milestone-desc">{log.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="divider-modern"></div>

        {/* Certificates */}
        <div className="certificates-modern-section">
          <div className="section-heading-modern">
            <Verified size={24} className="text-theme-blue" />
            <h3>Verified Modules</h3>
          </div>
          <div className="certs-grid-modern">
            {certificates.map((cert, idx) => (
              <div key={idx} className="cert-card-modern hover-glow">
                <div className="cert-icon-modern">
                  <ShieldCheck size={28} />
                </div>
                <div className="cert-info-modern">
                  <h4 className="cert-title-modern">{cert.title}</h4>
                  <span className="cert-issuer-modern">{cert.issuer}</span>
                </div>
                <a href={cert.link} className="btn-glow glass-btn cert-modern-btn">
                  Verify
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
