import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import './styles.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const achievementsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    projects: projectsRef,
    achievements: achievementsRef,
    skills: skillsRef,
    contact: contactRef
  };

  // Handle scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      // Find the current section by checking position
      for (const section in sectionRefs) {
        const element = sectionRefs[section].current;
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section when nav item is clicked
  const scrollToSection = (sectionId) => {
    const section = sectionRefs[sectionId].current;
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="app-container">
      <Navbar 
        activeSection={activeSection} 
        scrollToSection={scrollToSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      <main className="main-content">
        <section ref={homeRef} id="home" className="section">
          <Home scrollToSection={scrollToSection} />
        </section>
        
        <section ref={aboutRef} id="about" className="section">
          <About />
        </section>
        
        <section ref={projectsRef} id="projects" className="section">
          <Projects />
        </section>
        
        <section ref={achievementsRef} id="achievements" className="section">
          <Achievements />
        </section>
        
        <section ref={skillsRef} id="skills" className="section">
          <Skills />
        </section>
        
        <section ref={contactRef} id="contact" className="section">
          <Contact />
        </section>
      </main>

      <button 
        className="chatbot-toggle"
        onClick={() => setShowChatbot(!showChatbot)}
      >
        {showChatbot ? "Close AI Assistant" : "Open AI Assistant"}
      </button>
      
      {showChatbot && <Chatbot />}
      
      <footer className="footer">
        <p>© 2025 Keshav Rajput. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;