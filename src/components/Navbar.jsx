import React from 'react';

const Navbar = ({ activeSection, scrollToSection, mobileMenuOpen, setMobileMenuOpen }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo" onClick={() => scrollToSection('home')}>
          <span>KR</span>
        </div>
        
        <div className="desktop-menu">
          <ul className="nav-items">
            {navItems.map(item => (
              <li 
                key={item.id} 
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-nav-items">
            {navItems.map(item => (
              <li 
                key={item.id} 
                className={`mobile-nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;