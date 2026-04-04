import React, { useState, useEffect, useRef } from 'react';
import { X, Bot, Command, Send } from 'lucide-react';
import './FloatingTerminal.css';

const FloatingTerminal = ({ isOpen, toggleTerminal }) => {
  const [history, setHistory] = useState([
    { type: 'sys', text: 'Assistant initialized. How can I help you navigate?' },
    { type: 'sys', text: 'Type "help" to see available actions.' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isError, setIsError] = useState(false);
  
  const endRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, isOpen]);

  const triggerError = () => {
    setIsError(true);
    setTimeout(() => {
      setIsError(false);
    }, 2000);
  };

  const executeCommand = (cmd) => {
    if (isProcessing) return;
    
    const trimmed = cmd.trim().toLowerCase();
    const newHistory = [...history, { type: 'user', text: cmd }];

    if (trimmed === '') return setHistory(newHistory);

    const commands = {
      'help': [
        'Here are the actions I can perform:',
        '• about    → Navigate to About section',
        '• skills   → Navigate to Skills section',
        '• projects → Navigate to Projects section',
        '• contact  → Navigate to Contact section',
        '• resume   → Open resume',
        '• github   → Open GitHub profile',
        '• clear    → Clear conversation'
      ],
      'whoami': ['Darshan T P - Developer, AI Builder, and DevOps Explorer.'],
      'clear': null,
      'about': ['Taking you to the About section...'],
      'skills': ['Taking you to the Technical Expertise section...'],
      'projects': ['Taking you to the Projects section...'],
      'contact': ['Opening the Contact section...'],
      'resume': ['Opening my latest resume...'],
      'github': ['Opening GitHub...']
    };

    if (trimmed === 'clear') {
      setHistory([]);
      return;
    }

    setIsProcessing(true);

    if (commands[trimmed]) {
      setHistory(newHistory);
      
      const responses = commands[trimmed];
      
      responses.forEach((line, idx) => {
        setTimeout(() => {
          setHistory(prev => [...prev, { type: 'sys', text: line }]);
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
      triggerError();
      setHistory(newHistory);
      
      setTimeout(() => {
        newHistory.push({ type: 'error', text: `I didn't understand "${trimmed}". Type "help" for a list of commands.` });
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
        className={`floating-palette-btn ${isOpen ? 'active' : ''}`} 
        onClick={toggleTerminal}
      >
        <Command size={24} className="palette-icon" />
      </div>

      <div className={`floating-palette-window glass-card ${isOpen ? 'open' : ''}`}>
        <div className="palette-header">
          <div className="palette-header-left">
            <Bot size={20} className="text-theme-blue" />
            <span className="palette-title">Site Assistant</span>
          </div>
          <button className="palette-close" onClick={toggleTerminal}>
            <X size={18} />
          </button>
        </div>

        <div className="palette-body custom-scrollbar" onClick={() => inputRef.current?.focus()}>
          
          <div className="palette-content">
            {history.map((entry, idx) => (
              <div key={idx} className={`chat-message ${entry.type}`}>
                {entry.type === 'sys' && <div className="msg-avatar"><Bot size={14}/></div>}
                <div className={`msg-bubble ${entry.type}`}>
                  {entry.text}
                </div>
              </div>
            ))}

            <div className={`palette-input-area ${isProcessing ? 'processing' : ''}`}>
              <Command size={16} className={`input-icon ${isError ? 'error' : ''}`} />
              <input 
                ref={inputRef}
                type="text" 
                className="palette-input" 
                placeholder="Ask me to navigate or type 'help'"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isProcessing}
                spellCheck="false"
                autoComplete="off"
              />
              <button 
                className="palette-send"
                onClick={() => {
                  executeCommand(inputVal);
                  setInputVal('');
                }}
                disabled={isProcessing || !inputVal.trim()}
              >
                <Send size={16} />
              </button>
            </div>
            <div ref={endRef} style={{height: 1}}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingTerminal;
