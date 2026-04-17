import React, { useState } from 'react';
import { ExternalLink, Code2, FolderGit2, X, Terminal as TerminalIcon } from 'lucide-react';
import './Projects.css';

const ProjectTerminalModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="project-modal terminal-window animate-scale-up" onClick={(e) => e.stopPropagation()}>
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="dot red" onClick={onClose}></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="terminal-title">project_details --id {project.title.toLowerCase().replace(/\s+/g, '_')}</div>
          <button className="modal-close-btn" onClick={onClose}><X size={18} /></button>
        </div>
        
        <div className="terminal-body custom-scrollbar">
          <div className="modal-header-section">
            <h2 className="modal-title">&gt; {project.title}</h2>
            <div className="modal-links">
              <a href={project.github} target="_blank" rel="noreferrer" className="modal-link-btn">
                <Code2 size={18} /> [SOURCE_CODE]
              </a>
              <a href={project.demo} target="_blank" rel="noreferrer" className="modal-link-btn">
                <ExternalLink size={18} /> [LIVE_DEMO]
              </a>
            </div>
          </div>

          <div className="modal-description">
            <p className="term-text-muted">// Description</p>
            <p className="main-desc">{project.description}</p>
          </div>

          <div className="modal-logs">
            <p className="term-text-muted">// System Build Logs</p>
            <div className="log-entries">
              {project.logs.map((log, i) => (
                <div key={i} className="log-line">
                  <span className="log-timestamp">[{new Date().toLocaleTimeString()}]</span>
                  <span className={`log-type ${log.type}`}>{log.type.toUpperCase()}:</span>
                  <span className="log-msg">{log.msg}</span>
                </div>
              ))}
              <div className="log-line">
                <span className="log-timestamp">[{new Date().toLocaleTimeString()}]</span>
                <span className="log-type success">SUCCESS:</span>
                <span className="log-msg">Module deployed to production node.</span>
              </div>
            </div>
          </div>

          <div className="modal-tech-stack">
            <p className="term-text-muted">// Tech Stack</p>
            <div className="tech-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tech-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projectData = [
    {
      title: "AI Traffic Regualtion",
      description: "Implemented a YOLO and OpenCV based computer vision engine simulating density analysis to route vehicles dynamically, integrated with basic Reinforcement Learning protocols.",
      tags: ["[AI]", "[CV]", "[PYTHON]", "[YOLO]", "[PYTORCH]"],
      github: "#",
      demo: "#",
      logs: [
        { type: "info", msg: "Initializing YOLOv8 neural engine..." },
        { type: "load", msg: "Loading pre-trained weights: coco.weights" },
        { type: "exec", msg: "Processing video stream at 30 FPS" },
        { type: "sync", msg: "Mapping flow distribution to reinforcement agent" }
      ]
    },
    {
      title: "Crowd Flow Estimator",
      description: "Constructed an automated mass estimation pipeline designed to count individuals in densely packed video feeds using custom convolutional neural networks.",
      tags: ["[DEEP_LEARNING]", "[CNN]", "[PYTHON]", "[OPENCV]"],
      github: "#",
      demo: "#",
      logs: [
        { type: "info", msg: "Bootstrapping CNN architecture..." },
        { type: "exec", msg: "Scanning frame for human-centric features" },
        { type: "data", msg: "Optimizing flow estimation tensors" }
      ]
    },
    {
      title: "Spam Detection Engine",
      description: "Deployed an NLP classification suite using TF-IDF vectorization and Scikit-Learn libraries to isolate malicious SMS packages out of large test-sets.",
      tags: ["[NLP]", "[ML]", "[AUTOMATION]", "[SCIKIT-LEARN]"],
      github: "#",
      demo: "#",
      logs: [
        { type: "info", msg: "Starting word vectorization engine..." },
        { type: "load", msg: "Importing stopwords database" },
        { type: "exec", msg: "Training MultinomialNB classifier" }
      ]
    },
    {
      title: "Station AR Pathfinding",
      description: "A spatial route guidance application using AR overlays and mobile sensor data to seamlessly chart paths between static transit platforms.",
      tags: ["[AR]", "[UNITY]", "[MOBILE]", "[C#]"],
      github: "#",
      demo: "#",
      logs: [
        { type: "info", msg: "Calibrating ARCore spatial awareness..." },
        { type: "load", msg: "Generating 3D mesh for station node" },
        { type: "exec", msg: "Anchoring path nodes to real-world coordinates" }
      ]
    },
    {
      title: "Matrix Recommender",
      description: "A collaborative filtering data structure predicting media rankings using embedded user telemetry interactions.",
      tags: ["[DATA_SCIENCE]", "[PYTHON]", "[PANDAS]", "[NUMPY]"],
      github: "#",
      demo: "#",
      logs: [
        { type: "info", msg: "Initializing recommendation matrix..." },
        { type: "data", msg: "Processing user interaction telemetry" },
        { type: "exec", msg: "Calculating cosine similarity vectors" }
      ]
    },
    {
      title: "Ledger Native",
      description: "Desktop client application architected with Java standard libraries and MySQL to handle localized financial commits safely.",
      tags: ["[JAVA]", "[MYSQL]", "[GUI]", "[JDBC]"],
      github: "#",
      demo: "#",
      logs: [
        { type: "info", msg: "Establishing MySQL connection..." },
        { type: "auth", msg: "Authenticating localized financial vault" },
        { type: "exec", msg: "Running relational commit engine" }
      ]
    }
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">./projects --all</h2>
      
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div 
            key={index} 
            className="project-card glass-card hover-lift"
            onClick={() => setActiveProject(project)}
          >
            <div className="project-content">
              <div className="project-header">
                <h3 className="project-title"><FolderGit2 size={20} className="proj-icon"/> {project.title}</h3>
                <div className="project-links" onClick={(e) => e.stopPropagation()}>
                  <a href={project.github} target="_blank" rel="noreferrer" className="icon-link" aria-label="Source">
                    <Code2 size={20} />
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="icon-link" aria-label="Demo">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <div className="project-description text-primary">
                <p>{project.description}</p>
              </div>
              
              <div className="project-footer-meta">
                <div className="project-tags">
                  {project.tags.slice(0, 3).map((tag, tIndex) => (
                    <span key={tIndex} className="tag">{tag}</span>
                  ))}
                  {project.tags.length > 3 && <span className="tag">...</span>}
                </div>
                <div className="project-cta">
                  <span>[READ_MORE]</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ProjectTerminalModal 
        project={activeProject} 
        onClose={() => setActiveProject(null)} 
      />
    </section>
  );
};

export default Projects;
