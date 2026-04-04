import React, { useState } from 'react';
import { Terminal, Database, Globe, Boxes, Cloud, Cpu, Layout, Code2, Network, ShieldCheck } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'ai', label: 'AI & ML' },
    { id: 'devops', label: 'DevOps' },
    { id: 'web', label: 'Web Dev' },
    { id: 'tools', label: 'Tools' }
  ];

  const allSkills = [
    { name: "Python", category: "ai", icon: <Terminal size={24} />, desc: "Core scripting engine" },
    { name: "TensorFlow", category: "ai", icon: <Cpu size={24} />, desc: "ML processing unit" },
    { name: "OpenCV", category: "ai", icon: <Network size={24} />, desc: "Computer vision array" },
    
    { name: "Docker", category: "devops", icon: <Boxes size={24} />, desc: "Containerization system" },
    { name: "Linux", category: "devops", icon: <Terminal size={24} />, desc: "Native environment" },
    { name: "GCP", category: "devops", icon: <Cloud size={24} />, desc: "Cloud infrastructure" },

    { name: "React / Next.js", category: "web", icon: <Globe size={24} />, desc: "Frontend assembly" },
    { name: "Node.js", category: "web", icon: <Database size={24} />, desc: "Backend runtime API" },
    { name: "JavaScript", category: "web", icon: <Code2 size={24} />, desc: "Dynamic execution" },

    { name: "Git", category: "tools", icon: <ShieldCheck size={24} />, desc: "Version control" },
    { name: "Java", category: "tools", icon: <Layout size={24} />, desc: "OOP Enterprise architecture" }
  ];

  const filteredSkills = filter === 'all' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === filter);

  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Technical Expertise</h2>
      
      <div className="skills-modern glass-card">
        <div className="skills-filters-modern">
          {categories.map(cat => (
            <button 
              key={cat.id} 
              className={`filter-pill-modern ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="skills-grid-modern">
          {filteredSkills.map((skill, idx) => (
            <div key={idx} className="skill-card-modern">
              <div className="skill-icon-modern">
                {skill.icon}
              </div>
              <div className="skill-info-modern">
                <span className="skill-name-modern">{skill.name}</span>
                <span className="skill-desc-modern">{skill.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
