import React, { useState, useEffect } from 'react';

const Home = ({ scrollToSection }) => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Crafting intelligent web experiences, one line at a time.";
  
  // Typing animation effect
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="name">Keshav Rajput</h1>
        <h2 className="title">Software Engineer | BTech CSE-AI @ Rishihood University (NST)</h2>
        
        <div className="animated-intro">
          <p className="typing-text">{typedText}<span className="cursor">|</span></p>
        </div>
        
        <div className="cta-buttons">
          <button className="cta-button primary" onClick={() => window.open('/resume.pdf', '_blank')}>
            View Resume
          </button>
          <button className="cta-button secondary" onClick={() => scrollToSection('projects')}>
            Projects
          </button>
          <button className="cta-button tertiary" onClick={() => scrollToSection('contact')}>
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;