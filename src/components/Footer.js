import React from 'react';
import './Footer.css';
import logo from '../utility/mainLogo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-section brand-section">
            <div className="footer-logo-section">
              <img src={logo} alt="TrekVerse" className="footer-logo" />
              <h3 className="footer-brand">TrekVerse</h3>
            </div>
            <p className="footer-description">
              Empowering professionals across Tech, Electronics, Management & Civil domains with
              industry-leading programs and placement opportunities.
            </p>
            <div className="social-links">
              <a href="https://www.instagram.com/trekverse_/" className="social-link" title="Instagram" target="_blank" rel="noopener noreferrer">
                📷
              </a>
              <a href="https://www.linkedin.com/in/trekverse" className="social-link" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                💼
              </a>
              <a href="mailto:trekverse5@gmail.com" className="social-link" title="Email">
                📧
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section">
            <h4 className="footer-section-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#programs">Programs</a>
              </li>
              <li>
                <a href="#advance">Advance Programs</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Programs Section */}
          <div className="footer-section">
            <h4 className="footer-section-title">Programs</h4>
            <ul className="footer-links">
              <li>
                <a href="#tech">Tech & Data Science</a>
              </li>
              <li>
                <a href="#electronics">Electronics & Embedded</a>
              </li>
              <li>
                <a href="#management">Management</a>
              </li>
              <li>
                <a href="#civil">Civil & Construction</a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h4 className="footer-section-title">Get in Touch</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <a href="mailto:trekverse5@gmail.com">trekverse5@gmail.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <a href="tel:6304558176">6304558176</a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-text">
            &copy; {currentYear} <span className="highlight">TrekVerse</span>. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <span className="divider">•</span>
            <a href="#terms">Terms & Conditions</a>
            <span className="divider">•</span>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
