import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Sequence timing
    const timers = [
      setTimeout(() => setStep(1), 400),   // initialize.sh input
      setTimeout(() => setStep(2), 1000),  // initializing...
      setTimeout(() => setStep(3), 1600),  // loading modules...
      setTimeout(() => setStep(4), 2200),  // status: READY
      setTimeout(() => setStep(5), 2800),  // whoami input
      setTimeout(() => setStep(6), 3400),  // whoami output (Darshan)
      setTimeout(() => setStep(7), 4000),  // cat mission.txt input
      setTimeout(() => setStep(8), 4600),  // mission.txt output
      setTimeout(() => setStep(9), 5200),  // buttons & final prompt
    ];

    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-terminal">
          <div className="terminal-header">
            <div className="terminal-buttons">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="terminal-title">guest@darshan.dev: ~</div>
          </div>
          
          <div className="terminal-body">
            {/* initialize.sh */}
            {step >= 1 && (
              <div className="term-line animate-fade-in-rapid">
                <span className="term-prompt">$</span> 
                <span>./initialize.sh</span>
              </div>
            )}
            
            {step >= 2 && (
              <div className="term-line animate-fade-in-rapid">
                <span className="term-output">&gt; initializing darshan.dev environment ...</span>
              </div>
            )}
            
            {step >= 3 && (
              <div className="term-line animate-fade-in-rapid">
                <span className="term-output">&gt; loading modules: [AI] [DevOps] [Automation] ... DONE.</span>
              </div>
            )}
            
            {step >= 4 && (
              <div className="term-line animate-fade-in-rapid">
                <span className="term-output success">&gt; status: SYSTEM READY.</span>
              </div>
            )}

            {/* Main Content Area: branding + image */}
            {(step >= 4) && (
              <div className="hero-main-content animate-fade-in">
                <div className="hero-text-content">
                  {/* whoami */}
                  {step >= 5 && (
                    <div className="term-line animate-fade-in-rapid">
                      <span className="term-prompt">$</span> 
                      <span>whoami</span>
                    </div>
                  )}
                  
                  {step >= 6 && (
                    <div className="branding-section animate-fade-in">
                      <h1 className="hero-name">Darshan T P</h1>
                      <p className="hero-tagline">
                        Developer | AI Builder | DevOps Explorer
                      </p>
                    </div>
                  )}
                </div>

                {/* Visual Merge (Right Aligned) */}
                {step >= 4 && (
                  <div className="hero-visual-internal">
                    <div className="image-container-mini">
                      <img 
                        src="/developer_avatar_3d.png" 
                        alt="Darshan T P Avatar" 
                        className="hero-image-mini"
                      />
                      <div className="scanline-overlay"></div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* cat mission.txt */}
            {step >= 7 && (
              <div className="term-line animate-fade-in-rapid">
                <span className="term-prompt">$</span> 
                <span>cat mission.txt</span>
              </div>
            )}
            
            {step >= 8 && (
              <div className="mission-section animate-fade-in">
                <p className="mission-text">
                  I build intelligent systems, automate workflows, and thrive at the intersection of AI and Cloud Infrastructure.
                </p>
              </div>
            )}

            {/* Actions & Footer */}
            {step >= 9 && (
              <>
                <div className="terminal-actions animate-fade-in">
                  <button onClick={scrollToProjects} className="btn-terminal primary">
                    ./EXECUTE_PORTFOLIO &gt;
                  </button>
                  <button onClick={handleResume} className="btn-terminal outline">
                    CAT RESUME.PDF
                  </button>
                </div>
                
                <div className="terminal-footer">
                  <span className="term-prompt">$</span> 
                  <span className="term-cursor"></span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

