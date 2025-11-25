"use client";
import "../style/route.css";
import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../data/translations";
import { Play } from "lucide-react";
import Footer from "./Footer";

const Routedev = () => {
  const { language } = useLanguage();
  const t = translations.routeDev[language];

  const [videoModal, setVideoModal] = useState(false);

  const handleVideoClick = () => {
    setVideoModal(true);
  };

  const closeModal = () => {
    setVideoModal(false);
  };

  return (
    <>
      <section className="route-section">
        <div className="route-content-section">
          <h1
            className="route-heading"
            dangerouslySetInnerHTML={{ __html: t.heading }}
          />
        </div>

        <div className="route-image-mask-container">
          <div className="route-cont"></div>
          <div className="route-cont2"></div>
          <div className="route-image-mask">
            <img src="Route-hero.jpeg" alt="Route Advocacy" />
          </div>
        </div>
      </section>

      <section className="route-wrapper">
        <div className="route-left">
          <div className="route-card-grid">
            <div className="route-card">
              <img src="A84.jpeg" alt="Community work" />
            </div>
            <div className="route-card">
              <img src="A30-2.jpeg" alt="Public transport" />
            </div>
            <div className="route-card wide">
              <img src="A30-3.jpeg" alt="BEST route" />
            </div>
          </div>
        </div>

        <div className="route-right">
          <h2>{t.a30Title}</h2>
          <p dangerouslySetInnerHTML={{ __html: t.a30Desc }} />
        </div>
      </section>

      <section className="route-achievements">
        <div className="achievements-container">
          <h2 className="achievements-heading">{t.achievementsTitle}</h2>

          <div className="content-layout">
            <div
              className="video-section"
              onClick={handleVideoClick}
              role="button"
              tabIndex={0}
            >
              <img src="routevideo.png" alt="Video thumbnail" />
              <div className="play-overlay">
                <Play className="play-icon" size={64} />
              </div>
            </div>

            <div className="achievements-grid">
              {t.achievements.map((item, index) => (
                <div key={index} className="achievement-card">
                  <h3 className="card-title-ach">{item.title}</h3>
                  <p className="card-description-ach">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🎬 Video Modal (local video) */}
      {videoModal && (
        <div className="video-modal" onClick={closeModal}>
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()} // prevent close on video click
          >
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <video width="800" controls autoPlay>
              <source src="/A30-video.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Routedev;
