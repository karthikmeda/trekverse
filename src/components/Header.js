import React, { useState } from 'react';
import './Header.css';
import logo from '../utility/mainLogo.png';

const Header = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (section) => {
    onNavigate(section);
    setMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-section">
          <img src={logo} alt="TrekVerse Logo" className="logo" />
          <span className="logo-text">TrekVerse</span>
        </div>

        {/* Navigation */}
        <nav className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
          <button onClick={() => handleNavClick('programs')} className="nav-link">
            Programs
          </button>
          <button onClick={() => handleNavClick('advance')} className="nav-link">
            Advance Programs
          </button>
          <button onClick={() => handleNavClick('about')} className="nav-link">
            About
          </button>
        </nav>

        {/* Hamburger Menu */}
        <div className="hamburger" onClick={toggleMobileMenu}>
          <span className={mobileMenuOpen ? 'active' : ''}></span>
          <span className={mobileMenuOpen ? 'active' : ''}></span>
          <span className={mobileMenuOpen ? 'active' : ''}></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
