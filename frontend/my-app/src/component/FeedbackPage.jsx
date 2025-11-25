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
    <section className="feedback">
      <div className="feedback-container">
      <div className="content-wrapper">
        {/* Left Image */}
        <div className="image-section left-image">
          <img src="/bus-illus2.png" alt={t.imageAlt1} className="section-image left-rounded" />
        </div>

        {/* Central Content */}
        <div className="central-content">
          <h1 className="main-title">{t.heading}</h1>
       

          <div className="content-text">
            <p>{t.description}</p>

      
          </div>

          <button className="feedback-button" onClick={handleFeedbackClick}>
            {t.button}
          </button>
        </div>

        {/* Right Image */}
        <div className="image-section right-image">
          <img src="/bus-illus1.png" alt={t.imageAlt2} className="section-image right-rounded" />
        </div>
      </div>
    </div> </section>
  )
}

export default FeedbackPage
