import React from 'react';
import '../style/Route.css';
import { Timeline } from './Timeline';

function Routedev() {
  const achievements = [
    {
      title: "Route A-30 Launch Success",
      description: "Successfully advocated for the launch of Route A-30 through persistent engagement and strategic follow-up with BEST officials, ensuring improved connectivity for thousands of daily commuters.",
      image: ""
    },
    {
      title: "Route C-10 Optimization",
      description: "Led comprehensive modifications to Route C-10 by incorporating valuable passenger feedback and optimizing route coverage, resulting in enhanced service quality and passenger satisfaction.",
      image: ""
    },
    {
      title: "Route 44 to A-44 Conversion",
      description: "Spearheaded the strategic conversion of Route 44 into A-44, delivering superior connectivity and operational efficiency that benefits both commuters and the transit system.",
      image: ""
    },
    {
      title: "Route 218 Extension Achievement",
      description: "Championed the extension of Route 218 from TB Hospital to P.T. Udyan Bus Station, Sewree, dramatically improving service accessibility for commuters throughout the Sewree belt area.",
      image: ""
    },
    {
      title: "Metro Connectivity - Route 175",
      description: "Identified the critical need for Dadar Metro Station connectivity and successfully advocated for a new route, which culminated in the launch of Route 175, bridging important transit gaps.",
      image: ""
    },
    {
      title: "Route 200 Extension to A-200",
      description: "Through persistent follow-up efforts, secured the extension of Route 200 from Wadala Depot to Jijamata Udyan, transforming it into the enhanced A-200 service with broader coverage.",
      image: ""
    },
    {
      title: "Coastal Road Innovation - Route 84",
      description: "Pioneered the concept for Route 84, establishing vital connectivity between western suburbs and South Mumbai via the Coastal Road, delivering significant travel time savings for commuters.",
      image: "https://images.pexels.com/photos/1002100/pexels-photo-1002100.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Route Clarity Initiative & Festival Services",
      description: "Proposed the strategic renumbering of Route 25 to Route 29, eliminating passenger confusion with A-25, while also facilitating special night bus services during Ganeshotsav 2025 across key festival areas.",
      image: "https://images.pexels.com/photos/1059120/pexels-photo-1059120.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <img src="/image.png" alt="Route Icon" style={{ width: '80px', height: '80px', marginBottom: '16px' }} />
          <h1 className="hero-title-route">Route Development & Advocacy</h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="content-container">
        {achievements.map((achievement, index) => (
          <section 
            key={index} 
            className={`achievement-section ${index % 2 === 0 ? 'left-align' : 'right-align'}`}
          >
            <div className="achievement-content">
              <div className="text-content">
                <h2 className="achievement-title">{achievement.title}</h2>
                <p className="achievement-description">{achievement.description}</p>
              </div>
              <div className="image-content">
                <img 
                  src={achievement.image} 
                  alt={achievement.title}
                  className="achievement-image"
                />
              </div>
            </div>
             <Timeline/>
          </section>
         
        ))}
      </div>

      {/* Footer */}
   
    </div>
  );
}

export default Routedev;