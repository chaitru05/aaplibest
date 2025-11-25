"use client"
import React from 'react'
import "../style/policyacc.css"
import Footer from './Footer'
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../data/translations"

const Policyacc = () => {
  const { language } = useLanguage()
  const t = translations.policyAcc[language]

  return (
    <div className="policy-container">

      <div className="policy-hero-section">
        <div className="policy-bg-box">
          <div>
            <h1 className="policy-hero-title">{t.title}</h1>
          </div>

          <div className="policy-hero-content">
            <ul className="policy-bullet-list">
              <li>{t.points[0]}</li>
              <li>{t.points[1]}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="policy-full-width-rectangle">
        <img
          src="./policyimg2.jpeg"
          alt={t.imageAlt}
          className="policy-rectangle-image"
        />
      </div>

      <div className="policy-cards-container">
        <div className="policy-card">
          <img
            src="./policyimg2.jpeg"
            alt={t.cardAlt1}
            className="policy-card-image"
          />
        </div>

        <div className="policy-card">
          <img
            src="policyvideoimg2.png"
            alt={t.cardAlt2}
            className="policy-card-image"
          />
        </div>

        <div className="policy-card">
          <img
            src="policyvideoimg1.png"
            alt={t.cardAlt3}
            className="policy-card-image"
          />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Policyacc
