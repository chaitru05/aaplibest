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
       
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-icon">✦</div>
            <span className="footer-logo-text">Aapli Best.</span>
          </div>
          <p className="footer-description">
            Aapli BEST Aaplyachsathi is a people-driven NGO dedicated to uniting passengers and workers of Mumbai’s iconic BEST buses. We strive to preserve this lifeline of the city by promoting fairness, opposing privatization, and protecting the rights and dignity of all who keep Mumbai moving.
          </p>
          <div className="footer-social">
            <a href="https://www.facebook.com/share/1DQaeAjxsr/" target="_blank" rel="noopener noreferrer" className="footer-social-icon">📘</a>
            <a href="https://x.com/aaplibest" target="_blank" rel="noopener noreferrer" className="footer-social-icon">🐦</a>
            <a href="https://www.instagram.com/aaplibest/" target="_blank" rel="noopener noreferrer" className="footer-social-icon">📸</a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="footer-social-icon">▶️</a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="https://bestundertaking.com/transport.asp" target="_blank" rel="noopener noreferrer">BEST Transport</a></li>
            
          </ul>
        </div>

        {/* RIGHT: Contact Info */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><strong>Helpline:</strong> <a href="tel:1800227550">1800-227-550 (Toll Free)</a></p>
          <p><strong>Email:</strong> <a href="mailto:transport@bestundertaking.com">transport@bestundertaking.com</a></p>
          
        </div>
      </div>

      {/* BOTTOM: Copyright */}
      <div className="footer-bottom">
        <p>© 2024 Aapli Best. All Rights Reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  )
}
