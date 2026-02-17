import React from 'react';
import './Footer.css';
import logo from '../utility/Untitled design logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-section brand-section">
            <div className="footer-logo-section">
              <img src={logo} alt="Trekverse" className="footer-logo" />
              <h3 className="footer-brand">Trekverse</h3>
            </div>
            <p className="footer-description">
              Empowering professionals across Tech, Electronics, Management & Civil domains with
              industry-leading programs and placement opportunities.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" title="Facebook">
                📘
              </a>
              <a href="#" className="social-link" title="Twitter">
                🐦
              </a>
              <a href="#" className="social-link" title="LinkedIn">
                💼
              </a>
              <a href="#" className="social-link" title="Instagram">
                📷
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
                <a href="mailto:info@trekverse.com">info@trekverse.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <a href="tel:+919999999999">+91 9999 9999 99</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Global Education Platform</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-text">
            &copy; {currentYear} <span className="highlight">Trekverse</span>. All rights reserved.
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
