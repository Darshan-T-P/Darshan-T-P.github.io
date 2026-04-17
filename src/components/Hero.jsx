import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Hero.css';

const Hero = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Sequence timing - adjusted for realistic typing pauses
    const timers = [
      setTimeout(() => setStep(1), 900),   // initialize.sh input
      setTimeout(() => setStep(2), 1800),  // initializing...
      setTimeout(() => setStep(3), 2400),  // loading modules...
      setTimeout(() => setStep(4), 3000),  // status: READY
      setTimeout(() => setStep(5), 3600),  // whoami input
      setTimeout(() => setStep(6), 4400),  // whoami output (Darshan)
      setTimeout(() => setStep(7), 5000),  // cat mission.txt input
      setTimeout(() => setStep(8), 6000),  // mission.txt output
      setTimeout(() => setStep(9), 6900),  // buttons & final prompt
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
            <div className="terminal-title">darshan@dev: ~</div>
          </div>
          
          <div className="terminal-body">
            {/* initialize.sh */}
            {step >= 1 && (
              <div className="term-line">
                <span className="term-prompt">darshan@dev:~$</span> 
                <span className="cmd-text">
                  {step === 1 ? <Typewriter words={['./initialize.sh']} loop={1} typeSpeed={40} cursor cursorStyle="█" /> : './initialize.sh'}
                </span>
              </div>
            )}
            
            {step >= 2 && (
              <div className="term-line animate-fade-in-rapid">
                <span className="term-output">&gt; initializing core environment ...</span>
              </div>
            )}
            
            {step >= 3 && (
              <div className="term-line animate-fade-in-rapid">
                <span className="term-output">
                  &gt; loading modules: 
                  <span className="module-tag ai">[AI_ENGINE]</span> 
                  <span className="module-tag devops">[CLOUD_DEVOPS]</span> 
                  <span className="module-tag web">[WEB_SYSTEMS]</span> 
                  ... DONE.
                </span>
              </div>
            )}
            
            {step >= 4 && (
              <div className="term-line animate-fade-in-rapid">
                <span className="term-output success">&gt; environment ready.</span>
              </div>
            )}

            {/* Main Content Area: branding + image */}
            {(step >= 4) && (
              <div className="hero-main-content animate-fade-in">
                <div className="hero-text-content">
                  {/* whoami */}
                  {step >= 5 && (
                    <div className="term-line">
                      <span className="term-prompt">darshan@dev:~$</span> 
                      <span className="cmd-text">
                        {step === 5 ? <Typewriter words={['whoami']} loop={1} typeSpeed={60} cursor cursorStyle="█" /> : 'whoami'}
                      </span>
                    </div>
                  )}
                  
                  {step >= 6 && (
                    <div className="branding-section animate-fade-in">
                      <h1 className="hero-name">Darshan T P</h1>
                      <p className="hero-tagline">
                        Software Engineer | AI Builder | DevOps Specialist
                      </p>
                    </div>
                  )}
                </div>

                {/* Visual Merge (Right Aligned) */}
                {step >= 4 && (
                  <div className="hero-visual-internal">
                    <div className="image-container-mini">
                      <div className="id-card-header">
                        <span className="id-title">ID: DTP-8080</span>
                        <span className="id-status">ONLINE</span>
                      </div>
                      <div className="css-orb-container">
                        <div className="neon-orb"></div>
                        <div className="neon-orb-ring"></div>
                        <div className="neon-orb-ring two"></div>
                      </div>
                      <div className="scanline-overlay"></div>
                      <div className="hologram-glow"></div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* cat mission.txt */}
            {step >= 7 && (
              <div className="term-line">
                <span className="term-prompt">darshan@dev:~$</span> 
                <span className="cmd-text">
                  {step === 7 ? <Typewriter words={['cat mission.txt']} loop={1} typeSpeed={50} cursor cursorStyle="█" /> : 'cat mission.txt'}
                </span>
              </div>
            )}
            
            {step >= 8 && (
              <div className="mission-section animate-fade-in">
                <div className="mission-card">
                  <p className="mission-text">
                    I architect highly scalable cloud systems, integrate cutting-edge AI models, and engineer robust web applications. Driven by automation and innovative problem solving.
                  </p>
                </div>
              </div>
            )}

            {/* Actions & Footer */}
            {step >= 9 && (
              <>
                <div className="terminal-actions animate-fade-in">
                  <button onClick={scrollToProjects} className="btn-terminal primary">
                    ./DEPLOY_PROJECTS &gt;
                  </button>
                  <button onClick={handleResume} className="btn-terminal outline">
                    VIEW_RESUME.sh
                  </button>
                </div>
                
                <div className="terminal-footer animate-fade-in">
                  <span className="term-prompt">darshan@dev:~$</span> 
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
