"use client"
import React from 'react';
import '../style/PublicAwareness.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Footer from './Footer';
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../data/translations";

const PublicAwareness = () => {
  const { language } = useLanguage();
  const t = translations.publicAwareness[language];

  const publicAwarenessCards = [
    {
      id: 1,
      image: "./public-img.jpg",
      description: t.cards[0],
    },
    {
      id: 2,
      image: "./bestday.jpg",
      description: t.cards[1],
    },
    {
      id: 3,
      image: "./bestexb.png",
      description: t.cards[2],
    },
    {
      id: 4,
      image: "./latenigth.jpeg",
      description: t.cards[3],
    },
  ];

  const socialMediaCards = [
    { id: 1, image: "./socialmedia1.jpg", description: "" },
    { id: 2, image: "./social1.png", description: "" },
    { id: 3, image: "social2.png", description: "" },
  ];

  return (
    <main>
      {/* Public Awareness Section */}
      <section className="publicawar-public-awareness">
        <div className="publicawar-awareness-header">
          <h1 className="publicawar-awareness-title">{t.title}</h1>
        </div>

        <div className="publicawar-cards-grid">
          {publicAwarenessCards.map((card) => (
            <div key={card.id} className="publicawar-card">
              <img src={card.image} alt="card content" className="publicawar-card-image" />
              <p className="publicawar-card-description">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Media Section */}
      <section className="publicawar-social-media">
        <div className="publicawar-social-header">
          <h2 className="publicawar-social-title">{t.socialTitle}</h2>
          <p className="publicawar-social-description">{t.socialDescription}</p>
        </div>

        <div className="publicawar-cards-grid-three">
          {socialMediaCards.map((card) => (
            <div key={card.id} className="publicawar-card">
              <img src={card.image} alt="card content" className="publicawar-card-image" />
              <p className="publicawar-card-description">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PublicAwareness;
