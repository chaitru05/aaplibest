"use client"

import "./App.css"
import { useEffect, useState, useRef } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import buildingBg from "./assets/bg2.jpg"
import redBus from "./assets/hero-1.png"

import TeamSection from "./component/TeamSection"
import CategorySlider from "./component/CategorySlider"
import About from "./component/About"
import Footer from "./component/Footer"
import VolunteerSection from "./component/VolunteerSection"
import Navbar from "./component/Navbar"
import FeedbackPage from "./component/FeedbackPage"
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext"
import { translations } from "./data/translations"
import About1 from "./component/About1.jsx"
import Cnetric from "./component/Cnetric.jsx"
import Routedev from "./component/Routedev.jsx"
import Public from "./component/Public.jsx"
import Policyacc from "./component/Policyacc.jsx"
import Passenger from "./component/Passenger.jsx"
import HelpLineIcon from "./component/HelpLineIcon.jsx"

function HomePage() {
  const { language } = useLanguage()
  const heroT = translations.hero[language]

  const [isLoaded, setIsLoaded] = useState(false)
  const [animate, setAnimate] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    if (imgRef.current) observer.observe(imgRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />

      <section id="home" className="hero-section">
        {/* Background */}
        <div
          className="hero-background"
          style={{ backgroundImage: `url(${buildingBg})` }}
        >
          <div className="hero-overlay-dark" />
        </div>

        {/* Slanted overlay with text */}
        <div className="hero-content-overlay">
          <div className="hero-content">
            <div
              className={`hero-text-container ${
                isLoaded ? "animate-text-fade" : "text-hidden"
              }`}
            > <h className="heading-hero">Aapli Best</h>
              <p className="hero-tagline"> "Aamhi Aaplya Sobatch Aahot" </p>
                
             <p className="hero-subtitle">Service organization working as the link between passengers and workers of Best </p>
                
              
            </div>
          </div>
        </div>

        {/* Bus animation */}
        <div className="hero-bus-container">
          <img
            src={redBus}
            alt="Community Bus"
            className={`hero-bus ${
              isLoaded ? "animate-bus-slide" : "bus-hidden"
            }`}
          />
        </div>
      </section>
      <section className="little">
          <div className="my_div">

          </div>
      </section>

      <About />
      <About1/>
      <section id="team">
        <TeamSection />
      </section>
      <section id="work">
        <CategorySlider /> {/* 🚀 Slider is inside home */}
      </section>
      <section id="volunteer">
        <VolunteerSection />
      </section>
      <section id="contact">
        <FeedbackPage />
      </section>
      <Footer />
    </>
  )
}

function App() {
  return (
    <LanguageProvider>
    
        <Navbar />
        <Routes>
          {/* Home */}
          
          <Route path="/" element={<HomePage />} />

          {/* Category pages */}
          <Route path="/route-development" element={<Routedev/>} />
          <Route path="/centric" element={<Cnetric/>} />
          <Route path="/public" element={<Public/>} />
          <Route path="/policy" element={<Policyacc/>} />
          <Route path="/passenger" element={<Passenger/>} />
         
        </Routes>
        <HelpLineIcon />
    </LanguageProvider>
  )
}

export default App
