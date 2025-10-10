"use client"

import { useState } from "react"
import styles from "./policy-accountability.module.css"

const mediaCards = [
  {
    id: 1,
    title: "Community Projects",
    description: "On-ground work with partners and volunteers.",
    imgSrc: "/policyimg1.jpeg",
  },
  {
    id: 2,
    title: "Clean-up Drive",
    description: "Mobilizing communities for cleaner public spaces.",
    imgSrc: "/policyimg2.jpeg",
  },
  {
    id: 3,
    title: "Awareness Workshop",
    imgSrc: "/policyvideoimg1.png",
    videoSrc: "policyvideo-1.mp4",
    hideDescription: true,
  },
  {
    id: 4,
    title: "Training & Outreach",
    imgSrc: "/policyvideoimg2.png",
    videoSrc: "policyvideo-2.mp4",
    hideDescription: true,
  },
]

export default function PolicyAccountabilitySection() {
  const [openVideo, setOpenVideo] = useState({})

  const toggleVideo = (id) => {
    setOpenVideo((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <section className={styles.section} aria-labelledby="policy-heading">
      {/* Intro: centered heading + bullet points */}
      

      {/* Unified yellow media panel with four cards */}
      <section className={styles.mediaPanel} aria-label="Project gallery and highlights">
        <div className={styles.cardsGrid}>
          {mediaCards.map((card) => {
            const hasVideo = Boolean(card.videoSrc)
            const isOpen = !!openVideo[card.id]

            return (
              <article key={card.id} className={styles.card}>
                <div className={styles.cardMedia}>
                  <img
                    src={card.imgSrc || "/placeholder.svg"}
                    alt={`${card.title} preview`}
                    className={styles.cardImage}
                    {...(hasVideo
                      ? {
                          role: "button",
                          tabIndex: 0,
                          "aria-pressed": isOpen,
                          "aria-label": isOpen ? `Hide video: ${card.title}` : `Play video: ${card.title}`,
                          onClick: () => toggleVideo(card.id),
                          onKeyDown: (e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault()
                              toggleVideo(card.id)
                            }
                          },
                        }
                      : {})}
                  />
                </div>

                {hasVideo && isOpen && (
                  <div className={styles.videoWrap}>
                    <video className={styles.video} controls preload="metadata" aria-label={`${card.title} video`}>
                      <source src={card.videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </section>
    </section>
  )
}
