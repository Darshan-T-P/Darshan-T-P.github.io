import React, { useState } from 'react';
import { ExternalLink, Code2, FolderGit2, X, ArrowRight } from 'lucide-react';
import './Projects.css';

const ProjectModernModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-backdrop-modern" onClick={onClose}>
      <div className="project-modal-modern glass-card animate-scale-up" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-modern">
          <h2 className="modal-title-modern">{project.title}</h2>
          <button className="modal-close-btn-modern" onClick={onClose}><X size={20} /></button>
        </div>
        
        <div className="modal-body-modern custom-scrollbar">
          <div className="modal-tech-stack-modern">
            {project.tags.map((tag, i) => (
              <span key={i} className="tech-badge">{tag}</span>
            ))}
          </div>

          <div className="modal-description-modern">
            <p>{project.description}</p>
          </div>

          <div className="modal-features-modern">
            <h4 className="modal-subtitle-modern">Key Highlights</h4>
            <ul className="modal-list-modern">
              {project.logs.map((log, i) => (
                <li key={i} className="modal-list-item-modern">
                   <ArrowRight size={16} className="text-theme-blue" />
                   <span>{log.msg}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-actions-modern">
             <a href={project.github} target="_blank" rel="noreferrer" className="btn-glow glass-btn">
                <Code2 size={18} /> View Source
             </a>
             <a href={project.demo} target="_blank" rel="noreferrer" className="btn-glow">
                <ExternalLink size={18} /> Live Demo
             </a>
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
      title: "AI Traffic Regulation",
      description: "Implemented a YOLO and OpenCV based computer vision engine simulating density analysis to route vehicles dynamically, integrated with basic Reinforcement Learning protocols.",
      tags: ["AI", "Computer Vision", "Python", "YOLOv8", "PyTorch"],
      github: "#",
      demo: "#",
      logs: [
        { msg: "Initialized YOLOv8 neural engine for real-time tracking" },
        { msg: "Loaded pre-trained weights for accurate object detection" },
        { msg: "Processed video streams reliably at 30 FPS" },
        { msg: "Mapped flow distribution to a reinforcement learning agent" }
      ]
    },
    {
      title: "Crowd Flow Estimator",
      description: "Constructed an automated mass estimation pipeline designed to count individuals in densely packed video feeds using custom convolutional neural networks.",
      tags: ["Deep Learning", "CNN", "Python", "OpenCV"],
      github: "#",
      demo: "#",
      logs: [
        { msg: "Bootstrapped custom CNN architecture for density mapping" },
        { msg: "Scanned frames for human-centric features" },
        { msg: "Optimized flow estimation algorithms for high accuracy" }
      ]
    },
    {
      title: "Spam Detection Engine",
      description: "Deployed an NLP classification suite using TF-IDF vectorization and Scikit-Learn libraries to isolate malicious SMS packages out of large test-sets.",
      tags: ["NLP", "Machine Learning", "Automation", "Scikit-Learn"],
      github: "#",
      demo: "#",
      logs: [
        { msg: "Started word vectorization engine with TF-IDF" },
        { msg: "Implemented custom stopwords filtering database" },
        { msg: "Trained reliable MultinomialNB classifier pipeline" }
      ]
    },
    {
      title: "Station AR Pathfinding",
      description: "A spatial route guidance application using AR overlays and mobile sensor data to seamlessly chart paths between static transit platforms.",
      tags: ["AR", "Unity", "Mobile Dev", "C#"],
      github: "#",
      demo: "#",
      logs: [
        { msg: "Calibrated ARCore spatial awareness functionality" },
        { msg: "Generated dynamic 3D meshes for station nodes" },
        { msg: "Anchored path nodes to real-world geometric coordinates" }
      ]
    },
    {
      title: "Matrix Recommender",
      description: "A collaborative filtering data structure predicting media rankings using embedded user telemetry interactions.",
      tags: ["Data Science", "Python", "Pandas", "NumPy"],
      github: "#",
      demo: "#",
      logs: [
        { msg: "Initialized scalable recommendation matrix" },
        { msg: "Processed millions of user interaction telemetry points" },
        { msg: "Calculated multi-dimensional cosine similarity vectors" }
      ]
    },
    {
      title: "Ledger Native",
      description: "Desktop client application architected with Java standard libraries and MySQL to handle localized financial commits safely.",
      tags: ["Java", "MySQL", "Desktop GUI", "JDBC"],
      github: "#",
      demo: "#",
      logs: [
        { msg: "Established secure MySQL database connectivity" },
        { msg: "Implemented localized financial vault authentication" },
        { msg: "Architected a reliable relational commit engine" }
      ]
    }
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Featured Projects</h2>
      
      <div className="projects-modern-grid">
        {projectData.map((project, index) => (
          <div 
            key={index} 
            className="project-modern-card glass-card hover-lift"
            onClick={() => setActiveProject(project)}
          >
            <div className="project-modern-content">
              <div className="project-modern-header">
                <div className="project-icon-wrapper">
                  <FolderGit2 size={24} className="text-theme-blue" />
                </div>
                <div className="project-modern-links" onClick={(e) => e.stopPropagation()}>
                  <a href={project.github} target="_blank" rel="noreferrer" className="icon-modern-link" aria-label="Source">
                    <Code2 size={20} />
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="icon-modern-link" aria-label="Demo">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <h3 className="project-modern-title">{project.title}</h3>
              <p className="project-modern-desc">{project.description}</p>
              
              <div className="project-modern-footer">
                <div className="project-modern-tags">
                  {project.tags.slice(0, 3).map((tag, tIndex) => (
                    <span key={tIndex} className="tech-badge">{tag}</span>
                  ))}
                  {project.tags.length > 3 && <span className="tech-badge">+{project.tags.length - 3}</span>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ProjectModernModal 
        project={activeProject} 
        onClose={() => setActiveProject(null)} 
      />
    </section>
  );
};

export default Projects;
