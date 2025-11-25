"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../data/translations"
import "../style/about1.css"

const About1 = () => {
  const { language } = useLanguage()
  const t = translations.about1[language]

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }
  return (
    <>
    <div className="about1-top-svg">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 150"
      preserveAspectRatio="none"
    >
      <path
        fill="none"
        stroke="#f9b233"   // Yellow stroke
        strokeWidth="6"
        d="M0,100 C300,0 600,200 900,100 C1150,30 1350,150 1440,80"
      />
      <path
        fill="none"
        stroke="#e63946"   // Red stroke
        strokeWidth="4"
        d="M0,120 C300,40 600,240 900,120 C1150,60 1350,180 1440,100"
      />
    </svg>
  </div>
    <section id="about1" className="about1">
  {/* Decorative SVG line at the top */}
  

  {/* Your existing content */}
  <div className="about1-container" ref={ref}>
    <div className="about1-content">
      <motion.div
        className="about1-text"
        variants={textVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
      <motion.h3 variants={itemVariants}>{t.heading}</motion.h3>
        
      <motion.p className="desktop-text" variants={itemVariants}>
        {t.description}
      </motion.p>

      {/* Mobile Short Text */}
      <motion.p className="mobile-text" variants={itemVariants}>
        {t.shortdesciption}
      </motion.p>
      </motion.div>

      <motion.div
        className="about1-image"
        variants={imageVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <img
          src="about-busimg.jpeg"
          alt="BEST Bus"
          style={{ width: '700px', height: '350px', objectFit: 'cover' }}
        />
      </motion.div>
    </div>
  </div>
</section>
</>
  )
}

export default About1
