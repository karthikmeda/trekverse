import React from 'react';
import './SupportingTeam.css';

// Import team member images from utility/Members
import medhaImg from '../utility/Members/medhaimg.jpeg';
import karthikImg from '../utility/Members/karthikimg.jpeg';
import nihithaImg from '../utility/Members/nihithaimg.jpeg';
import karthikeyaImg from '../utility/Members/karthikeyaimg.jpeg';
import lokuImg from '../utility/Members/lokuimg.jpeg';
import kousalyaImg from '../utility/Members/kousalyaimg.jpeg';

const SupportingTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Medha',
      company: 'WebileApps',
      image: medhaImg
    },
    {
      id: 2,
      name: 'Karthik',
      company: 'Deloitte',
      image: karthikImg
    },
    {
      id: 3,
      name: 'Nihitha',
      company: 'Coforge',
      image: nihithaImg
    },
    {
      id: 4,
      name: 'Kartheya',
      company: 'TCS',
      image: karthikeyaImg
    },
    {
      id: 5,
      name: 'Loku',
      company: 'IBM',
      image: lokuImg
    },
    {
      id: 6,
      name: 'Kousalya',
      company: 'Wipro',
      image: kousalyaImg
    }
  ];

  return (
    <section className="supporting-team">
      <div className="team-container">
        <h2 className="team-title">Our Supporting Team</h2>
        <p className="team-subtitle">Meet the talented professionals driving TrekVerse forward</p>
        
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-image-wrapper">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="team-image"
                  />
                ) : (
                  <div className="team-image-placeholder">
                    <span className="placeholder-icon">👤</span>
                  </div>
                )}
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-company">{member.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportingTeam;