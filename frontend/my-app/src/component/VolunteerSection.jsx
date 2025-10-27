import React from 'react';
import '../style/volunteer-section.css';
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../data/translations"
const VolunteerSection = () => {
  const { language } = useLanguage()
  const t = translations.volunteer[language]
  return (
    <section className="volunteer-section">
      <div className="volunteer-overlay">
        <div className="volunteer-content">
          <h1 className="volunteer-headline">
          {t.heading}
          </h1>
          <button className="volunteer-button">
          {t.button}
          </button>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;