import React from 'react';
import '../style/Route.css';

function Routedev() {
  const achievements = [
    {
      title: "Route A-30 Launch Success",
      description: "Successfully advocated for the launch of Route A-30 through persistent engagement and strategic follow-up with BEST officials, ensuring improved connectivity for thousands of daily commuters.",
      image: "https://images.pexels.com/photos/1101874/pexels-photo-1101874.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Route C-10 Optimization",
      description: "Led comprehensive modifications to Route C-10 by incorporating valuable passenger feedback and optimizing route coverage, resulting in enhanced service quality and passenger satisfaction.",
      image: "https://images.pexels.com/photos/1007025/pexels-photo-1007025.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Route 44 to A-44 Conversion",
      description: "Spearheaded the strategic conversion of Route 44 into A-44, delivering superior connectivity and operational efficiency that benefits both commuters and the transit system.",
      image: "https://images.pexels.com/photos/1453696/pexels-photo-1453696.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Route 218 Extension Achievement",
      description: "Championed the extension of Route 218 from TB Hospital to P.T. Udyan Bus Station, Sewree, dramatically improving service accessibility for commuters throughout the Sewree belt area.",
      image: "https://images.pexels.com/photos/2105595/pexels-photo-2105595.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Metro Connectivity - Route 175",
      description: "Identified the critical need for Dadar Metro Station connectivity and successfully advocated for a new route, which culminated in the launch of Route 175, bridging important transit gaps.",
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Route 200 Extension to A-200",
      description: "Through persistent follow-up efforts, secured the extension of Route 200 from Wadala Depot to Jijamata Udyan, transforming it into the enhanced A-200 service with broader coverage.",
      image: "https://images.pexels.com/photos/1545163/pexels-photo-1545163.jpeg?auto=compress&cs=tinysrgb&w=800"
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
          <h1 className="hero-title">Route Development & Advocacy</h1>
          <p className="hero-subtitle">
            Transforming Public Transportation Through Strategic Leadership and Community Advocacy
          </p>
          <p className="hero-description">
            Dedicated to enhancing Mumbai's public transit system through innovative route planning, 
            strategic advocacy, and relentless pursuit of improved connectivity for millions of daily commuters.
          </p>
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
          </section>
        ))}
      </div>

      {/* Footer */}
   
    </div>
  );
}

export default Routedev;