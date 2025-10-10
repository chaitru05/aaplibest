"use client"

import { Link } from "react-scroll"
import { useState } from "react"
import { Mail, Facebook, Twitter, Instagram, Youtube, Globe,MessageCircle } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../data/translations"
import "../style/Navbar.css"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { language, toggleLanguage, isMarathi } = useLanguage()
  const t = translations.navbar[language]

  // Close menu on link click (for mobile UX)
  const handleLinkClick = () => setMenuOpen(false)

  return (
    <div className="navbar-wrapper">
      {/* Top Contact Bar */}
      <div className="top-bar">
        <div>
          <div className="contact-info">
            <div className="contact-item">
              <Mail size={16} />
              <span>aaplibest@gmail.com</span>
            </div>
          </div>
          <div className="social-links">
            <button
              onClick={toggleLanguage}
              className="language-toggle"
              aria-label={`Switch to ${isMarathi ? "English" : "Marathi"}`}
            >
              <Globe size={16} />
              <span>{isMarathi ? "ENG" : "मर"}</span>
            </button>
            <a
              href="https://www.facebook.com/share/1DQaeAjxsr/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Facebook size={24} />
            </a>

            <a
              href="https://x.com/aaplibest"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Twitter size={24} />
            </a>

            <a
              href="https://www.instagram.com/aaplibest/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Instagram size={24} />
            </a>

            <a
              href="https://www.whatsapp.com/channel/0029VaFYvmzL2ATpdDo6tp0B"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <MessageCircle size={24}  />
            </a>

          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="navbar-container">
        <div className="logo">
          <img src="/logo.jpg" alt="Logo" />
        </div>
        <nav className={`nav-links${menuOpen ? " open" : ""}`}>
          <ul>
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={-700} duration={500}>
              <li>{t.home}</li>
            </Link>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={300}>
              <li>{t.about}</li>
            </Link>
            <Link activeClass="active" to="team" spy={true} smooth={true} offset={-60} duration={500}>
              <li>{t.team}</li>
            </Link>
            <Link activeClass="active" to="work" spy={true} smooth={true} offset={-50} duration={500}>
              <li>{t.work}</li>
            </Link>
            <Link activeClass="active" to="volunteer" spy={true} smooth={true} offset={-100} duration={500}>
              <li>{t.volunteer}</li>
            </Link>
            <Link activeClass="active" to="feedback" spy={true} smooth={true} offset={-100} duration={500}>
              <li>{t.contact}</li>
            </Link>
          </ul>
        </nav>
        <div className="hamburger" onClick={() => setMenuOpen((prev) => !prev)} aria-label="Toggle navigation">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  )
}

export default Navbar
