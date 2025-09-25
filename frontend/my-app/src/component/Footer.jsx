"use client"
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../data/translations"
import "../style/Footer.css"

export default function Footer() {
  const { language } = useLanguage()
  const t = translations.footer[language]

  return (
    <>
      {/* Services Banner */}
      

      {/* Main Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-section">
              <div className="footer-logo">
                <div className="footer-logo-icon">✦</div>
                <span className="footer-logo-text">Aapli Best.</span>
              </div>
              <p className="footer-description">{t.description}</p>
              <div className="footer-social"></div>
            </div>

            {/* Company Links */}
            <div className="footer-section">
              <h3 className="footer-heading">{t.links}</h3>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h3 className="footer-heading">{t.contact}</h3>
              
            </div>

            {/* Newsletter */}
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="footer-copyright">{t.copyright}</p>
              <div className="footer-bottom-links">
                <span className="footer-divider">|</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
