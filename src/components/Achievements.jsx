import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';
import './Achievements.css';

const Achievements = () => {
  const topStats = [
    { label: "HACKATHONS_WON", value: "2+" },
    { label: "RANK", value: "6" },
    { label: "PROJECTS_DEPLOYED", value: "4+" }
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
      <h2 className="section-title">./achievements --log</h2>
      
      {/* Top Counters */}
      <div className="achievements-stats">
        {topStats.map((stat, idx) => (
          <div key={idx} className="stat-counter">
            <span className="bracket">[</span>
            <span className="stat-key">{stat.label}:</span>
            <span className="stat-val">{stat.value}</span>
            <span className="bracket">]</span>
          </div>
        ))}
      </div>

      <div className="achievements-container module-glass-card glass-card">
        {/* System Logs */}
        <div className="system-logs-section">
          <h3 className="sub-module-title">// System Events log</h3>
          <div className="logs-grid">
            {logEntries.map((log, idx) => (
              <div key={idx} className="log-entry hover-lift">
                <div className="log-header">
                  <span className="log-prompt">&gt;</span>
                  <span className="log-year">[{log.year}]</span>
                  <span className="log-event">{log.event}</span>
                  <span className="log-arrow">&rarr;</span>
                  <span className="log-outcome">{log.outcome}</span>
                </div>
                <div className="log-body">
                  {log.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="divider"></div>

        {/* Certificates */}
        <div className="certificates-section">
          <h3 className="sub-module-title">// Verified Modules</h3>
          <div className="certs-grid">
            {certificates.map((cert, idx) => (
              <div key={idx} className="cert-card hover-glow">
                <div className="cert-icon">
                  <ShieldCheck size={24} />
                </div>
                <div className="cert-info">
                  <h4 className="cert-title">{cert.title}</h4>
                  <span className="cert-issuer">Issuer: {cert.issuer}</span>
                </div>
                <a href={cert.link} className="btn-glow cert-btn">
                  [VERIFY_CREDENTIAL]
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
