import React from 'react';
import { User, UserCog, Bot, Terminal, Cpu, ShieldCheck, CheckCircle2 } from 'lucide-react';
import './About.css';

const About = () => {
  const metrics = [
    { label: "PROJECTS", value: "15+", icon: <Terminal size={18} /> },
    { label: "EXPERIENCE", value: "3+ YRS", icon: <Cpu size={18} /> },
    { label: "STATUS", value: "ACTIVE", icon: <CheckCircle2 size={18} /> },
    { label: "ROLE", value: "INTERN", icon: <ShieldCheck size={18} /> }
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
            <h3 className="panel-heading">// Profile Data</h3>
            <p className="highlight-text">
              Hello! I'm <span className="highlight-neon">Darshan</span>, an engineer operating at the system level. I don't just write code; I construct logic pipelines that solve problems. My focus resides at the intersection of <span className="highlight-neon">Artificial Intelligence</span>, scalable <span className="highlight-neon">Full Stack Development</span>, and robust <span className="highlight-neon">DevOps</span> workflows.
            </p>
            <p className="highlight-text mt-4">
              I believe in learning by breaking and fixing. From training deep learning models mapping vehicle flows to architecting robust web platforms, my runtime thrives on challenges.
            </p>
          </div>
          
          {/* Right panel - Terminal execution format */}
          <div className="about-right terminal-panel">
            <div className="term-line">
              <span className="term-prompt">root@system:~#</span> cat identity.json
            </div>
            <div className="term-output ide-editor">
              <div className="ide-line"><span className="ide-line-num">1</span><span className="ide-bracket">{`{`}</span></div>
              <div className="ide-line"><span className="ide-line-num">2</span>&nbsp;&nbsp;<span className="ide-key">"name"</span>: <span className="ide-string">"darshan"</span>,</div>
              <div className="ide-line"><span className="ide-line-num">3</span>&nbsp;&nbsp;<span className="ide-key">"role"</span>: <span className="ide-string">"developer"</span>,</div>
              <div className="ide-line"><span className="ide-line-num">4</span>&nbsp;&nbsp;<span className="ide-key">"location"</span>: <span className="ide-string">"india"</span>,</div>
              <div className="ide-line"><span className="ide-line-num">5</span>&nbsp;&nbsp;<span className="ide-key">"status"</span>: <span className="ide-string">"available_for_opportunities"</span></div>
              <div className="ide-line"><span className="ide-line-num">6</span><span className="ide-bracket">{`}`}</span></div>
            </div>
          </div>
        </div>

        {/* Bottom Dashboard Metrics */}
        <div className="metrics-dashboard">
          {metrics.map((metric, idx) => (
            <div key={idx} className="metric-dashboard-card glow-on-hover">
              <div className="metric-icon-wrapper">
                {metric.icon}
              </div>
              <div className="metric-content">
                <span className="metric-value-large">{metric.value}</span>
                <span className="metric-label-sub">{metric.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vertical Evolution Timeline */}
      <h3 className="timeline-section-title mt-top">// Execution Path (Education Profile)</h3>
      <div className="vertical-timeline-container">
        
        {/* Stage 1: Base User */}
        <div className="v-timeline-node">
          <div className="v-node-tracer">
            <div className="v-node-icon"><User size={20} /></div>
            <div className="v-line"></div>
          </div>
          <div className="v-node-content glass-card hover-glow">
            <div className="v-node-header">
              <h4 className="v-node-title">High School</h4>
              <span className="v-node-year">[ 2019 - 2021 ]</span>
            </div>
            <p className="v-node-desc">Analytical logic & core sciences foundation. Building basic human cognitive frames.</p>
            <span className="v-node-status blue">status: COMPLETED</span>
          </div>
        </div>

        {/* Stage 2: Upgraded User */}
        <div className="v-timeline-node">
          <div className="v-node-tracer">
            <div className="v-node-icon"><UserCog size={20} /></div>
            <div className="v-line"></div>
          </div>
          <div className="v-node-content glass-card hover-glow">
            <div className="v-node-header">
              <h4 className="v-node-title">Pre-University College</h4>
              <span className="v-node-year">[ 2021 - 2023 ]</span>
            </div>
            <p className="v-node-desc">Algorithmic thinking and advanced mathematics. Integrating structural enhancements.</p>
            <span className="v-node-status blue">status: COMPLETED</span>
          </div>
        </div>

        {/* Stage 3: Automation/Bot */}
        <div className="v-timeline-node active">
          <div className="v-node-tracer">
            <div className="v-node-icon active-glow"><Bot size={20} /></div>
            <div className="v-line active-line"></div>
          </div>
          <div className="v-node-content glass-card hover-glow active-card">
            <div className="v-node-header">
              <h4 className="v-node-title">B.Tech Engineering</h4>
              <span className="v-node-year">[ 2023 - Present ]</span>
            </div>
            <p className="v-node-desc">AI integrations, full-stack systems engineering, and scalable DevOps architecture.</p>
            <span className="v-node-status green">status: EXECUTING...</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
