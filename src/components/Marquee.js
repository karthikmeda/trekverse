import React from 'react';
import { COMPANIES } from '../data/programs';
import './Marquee.css';

// Import company icons
import wiproIcon from '../utility/companyIcons/wipro.png';
import tcsIcon from '../utility/companyIcons/tcs';
import msIcon from '../utility/companyIcons/microsoft.png';
import deloitteIcon from '../utility/companyIcons/deloitte.png';
import capgeminiIcon from '../utility/companyIcons/capgemini.png';
import infosysIcon from '../utility/companyIcons/infosys.png';
import accentureIcon from '../utility/companyIcons/accenture.png';
import ibmIcon from '../utility/companyIcons/ibm';

const Marquee = () => {
  // Map company icons
  const companyIconMap = {
    'Wipro': wiproIcon,
    'TCS': tcsIcon,
    'Microsoft': msIcon,
    'Deloitte': deloitteIcon,
    'Campgeimi': capgeminiIcon,
    'Infosys': infosysIcon,
    'Accenture': accentureIcon,
    'IBM': ibmIcon
  };

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
                {companyIconMap[company.name] ? (
                  <img 
                    src={companyIconMap[company.name]} 
                    alt={company.name}
                    className="company-logo-img"
                  />
                ) : (
                  <span className="company-logo">{company.logo}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
