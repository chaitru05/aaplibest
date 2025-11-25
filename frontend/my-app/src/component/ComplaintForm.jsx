"use client";

import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../data/translations";
import "../style/complaint-form.css";

export default function ComplaintForm() {
  const { language } = useLanguage();
  const t = translations.complaint[language];

  const handleComplaintClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSclGu598MlAUoo32xZTc9R1IWQEZrD3tmgJAKnWQJC3QcfQJA/viewform",
      "_blank"
    );
  };

  return (
    <div className="complaint-container">
      {/* Decorative Shapes */}
     
      {/* Image */}
      <div className="complaint-image-section">
        <img
          src="/complaint.png"
          alt={t.imageAlt}
          className="complaint-image"
        />
      </div>

      {/* Text Section */}
      <div className="complaint-form-section">
       
        <div className="complaint-content">
          <h1 className="complaint-title">
            {t.headingLine1} <br /> {t.headingLine2}
          </h1>

          <p className="complaint-description">{t.description}</p>
          <p className="mobile-text">{t.shortdescription}</p>

          <div className="complaint-button-wrapper">
            <button className="submit-button" onClick={handleComplaintClick}>
              {t.button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
