"use client"
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../data/translations"
import "./feedback-page.css"

const FeedbackPage = () => {
  const { language } = useLanguage()
  const t = translations.feedback[language]

  const handleFeedbackClick = () => {
    // Replace with your actual feedback form URL
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSclGu598MlAUoo32xZTc9R1IWQEZrD3tmgJAKnWQJC3QcfQJA/viewform",
      "_blank",
    )
  }

  return (
    <div className="feedback-container">
      <div className="content-wrapper">
        {/* Left Image */}
        <div className="image-section left-image">
          <img src="/bus-img3.jpeg" alt={t.imageAlt1} className="section-image left-rounded" />
        </div>

        {/* Central Content */}
        <div className="central-content">
          <h1 className="main-title">{t.title}</h1>
          <p className="subtitle">{t.subtitle}</p>

          <div className="content-text">
            <p>{t.description1}</p>

            <p>{t.description2}</p>
          </div>

          <button className="feedback-button" onClick={handleFeedbackClick}>
            {t.button}
          </button>
        </div>

        {/* Right Image */}
        <div className="image-section right-image">
          <img src="/bus-img1.jpeg" alt={t.imageAlt2} className="section-image right-rounded" />
        </div>
      </div>
    </div>
  )
}

export default FeedbackPage
