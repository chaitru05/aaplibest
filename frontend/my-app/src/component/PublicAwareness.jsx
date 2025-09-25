import React from 'react';
import '../style/PublicAwareness.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PublicAwareness = () => {
  const cards = [
    {
      id: 1,
      title: "Poster Distribution",
      description: "Designed and distributed self-printed posters at major bus stops for new services like Route A-30.",
      color: "green",
      image: "https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Social Media Campaigns",
      description: "Run active social media campaigns to update citizens on routes, services, and initiatives.",
      color: "orange",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Advocacy Efforts",
      description: "Consistently advocate for late-night Ganeshotsav buses (since 2022) via official letters.",
      color: "red",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="public-awareness-section">
      <div className="section-header">
        <div className="header-icon"></div>
        <h2 className="section-title">Public Awareness and Communication</h2>
      </div>
      
      <div className="cards-container">
        <div className="background-split"></div>
        
        <div className="cards-wrapper">
          {cards.map((card) => (
            <div key={card.id} className={`card card-${card.color}`}>
              <div className="card-image">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
                <button className="read-more-btn">READ MORE</button>
              </div>
            </div>
          ))}
        </div>
        
        <button className="nav-arrow nav-arrow-right">
          <ChevronRight size={24} />
        </button>
        
        <div className="pagination-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </section>
  );
};

export default PublicAwareness;