"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../data/translations"
import "../style/about1.css"

const About1 = () => {
  const { language } = useLanguage()
  const t = translations.about[language]

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

  return (
    <section id="about1" className="about1">
      <div className="about1-container" ref={ref}>
        <div className="about1-content">
          {/* Text Section */}
          <motion.div
            className="about1-text"
            variants={textVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3>BEST is not just a bus, it’s a movement that keeps Mumbai moving.</h3>
            <p>Aapli BEST Aaplyachsathi is a non-political, non-profit organization working in the interest of the BEST passanger and to improve the transport system in Mumbai and the overall welfare of MMR region.
The content provided on this website  is for general informational and awareness purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the content found on this site.</p>
          </motion.div>

          {/* Image Section */}
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
  )
}

export default About1
