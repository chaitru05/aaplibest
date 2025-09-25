import React from 'react';
import '../style/volunteer-section.css';

const VolunteerSection = () => {
  return (
    <section className="volunteer-section">
      <div className="volunteer-overlay">
        <div className="volunteer-content">
          <h1 className="volunteer-headline">
            Join Our Community Impact Initiative
          </h1>
          <button className="volunteer-button">
            Become a Volunteer
          </button>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;