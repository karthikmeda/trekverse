import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">What is TrekVerse?</h2>
          
          <p className="about-description">
            TrekVerse is a next-generation EdTech company designed to transform students into industry-ready professionals.
            We focus on practical learning, real corporate exposure, and performance-based growth, helping students transition smoothly from Campus to Corporate.
          </p>

          <div className="about-stands-for">
            <h3>What TrekVerse Stands For</h3>
            
            <div className="stands-grid">
              <div className="stand-item">
                <div className="stand-letter">TREK</div>
                <p className="stand-description">Growth journey (step-by-step skill & career development)</p>
              </div>
              
              <div className="stand-item">
                <div className="stand-letter">VERSE</div>
                <p className="stand-description">Universe of opportunities (limitless learning ecosystem)</p>
              </div>
            </div>

            <div className="stand-tagline">
              <p>Together, TrekVerse represents</p>
              <h4>"A journey toward your professional universe."</h4>
            </div>
          </div>

          <div className="about-features">
            <h3>Our Vision</h3>
            <ul className="features-list">
              <li>✨ Transform students into industry-ready professionals</li>
              <li>🚀 Practical learning with real-world projects</li>
              <li>🤝 Direct corporate exposure and mentorship</li>
              <li>📈 Performance-based growth tracking</li>
              <li>🎯 Seamless Campus to Corporate transition</li>
            </ul>
          </div>
        </div>

        <div className="about-visual">
          <div className="visual-box">
            <div className="visual-icon">🌟</div>
            <p>Empowering Students</p>
          </div>
          <div className="visual-box">
            <div className="visual-icon">🚀</div>
            <p>Building Careers</p>
          </div>
          <div className="visual-box">
            <div className="visual-icon">🎓</div>
            <p>Driving Growth</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;