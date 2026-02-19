import React from 'react';
import appreciationCert from '../utility/Appreciation Certificate.png';
import completionCert from '../utility/COURCE COMPLETION 2.png';
import internshipCert from '../utility/internship completion.png';
import letterRec from '../utility/Letter of Recommendation.jpg';
import './CertificateSection.css';

const CertificateSection = () => {
  const certificates = [
    {
      id: 1,
      name: 'Appreciation Certificate',
      image: appreciationCert,
      description: 'Recognize your outstanding performance'
    },
    {
      id: 2,
      name: 'Course Completion',
      image: completionCert,
      description: 'Certification upon successful completion'
    },
    {
      id: 3,
      name: 'Internship Completion',
      image: internshipCert,
      description: 'Certificate for internship program completion'
    },
    {
      id: 4,
      name: 'Letter of Recommendation',
      image: letterRec,
      description: 'Professional recommendation letter from instructors'
    }
  ];

  return (
    <div className="certificate-section">
      <h3>Earn Recognized Certifications</h3>
      <p className="cert-subtitle">Upon completing this program, you'll earn the following certifications:</p>
      
      <div className="certificates-grid">
        {certificates.map((cert) => (
          <div key={cert.id} className="certificate-card">
            <div className="cert-image-container">
              <img src={cert.image} alt={cert.name} className="cert-image" />
            </div>
            <div className="cert-info">
              <h4>{cert.name}</h4>
              <p>{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificateSection;