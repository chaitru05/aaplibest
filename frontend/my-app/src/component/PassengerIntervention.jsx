"use client"
import React from 'react';
import './PassengerInterventions.css';
import { Users, FileText, Shield, MapPin } from 'lucide-react';
import Footer from './Footer';
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../data/translations";

const PassengerIntervention = () => {
  const { language } = useLanguage();
  const t = translations.passengerCentric[language];

  const interventions = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1641306590980-2241ba686dd6',
      icon: <Users className="card-icon" />,
      description: t.cards[0].description,
    },
    {
      id: 2,
      image: './pc-videothumb.png',
      icon: <FileText className="card-icon" />,
      description: t.cards[1].description,
    },
    {
      id: 3,
      image: './pc-income.jpg',
      icon: <MapPin className="card-icon" />,
      description: t.cards[2].description,
    },
    {
      id: 4,
      image: './pc-bars.png',
      icon: <Shield className="card-icon" />,
      description: t.cards[3].description,
    }
  ];

  return (
    <>
      <div className="passenger-interventions-container">
        <div className="title-section">
          <h1 className="main-title">{t.title}</h1>
        </div>

        <div className="cards-grid">
          {interventions.map((item) => (
            <div key={item.id} className="intervention-card">
              <div className="card-image-container">
                <img
                  src={item.image}
                  alt={`Intervention ${item.id}`}
                  className="card-image"
                />
              </div>
              <div className="card-description">
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PassengerIntervention;
