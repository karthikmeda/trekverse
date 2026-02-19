import React from 'react';
import CertificateSection from './CertificateSection';
import './CourseDetail.css';

const CourseDetail = ({ course, onClose }) => {
  if (!course) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="course-modal-overlay" onClick={handleOverlayClick}>
      <div className="course-modal">
        <div className="modal-header">
          <h2>{course.name}</h2>
          <button 
            className="close-button" 
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="modal-content">
          {/* Course Overview */}
          <div className="course-section">
            <h3>Course Overview</h3>
            <p>{course.overview}</p>
          </div>

          {/* Course Meta Information */}
          <div className="course-meta">
            <div className="meta-box">
              <span className="meta-label">Duration</span>
              <span className="meta-value">{course.duration}</span>
            </div>
            <div className="meta-box">
              <span className="meta-label">Level</span>
              <span className="meta-value">{course.level}</span>
            </div>
            <div className="meta-box">
              <span className="meta-label">Students</span>
              <span className="meta-value">{course.students}+</span>
            </div>
          </div>

          {/* Curriculum Section */}
          <div className="course-section">
            <h3>Course Curriculum</h3>
            <div className="curriculum-list">
              {course.curriculum && course.curriculum.map((item, index) => (
                <div key={index} className="module-item">
                  <div className="module-header">
                    <span className="module-number">{index + 1}</span>
                    <h4>{item.module}</h4>
                  </div>
                  <div className="topics-container">
                    {item.topics && item.topics.map((topic, topicIndex) => (
                      <span key={topicIndex} className="topic-pill">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates Section */}
          <CertificateSection />

          {/* Action Buttons */}
          <div className="modal-actions">
            <button className="enroll-btn">Enroll in This Course</button>
            <button className="cancel-btn" onClick={onClose}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;