"use client"
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../data/translations"
import "../style/Footer.css"

export default function Footer() {
  const { language } = useLanguage()
  const t = translations.footer[language]

  return (
    <footer className="footer">
      <div className="footer-topbar"></div>

      <div className="footer-inner">
        
        {/* BRAND */}
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-icon">✦</div>
            <span className="footer-logo-text">Aapli Best.</span>
          </div>
          <p className="footer-description">
            {t.description}
          </p>
          <p className="mobile-text-footer">
            {t.shortdesciption}
          </p>
          <div className="footer-social">
            <a href="https://www.facebook.com/share/1DQaeAjxsr/" target="_blank" rel="noopener noreferrer" className="footer-social-icon">📘</a>
            <a href="https://x.com/aaplibest" target="_blank" rel="noopener noreferrer" className="footer-social-icon">🐦</a>
            <a href="https://www.instagram.com/aaplibest/" target="_blank" rel="noopener noreferrer" className="footer-social-icon">📸</a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="footer-social-icon">▶️</a>
          </div>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <h3>{t.quickLinks.title}</h3>
          <ul>
            <li><a href="https://bestundertaking.com/transport.asp" target="_blank" rel="noopener noreferrer">{t.quickLinks.bestTransport}</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h3>{t.contact.title}</h3>
          <p><strong>{t.contact.helpline}:</strong> <a href="tel:1800227550">1800-227-550 (Toll Free)</a></p>
          <p><strong>{t.contact.email}:</strong> <a href="mailto:transport@bestundertaking.com">transport@bestundertaking.com</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{t.copyright}</p>
        <div className="footer-legal">
          <a href="#">{t.privacy}</a>
          <span>|</span>
          <a href="#">{t.cookies}</a>
        </div>
      </div>
    </footer>
  )
}
