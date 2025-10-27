import "../style/route.css";
import React, { useState } from 'react';
import { Play } from 'lucide-react';
import Footer from "./Footer";
const Routedev = () => {
  const achievements = [
  {
    id: 1,
    title: 'Route C-10 Optimization',
    description:
      'Played a key role in modifying Route C-10, incorporating passenger feedback and optimizing coverage.',
  },
  {
    id: 2,
    title: 'Route 44 Conversion to A-44',
    description:
      'Recommended and pushed through the conversion of Route 44 into A-44, enabling better connectivity and operational efficiency.',
  },
  {
    id: 3,
    title: 'Route 218 Extension',
    description:
      'Advocated for the extension of Route 218 from TB Hospital to P.T. Udyan Bus Station, Sewree, offering improved service access to commuters in the Sewree belt.',
  },
  {
    id: 4,
    title: 'Route 175 Launch',
    description:
      'Advocated for starting a new route providing connectivity to Dadar Metro Station, which resulted in the launch of Route 175.',
  },
  {
    id: 5,
    title: 'Route 200 Extension to A-200',
    description:
      'Due to our constant follow-up, Route no. 200 was extended up to Jijamata Udyan from the existing Wadala Depot and will now run as A-200.',
  },
  {
    id: 6,
    title: 'Route 84 via Coastal Road',
    description:
      'Route no. 84 was started from our suggestion, connecting the western suburbs to South Mumbai via the Coastal Road, saving significant travel time.',
  },
];


  const [, setVideoModal] = useState(null);

  const handleVideoClick = () => {
    setVideoModal('#');
    console.log('Opening video');
  };

  return (
    <>
    <section className="route-section">
      <div className="route-content-section">
        <h1 className="route-heading">
          Route Development <br />
          Advocacy<br />
        </h1>
      </div>

      <div className="route-image-mask-container">
        <div className="route-cont"></div>
        <div className="route-cont2"></div>
        <div className="route-image-mask">
          <img 
            src="Route-hero.jpeg" 
            alt="Community healthcare - women and children gathering"
          />
        </div>

       
      </div>
    </section>
         <section className="route-wrapper">
      {/* LEFT SIDE - IMAGES */}
      <div className="route-left">
        <div className="route-card-grid">
          <div className="route-card">
            <img src="A30-1.jpeg" alt="Community work" />
          </div>
          <div className="route-card">
            <img src="A30-2.jpeg"  alt="Public transport" />
          </div>
          <div className="route-card wide">
            <img src="A30-3.jpeg"  alt="BEST route" />
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - CONTENT */}
      <div className="route-right">
        <h2>Driving Change. Empowering Commutes.</h2>
        <p>
          Successfully advocated for the launch of{" "}
          <strong>Route A-30</strong> after continuous follow-up with{" "}
          <strong>BEST officials</strong>.  
          This initiative improved last-mile connectivity and provided a more
          efficient travel option for hundreds of commuters.
        </p>
      </div>
    </section>

    <section className="route-achievements">
      <div className="achievements-container">
        <h2 className="achievements-heading">Our Key Route Achievements</h2>

        <div className="content-layout">
          <div
            className="video-section"
            onClick={handleVideoClick}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleVideoClick();
            }}
          >
            <img
              src="https://images.pexels.com/photos/1030841/pexels-photo-1030841.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Route achievements video"
            />
            <div className="play-overlay">
              <Play className="play-icon" size={64} />
            </div>
          </div>

          <div className="achievements-grid">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="achievement-card">
                <h3 className="card-title-ach">{achievement.title}</h3>
                <p className="card-description-ach">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <Footer/>
      </>
  );
};

export default Routedev;
