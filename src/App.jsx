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

function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Default forcefully to dark theme per system design requirements
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  const toggleTerminal = () => {
    setIsTerminalOpen(!isTerminalOpen);
  };

  return (
    <div className="app-container">
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
  );
}

export default App;
