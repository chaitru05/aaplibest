"use client"
import React, { useState } from 'react'
import styles from "./vision-section.module.css"
import "../style/BestVitthal.css"
import Footer from './Footer'
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../data/translations"

const Cnetric = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const { language } = useLanguage()
  const t = translations.centric[language]

  const projectData = {
    title: t.vitthalTitle,
    cards: t.vitthalCards
  }

  const bestDayData = {
    title: t.bestDayTitle,
    description: t.bestDayDescription,
    media: t.bestDayMedia
  }

  const openVideo = (videoUrl) => {
    setSelectedVideo(videoUrl)
  }

  const closeVideo = () => {
    setSelectedVideo(null)
  }

  return (
    <section
      className={styles["vision-section-container"]}
      style={{ position: 'relative', padding: 0, overflow: 'hidden' }}
    >
      <img
        src="/hero-centric-1.jpg"
        alt="Cnetric"
        style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }}
      />

      <div
        className={styles["vision-section-content"]}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          pointerEvents: 'none',
        }}
      >
        <h2 className={styles.heading} style={{ pointerEvents: 'auto' }}>
        </h2>
      </div>

      {/* HERO SECTION */}
      <section className={styles["hero-section-container"]}>
        <div className={styles["hero-section-content"]}>
          <div className={styles["hero-text-column"]}>
            <h1
              className={styles["hero-heading"]}
              dangerouslySetInnerHTML={{ __html: t.heroTitle }}
            />
          </div>

          <div className={styles["hero-description-column"]}>
            <p className={styles["hero-description"]}>
              {t.heroDescription}
            </p>
          </div>
        </div>

        <div className={styles["hero-video-container"]}>
          <video width="100%" height="auto" controls>
            <source src="/video-2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Vitthal Section */}
      <div className="best-vitthal-container">
        <header className="page-header">
          <h1 className="main-title">{projectData.title}</h1>
        </header>

        <section className="description-section">
          <div className="description-content">
            <p className="description-intro"
               dangerouslySetInnerHTML={{ __html: t.vitthalIntro }} />

            <p className="description-conclusion">
              {t.vitthalConclusion}
            </p>
          </div>
        </section>

        <section className="content-section-vithal">
          <div className="cards-container-vithal">
            {projectData.cards.map((card) => (
              <div key={card.id} className="project-card">
                <div
                  className="card-image-container"
                  onClick={() => card.hasVideo && openVideo(card.videoUrl)}
                >
                  <img src={card.image} alt={card.title} className="card-image" />

                  {card.hasVideo && (
                    <div className="video-overlay">
                      <div className="play-button">
                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="12" fill="rgba(0,0,0,0.7)" />
                          <polygon points="10,8 16,12 10,16" fill="white" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="video-modal" onClick={closeVideo}>
            <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={closeVideo}>
                <svg width="24" height="24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>

              <video src={selectedVideo} controls autoPlay className="modal-video" />
            </div>
          </div>
        )}
      </div>

      {/* BEST DAY SECTION */}
      <section className="best-day-section">
        <div className="best-day-content">
          <div className="best-day-text">
            <h2 className="best-day-title">{bestDayData.title}</h2>
            <p className="best-day-description">{bestDayData.description}</p>
          </div>

          <div className="best-day-media">
            <div className="media-grid">
              {bestDayData.media.map((item) => (
                <div key={item.id} className="media-item">
                  <div
                    className="media-image-container"
                    onClick={() => item.hasVideo && openVideo(item.videoUrl)}
                  >
                    <img src={item.image} alt={item.title} className="media-image" />

                    {item.hasVideo && (
                      <div className="video-overlay">
                        <div className="play-button">
                          <svg width="50" height="50" fill="none">
                            <circle cx="12" cy="12" r="12" fill="rgba(0,0,0,0.7)" />
                            <polygon points="10,8 16,12 10,16" fill="white" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </section>
  )
}

export default Cnetric
