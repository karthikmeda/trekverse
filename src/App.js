import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Marquee from './components/Marquee';
import Footer from './components/Footer';

function App() {
  const [showPrograms, setShowPrograms] = useState(false);

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
      alert('About section coming soon!');
    }
  };

  return (
    <div className="App">
      <Header onNavigate={handleNavigation} />
      <Hero onExplore={handleExplore} />
      <Programs visible={showPrograms} />
      <Marquee />
      <Footer />
    </div>
  );
}

export default App;
