import React from 'react'
import styles from "./vision-section.module.css"
import "../style/BestVitthal.css"
import { useState } from "react"
const Cnetric = () => {
    const [selectedVideo, setSelectedVideo] = useState(null)

  const projectData = {
    title: "BEST Vitthal - Honoring Conductors on Ashadhi Ekadashi",
    cards: [
      {
        id: 1,
        image: "/best-bus-conductors-felicitation-ceremony.png",
        hasVideo: true,
        videoUrl: "/video-vitthal-1.mp4",
        title: "BEST Conductors Campaign",
      },
      {
        id: 2,
        image: "/vitthalimg2.png",
        hasVideo: true,
        videoUrl: "video-vitthal-2.mp4",
        title: "Modern-day Vitthals",
      },
      {
        id: 3,
        image: "/vitthalimg.jpeg",
        hasVideo: false,
        title: "Ashadhi Ekadashi Celebration",
      },
    ],
  }
const bestDayData = {
    title: "Celebrating BEST Day – 7th August 2025",
    description:
      "On BEST Day, 7th August 2025, we visited the Ghatkopar Depot to celebrate the spirit of service carried forward by the BEST family. Chocolates were distributed to the staff as a small yet meaningful gesture of gratitude, symbolizing the sweetness they bring to the daily lives of Mumbaikars through their tireless service.",
    media: [
      {
        id: 1,
        image: "/BEST DAY 2.jpg",
        hasVideo: false,
        title: "Chocolate Distribution",
      },
      {
        id: 2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCefatA8TXJLpYhWPPWwgm78tUqjr91ooSQw&s",
        hasVideo: true,
        videoUrl: "BEST DAY Video.mp4",
        title: "Ghatkopar Depot Visit",
      },
      {
        id: 3,
        image: "/BEST DAY 1.jpg",
        hasVideo: false,
        title: "Staff Celebration",
      },
    ],
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
        <section className={styles["hero-section-container"]}>
      <div className={styles["hero-section-content"]}>
        <div className={styles["hero-text-column"]}>
          <h1 className={styles["hero-heading"]}>
            Celebrating the Heart of <br/> Mumbai  <br /> <span className={styles["hero-heading-accent"]}>– Our People Buses Stories</span>
          </h1>
        </div>
        <div className={styles["hero-description-column"]}>
          <p className={styles["hero-description"]}>
             At Aapli BEST Aaplyachsathi, we believe in celebrating the unsung heroes of Mumbai’s lifeline—our buses and the people behind them. Through heartfelt cultural and human-centric initiatives, we honor their dedication, preserve memories of iconic journeys, and connect with communities on an emotional level.
          </p>
       
        </div>
      </div>
      <div className={styles["hero-video-container"]}>
        {/* Placeholder for the video */}
        <video width="100%" height="auto" controls>
  <source src="/video-2.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
      </div>
    </section>
    <div className="best-vitthal-container">
      <header className="page-header">
        <h1 className="main-title">{projectData.title}</h1>
      </header>

      <section className="description-section">
        <div className="description-content">
          <p className="description-intro">
            On the sacred occasion of <strong>Ashadhi Ekadashi</strong>, we conceptualized and celebrated{" "}
            <strong>'BEST Vitthal'</strong>, a unique initiative that highlighted BEST conductors as the modern-day
            Vitthals of Mumbai.
          </p>
          
          <p className="description-conclusion">
            This heartfelt campaign honored their silent yet invaluable service to Mumbai city.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="cards-container">
          {projectData.cards.map((card) => (
            <div key={card.id} className="project-card">
              <div className="card-image-container" onClick={() => card.hasVideo && openVideo(card.videoUrl)}>
                <img src={card.image || "/placeholder.svg"} alt={card.title} className="card-image" />
                {card.hasVideo && (
                  <div className="video-overlay">
                    <div className="play-button">
                      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            <video src={selectedVideo} controls autoPlay className="modal-video">
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
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
                <div className="media-image-container" onClick={() => item.hasVideo && onVideoOpen(item.videoUrl)}>
                  <img src={item.image || "/placeholder.svg"} alt={item.title} className="media-image" />
                  {item.hasVideo && (
                    <div className="video-overlay">
                      <div className="play-button">
                        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </section>
    
  )
}

export default Cnetric
