import React, { useState, useEffect, useRef } from 'react';
import { X, Bot } from 'lucide-react';
import './FloatingTerminal.css';

const FloatingTerminal = ({ isOpen, toggleTerminal }) => {
  const [history, setHistory] = useState([
    { type: 'sys', text: '[ ^_^ ] system ready.' },
    { type: 'sys', text: 'Type "help" to display commands.' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isError, setIsError] = useState(false);
  
  const endRef = useRef(null);
  const inputRef = useRef(null);

  // Compute reactive face
  const getFace = () => {
    if (isError) return '[ o_o ]';
    if (isProcessing) return '[ -_- ]';
    return '[ ^_^ ]';
  };

  const face = getFace();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, isOpen]);

  const triggerErrorFace = () => {
    setIsError(true);
    setTimeout(() => {
      setIsError(false);
    }, 2000);
  };

  const executeCommand = (cmd) => {
    if (isProcessing) return;
    
    const trimmed = cmd.trim().toLowerCase();
    const newHistory = [...history, { type: 'cmd', text: trimmed }];

    if (trimmed === '') return setHistory(newHistory);

    const commands = {
      'help': [
        'Available commands:',
        '  about    → scroll to about section',
        '  skills   → scroll to skills',
        '  projects → scroll to projects',
        '  contact  → scroll to contact',
        '  resume   → open resume',
        '  github   → open GitHub',
        '  clear    → clear screen'
      ],
      'whoami': ['Darshan | Developer | System Builder'],
      'clear': null,
      'about': ['navigating to ./about...'],
      'skills': ['navigating to ./skills...'],
      'projects': ['navigating to ./projects...'],
      'contact': ['establishing secure connection...'],
      'resume': ['fetching resume.pdf...'],
      'github': ['resolving host github.com...']
    };

    if (trimmed === 'clear') {
      setHistory([]);
      return;
    }

    setIsProcessing(true);

    if (commands[trimmed]) {
      newHistory.push({ type: 'sys', text: `> executing: ${trimmed}` });
      setHistory(newHistory);
      
      const responses = commands[trimmed];
      
      responses.forEach((line, idx) => {
        setTimeout(() => {
          setHistory(prev => [...prev, { type: 'response', text: line }]);
        }, 400 + (idx * 300));
      });

      const totalDelay = 400 + (responses.length * 300);

      setTimeout(() => {
        if (['about', 'skills', 'projects', 'contact'].includes(trimmed)) {
          document.getElementById(trimmed)?.scrollIntoView({ behavior: 'smooth' });
          if (window.innerWidth < 768) {
            toggleTerminal(); 
          }
        } else if (trimmed === 'github') {
          window.open('https://github.com/', '_blank');
        } else if (trimmed === 'resume') {
          window.open('/resume.pdf', '_blank');
        }
        
        setIsProcessing(false);
        setTimeout(() => inputRef.current?.focus(), 100);
      }, totalDelay + 300);

    } else {
      triggerErrorFace();
      setTimeout(() => {
        newHistory.push({ type: 'error', text: `command not found: ${trimmed}` });
        setHistory(newHistory);
        setIsProcessing(false);
        
        setTimeout(() => {
          inputRef.current?.focus();
        }, 500);
      }, 400);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
      setInputVal('');
    }
  };

  return (
    <>
      <div 
        className={`floating-term-btn ${isOpen ? 'active' : ''}`} 
        onClick={toggleTerminal}
      >
        <span className="term-symbol-face">{face}</span>
      </div>

      <div className={`floating-terminal-window glass-card ${isOpen ? 'open' : ''}`}>
        <div className="term-header">
          <div className="terminal-buttons">
            <span className="dot red" onClick={toggleTerminal} style={{cursor: 'pointer'}}></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="term-title">darshan@dev: ~/tools</div>
          <button className="term-close" onClick={toggleTerminal}>
            <X size={16} />
          </button>
        </div>

        <div className="term-body custom-scrollbar" onClick={() => inputRef.current?.focus()}>
          
          <div className="term-content">
            {history.map((entry, idx) => (
              <div key={idx} className={`hist-entry ${entry.type}`}>
                {entry.type === 'cmd' && <span className="term-prompt-prefix">[USER@DARSHAN-OS]:~$</span>}
                {entry.type === 'response' && <span className="term-response-prefix">[OUTPUT]:</span>}
                {entry.type === 'error' && <span className="term-error-prefix">[ERROR]:</span>}
                {entry.type === 'sys' && <span className="term-sys-prefix">[SYSTEM]:</span>}
                <span className="entry-content">{entry.text}</span>
              </div>
            ))}

            <div className={`term-input-line ${isProcessing ? 'processing' : ''}`}>
              <span className="term-prompt">darshan@system:~$</span>
              <input 
                ref={inputRef}
                type="text" 
                className="term-input" 
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isProcessing}
                spellCheck="false"
                autoComplete="off"
              />
            </div>
            <div ref={endRef} style={{height: 1}}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingTerminal;
