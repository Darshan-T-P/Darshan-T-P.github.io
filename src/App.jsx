import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import CanvasNetwork from './components/CanvasNetwork';
import FloatingTerminal from './components/FloatingTerminal';
import SocialSidebar from './components/SocialSidebar';
import Preloader from './components/Preloader';

function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isBooting, setIsBooting] = useState(true);

  // Default forcefully to dark theme per system design requirements
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!isBooting) {
      setTimeout(() => window.scrollTo(0, 0), 10);
    }
  }, [isBooting]);

  const toggleTerminal = () => {
    setIsTerminalOpen(!isTerminalOpen);
  };

  return (
    <>
      {isBooting && <Preloader onComplete={() => setIsBooting(false)} />}
      
      {!isBooting && (
        <div className="app-container animate-fade-in">
          <CanvasNetwork />
          <Navbar toggleTerminal={toggleTerminal} isTerminalOpen={isTerminalOpen} />
          
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Achievements />
            <Contact />
          </main>

          <SocialSidebar />
          <FloatingTerminal isOpen={isTerminalOpen} toggleTerminal={toggleTerminal} />
        </div>
      )}
    </>
  );
}

export default App;
