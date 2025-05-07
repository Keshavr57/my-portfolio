import React, { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! I'm Keshav's AI assistant. How can I help you today?", sender: 'bot' }
  ]);
  
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);
  
  // Knowledge base for the chatbot
  const knowledge = {
    skills: [
      "Python", "JavaScript", "HTML", "CSS", "React.js", 
      "DSA", "Cyber Security", "OS", "Cryptography",
      "Teamwork", "Communication", "Problem-Solving"
    ],
    projects: [
      "Campus Club Tracker App", 
      "E-commerce Website", 
      "Tic-Tac-Toe Game", 
      "Hacktoberfest 2024 PRs"
    ],
    achievements: [
      "Runner-Up – GDG Ideathon",
      "Participant – Smart India Hackathon",
      "Participant – Buzz on Hackathon @ IIT Kanpur",
      "Hacktoberfest 2024 Contributor"
    ],
    education: "First-year BTech Computer Science and Artificial Intelligence student at Rishihood University (NST)",
    contact: {
      email: "keshavraj9954@gmail.com",
      github: "github.com/keshavr57",
      linkedin: "linkedin.com/in/keshavrajput"
    }
  };
  
  // Auto-scroll to bottom of chat
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Simple NLP to handle user queries
  const generateResponse = (query) => {
    const queryLower = query.toLowerCase();
    
    // Check for greetings
    if (queryLower.includes('hello') || queryLower.includes('hi') || queryLower === 'hey') {
      return "Hello! I'm Keshav's AI assistant. Feel free to ask about his skills, projects, education, or achievements!";
    }
    
    // Check for skill queries
    if (queryLower.includes('skill') || queryLower.includes('know') || queryLower.includes('can')) {
      return `Keshav's skills include: ${knowledge.skills.join(', ')}.`;
    }
    
    // Check for project queries
    if (queryLower.includes('project') || queryLower.includes('work') || queryLower.includes('portfolio')) {
      return `Keshav has worked on several projects including: ${knowledge.projects.join(', ')}.`;
    }
    
    // Check for education queries
    if (queryLower.includes('education') || queryLower.includes('study') || queryLower.includes('university') || queryLower.includes('college')) {
      return `Keshav is a ${knowledge.education}.`;
    }
    
    // Check for achievement queries
    if (queryLower.includes('achievement') || queryLower.includes('award') || queryLower.includes('hackathon')) {
      return `Keshav's achievements include: ${knowledge.achievements.join(', ')}.`;
    }
    
    // Check for contact queries
    if (queryLower.includes('contact') || queryLower.includes('email') || queryLower.includes('reach')) {
      return `You can contact Keshav via email at ${knowledge.contact.email}, or connect with him on GitHub (${knowledge.contact.github}) or LinkedIn (${knowledge.contact.linkedin}).`;
    }
    
    // Default response
    return "I'm not sure about that. You can ask about Keshav's skills, projects, education, achievements, or contact information!";
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user'
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput('');
    
    // Simulate typing delay for bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: generateResponse(input),
        sender: 'bot'
      };
      
      setMessages(prevMessages => [...prevMessages, botResponse]);
    }, 500);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <h3>AI Assistant</h3>
      </div>
      
      <div className="chatbot-messages">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`message ${message.sender === 'bot' ? 'bot' : 'user'}`}
          >
            {message.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <form className="chatbot-input" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me about Keshav..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;