import React from 'react';
import './Hero.css';

const Hero = ({ onExplore }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Transform Your <span className="highlight">Career</span> with Trekverse
        </h1>
        <p className="hero-subtitle">
          Explore industry-leading programs across Tech, Electronics, Management & Civil domains.
          Join thousands of professionals advancing their skills.
        </p>
        <button className="explore-btn" onClick={onExplore}>
          Explore Programs
          <span className="arrow">→</span>
        </button>
      </div>
      <div className="hero-background">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  );
};

export default Hero;
