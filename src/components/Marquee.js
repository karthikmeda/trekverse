import React from 'react';
import { COMPANIES } from '../data/programs';
import './Marquee.css';

const Marquee = () => {
  // Duplicate companies to create seamless loop
  const doubledCompanies = [...COMPANIES, ...COMPANIES];

  return (
    <section className="marquee-section">
      <h2 className="marquee-title">Our Placement Partners</h2>
      <div className="marquee-container">
        <div className="marquee">
          <div className="marquee-content">
            {doubledCompanies.map((company, index) => (
              <div key={index} className="company-item">
                <span className="company-logo">{company.logo}</span>
                <span className="company-name">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
