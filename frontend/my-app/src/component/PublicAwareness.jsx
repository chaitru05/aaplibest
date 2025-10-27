import React from 'react';
import '../style/PublicAwareness.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PublicAwareness = () => {
  const cards = [
    {
      id: 1,
      title: "",
      description: "",
      color: "green",
      image: "social1.png"
    },
    {
      id: 2,
      title: "",
      description: "",
      color: "orange",
      image: "social2.png"
    },
    {
      id: 3,
      title: "",
      description: "",
      color: "red",
      image: ""
    }
  ];

  return (
    <section className="public-awareness-section-1">
      <div className="section-header">
        <div className="header-icon"></div>
        <h2 className="section-title">Social Media</h2>
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
    
        
        
      </div>
    </section>
  );
};

export default PublicAwareness;