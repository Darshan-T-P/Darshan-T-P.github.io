import React, { useState } from 'react';
import { Terminal, Database, Globe, Boxes, Cloud, Cpu, Layout, Code2, Network, ShieldCheck } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: '#all' },
    { id: 'ai', label: '#ai' },
    { id: 'devops', label: '#devops' },
    { id: 'web', label: '#web' },
    { id: 'tools', label: '#tools' }
  ];

  const allSkills = [
    { name: "PYTHON", category: "ai", icon: <Terminal size={24} />, desc: "Core scripting engine" },
    { name: "TENSORFLOW", category: "ai", icon: <Cpu size={24} />, desc: "ML processing unit" },
    { name: "OPENCV", category: "ai", icon: <Network size={24} />, desc: "Computer vision array" },
    
    { name: "DOCKER", category: "devops", icon: <Boxes size={24} />, desc: "Containerization system" },
    { name: "LINUX", category: "devops", icon: <Terminal size={24} />, desc: "Native environment" },
    { name: "GCP", category: "devops", icon: <Cloud size={24} />, desc: "Cloud infrastructure" },

    { name: "REACT / NEXT", category: "web", icon: <Globe size={24} />, desc: "Frontend assembly" },
    { name: "NODE.JS", category: "web", icon: <Database size={24} />, desc: "Backend runtime API" },
    { name: "JAVASCRIPT", category: "web", icon: <Code2 size={24} />, desc: "Dynamic execution" },

    { name: "GIT", category: "tools", icon: <ShieldCheck size={24} />, desc: "Version control" },
    { name: "JAVA", category: "tools", icon: <Layout size={24} />, desc: "OOP Enterprise architecture" }
  ];

  const filteredSkills = filter === 'all' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === filter);

  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">./skills --modules</h2>
      
      <div className="skills-module glass-card">
        <div className="module-header">
          <div className="terminal-buttons">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <span className="module-title-bar">module_registry.cfg</span>
        </div>

        <div className="skills-filters">
          <span className="filter-prompt">&gt; select_category:</span>
          {categories.map(cat => (
            <button 
              key={cat.id} 
              className={`filter-chip ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="skills-advanced-grid">
          {filteredSkills.map((skill, idx) => (
            <div key={idx} className="skill-advanced-card hover-glow pulse-fx">
              <div className="skill-main">
                <div className="skill-icon-node">
                  {skill.icon}
                </div>
                <span className="skill-bracket">[</span>
                <span className="skill-title-name">{skill.name}</span>
                <span className="skill-bracket">]</span>
              </div>
              <div className="skill-desc-panel">
                <span className="flow-arrow">&rarr;</span>
                <span className="skill-text-info">"{skill.desc}"</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
