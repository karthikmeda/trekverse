import React, { useState } from 'react';
import { PROGRAMS, CATEGORIES } from '../data/programs';
import CourseDetail from './CourseDetail';
//import CertificateSection from  './CertificateSection';
import './Programs.css';

const Programs = ({ visible }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const filteredPrograms =
    selectedCategory === 'all'
      ? PROGRAMS
      : PROGRAMS.filter((program) => program.category === selectedCategory);

  if (!visible) return null;

  return (
    <>
      <section className="programs">
        <div className="programs-container">
          <h2 className="programs-title">Our Programs</h2>
          <p className="programs-subtitle">
            Choose from our comprehensive range of programs across multiple domains
          </p>

          {/* Category Filter */}
          <div className="category-filters">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-name">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Programs Grid */}
          <div className="programs-grid">
            {filteredPrograms.map((program) => (
              <div key={program.id} className="program-card">
                <div className="card-header">
                  <h3 className="program-name">{program.name}</h3>
                </div>

                <p className="program-description">{program.description}</p>

                <div className="program-meta">
                  <div className="meta-item">
                    <span className="meta-icon">⏱️</span>
                    <span className="meta-text">{program.duration}</span>
                  </div>
                </div>

                <div className="pricing-section">
                  <span className="current-price">₹{program.price}</span>
                  <span className="original-price">₹{program.originalPrice}</span>
                </div>

                <button 
                  className="view-course-btn"
                  onClick={() => setSelectedCourse(program)}
                >
                  View Course
                </button>
              </div>
            ))}
          </div>

          {filteredPrograms.length === 0 && (
            <div className="no-programs">
              <p>No programs found in this category. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {selectedCourse && (
        <CourseDetail course={selectedCourse} onClose={() => setSelectedCourse(null)} />
      )}
    </>
  );
};

export default Programs;
