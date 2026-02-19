import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import SupportingTeam from './components/SupportingTeam';
import Marquee from './components/Marquee';
import Footer from './components/Footer';

function App() {
  const [showPrograms, setShowPrograms] = useState(true);

  const handleExplore = () => {
    setShowPrograms(true);
    // Scroll to programs section smoothly
    setTimeout(() => {
      const programsSection = document.querySelector('.programs');
      if (programsSection) {
        programsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleNavigation = (section) => {
    if (section === 'programs') {
      setShowPrograms(true);
      setTimeout(() => {
        const programsSection = document.querySelector('.programs');
        if (programsSection) {
          programsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (section === 'advance') {
      alert('Advanced Programs section coming soon!');
    } else if (section === 'about') {
      setTimeout(() => {
        const aboutSection = document.querySelector('.about-section');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className="App">
      <Header onNavigate={handleNavigation} />
      <Hero onExplore={handleExplore} />
      <About />
      <Programs visible={showPrograms} />
      <SupportingTeam />
      <Marquee />
      <Footer />
    </div>
  );
}

export default App;
