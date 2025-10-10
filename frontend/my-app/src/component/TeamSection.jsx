"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Linkedin, Twitter, Mail, Phone } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../data/translations"
import "../style/TeamSection.css"

const TeamSection = () => {
  const { language } = useLanguage()
  const t = translations.team[language]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const teamMembers = [
    {
      id: 1,
      name: "Rupesh Shelatkar",
      title: "संस्थापक आणि अध्यक्ष",
      titleEn: "Founder and President",
      image: "/Rupesh.jpeg",
      description: {
        en: "Visionary leader with extensive experience in organizational development and strategic planning. Leading the organization with dedication and commitment.",
        mr: "संस्थात्मक विकास आणि धोरणात्मक नियोजनातील व्यापक अनुभव असलेले दूरदर्शी नेते. समर्पण आणि वचनबद्धतेने संस्थेचे नेतृत्व करत आहेत.",
      },
      social: {
        linkedin: "#",
        twitter: "#",
        email: "rupesh@organization.org",
        phone: "+91-9999999999",
      },
    },
    { id: 2,
      name: "Siddhesh Mhatre",
      title: "",
      titleEn: "Secretary",
      image: "/Siddesh Mhatre.jpeg",
      description: {
        en: "Dedicated secretary supporting organizational activities and maintaining effective communication channels with all stakeholders.",
        mr: "संस्थात्मक कार्यांना साहाय्य करण्यासाठी वचनबद्ध सहयोगी. सर्व संबंधित व्यक्तीवर सुरुवातील प्रभावी संचालन चालांशी राखण्यासाठी वचनबद्ध.",
      },
      social: {
        linkedin: "#",
        twitter: "#",
        email: "siddhesh.m@organization.org",
        phone: "+91-9999999995",
      },
      
    },
    { id: 3,
      name: "Atharva Naik",
      title: "",
      titleEn: "Information Technology and Social Media",
      image: "Atharva.jpg",
      description: {
        en: "Technology specialist managing digital infrastructure and social media presence. Driving digital transformation and online engagement.",
        mr: "डिजिटल संरचना आणि सोशल मीडिया उपस्थिती प्रबंधन करण्यासाठी तंत्रज्ञानाचे व्यावसायिक. डिजिटल परिवर्तन आणि ऑनलाइन संपर्क घेण्यासाठी वचनबद्ध.",
      },
      social: {
        linkedin: "#",
        twitter: "#",
        email: "atharva@organization.org",
        phone: "+91-9999999994",
      },
      
    },
    { id: 4,
      name: "Siddhesh Kanse",
      title: "",
      titleEn: "Treasurer",
      image: "/Siddesh Kanse.JPG",
      description: {
        en: "Financial expert ensuring transparent and efficient management of organizational resources. Maintaining fiscal responsibility and accountability.",
        mr: "संस्थात्मक संसाधनांचे वचनबद्ध आणि व्यवस्थित प्रबंधन करण्यासाठी व्यावसायिक. वित्तीय जीवन नियम आणि विश्वासीता बरोबर राखण्यासाठी वचनबद्ध.",
      },
      social: {
        linkedin: "#",
        twitter: "#",
        email: "siddhesh.k@organization.org",
        phone: "+91-9999999997",
      },
      
    },
    {
      id: 5,
      name: "Kunal Akre",
      title: "उपाध्यक्ष",
      titleEn: "Vice President",
      image: "/Kunal.jpg",
      description: {
        en: "Experienced professional supporting organizational growth and development initiatives. Committed to driving positive change in the community.",
        mr: "संस्थात्मक वाढ आणि विकास उपक्रमांना पाठिंबा देणारे अनुभवी व्यावसायिक. समुदायात सकारात्मक बदल घडवून आणण्यासाठी वचनबद्ध.",
      },
      social: {
        linkedin: "#",
        twitter: "#",
        email: "kunal@organization.org",
        phone: "+91-9999999998",
      },
    },
    {
      id: 6,
      name: "Pankaj Jaokar",
      title: "",
      titleEn: "Secretary",
      image: "/Pankaj.jpg",
      description: {
        en: "Administrative leader managing organizational communications and documentation. Ensuring smooth operations and effective coordination.",
        mr: "संस्थात्मक संचालन आणि विषयसंकलनांचे प्रबंधन करण्यासाठी व्यावसायिक. व्यवस्थित कार्यांशी आणि प्रभावी समन्वयांशी सुरुवात घेण्यासाठी वचनबद्ध.",
      },
      social: {
        linkedin: "#",
        twitter: "#",
        email: "pankaj@organization.org",
        phone: "+91-9999999996",
      },
    },
    {
      id: 7,
      name: "Prathamesh Rege",
      title: "माहिती तंत्रज्ञान व समाज माध्यम",
      titleEn: "Information Technology and Social Media",
      image: "/Pratham.jpg",
      description: {
        en: "Digital marketing expert enhancing organizational visibility through strategic social media campaigns and technological solutions.",
        mr: "संस्थात्मक दृश्यता वाढवण्यासाठी तंत्रज्ञानाचे व्यावसायिक. धोरणात्मक सोशल मीडिया अभियान आणि तंत्रज्ञानाच्या सुविधांसाठी वचनबद्ध.",
      },
      social: {
        linkedin: "#",
        twitter: "#",
        email: "prathamesh@organization.org",
        phone: "+91-9999999993",
      },
    },
    {
      id: 8,
      name: "Swapnil Gaonkar",
      title: "प्रवक्ता",
      titleEn: "Spokesperson",
      image: "/Swapnil.jpg",
      description: {
        en: "Communication specialist representing the organization in public forums and media interactions. Building strong community relationships.",
        mr: "संस्थात्मक संचालनाचे प्रवक्ता समुदायात आणि मीडिया संपर्कांमध्ये संस्थेचे नेतृत्व करण्यासाठी व्यावसायिक. मजबूत समुदाय संबंध बनवण्यासाठी वचनबद्ध.",
      },
      social: {
        linkedin: "#",
        twitter: "#",
        email: "swapnil@organization.org",
        phone: "+91-9999999992",
      },
    },
    {
      id: 9,
      name: "Gaurav Chindarkar",
      title: "प्रवक्ता",
      titleEn: "Spokesperson",
      image: "/Gaurav 1.png",
      description: {
        en: "Public relations expert managing organizational communications and stakeholder engagement. Promoting organizational mission and values.",
        mr: "संस्थात्मक संबंध नियमकार संस्थात्मक संचालन आणि संबंधित व्यक्तीवर सुरुवातील संबंध बनवण्यासाठी प्रबंधन करण्यासाठी व्यावसायिक. संस्थाच्या उद्देश्यांना आणि मूल्यांना वाढवण्यासाठी वचनबद्ध.",
      },
      social: {
        linkedin: "#",
        twitter: "#",
        email: "gaurav@organization.org",
        phone: "+91-9999999991",
      },
    },
    {
      id: 10,
      name: "Aakshay Desai",
      title: "सभासद",
      titleEn: "Member",
      image: "Akshay Desai.jpg",
      description: {
        en: "Active member contributing to various organizational initiatives and community development programs. Bringing fresh perspectives and energy.",
        mr: "विभिन्न संस्थात्मक उपक्रमांना आणि समुदायात्मक विकास कार्यक्रमांना साहाय्य करण्यासाठी सक्रिय संबंधित व्यक्ती. नवीन दृष्टिकोण आणि शक्तिशालीत राखण्यासाठी वचनबद्ध.",
      },
      social: {
        linkedin: "#",
        twitter: "#",
        email: "aakshay@organization.org",
        phone: "+91-9999999990",
      },
    },
  ]

  const cardsPerView = 3
  const maxIndex = Math.max(0, teamMembers.length - cardsPerView)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
    }, 3000)

    return () => clearInterval(interval)
  }, [maxIndex, isAutoPlaying])

  const goToSlide = (index) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)))
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1))
  }

  const handleMouseEnter = () => {
    setIsAutoPlaying(false)
  }

  const handleMouseLeave = () => {
    setIsAutoPlaying(true)
  }

  return (
    <section className="team-section">
      <div className="team-container">
        <div className="team-content-wrapper">
          {/* Left Content */}
          <div className="team-content">
            <h2 className="team-title">{t.title}</h2>
            <p className="team-description">{t.description}</p>
          </div>

          {/* Right Cards */}
          <div className="team-cards-section">
            <div className="team-carousel" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button className="nav-button nav-button-left" onClick={prevSlide} aria-label="Previous slide">
                <ChevronLeft size={20} />
              </button>

              <div className="team-cards-container">
                <div
                  className="team-cards-wrapper"
                  style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
                >
                  {teamMembers.map((member) => (
                    <TeamCard key={member.id} member={member} />
                  ))}
                </div>
              </div>

              <button className="nav-button nav-button-right" onClick={nextSlide} aria-label="Next slide">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const TeamCard = ({ member }) => {
  const { language } = useLanguage()

  return (
    <div className="team-card">
      <div className="team-card-image-container">
        <img src={member.image || "/placeholder.svg"} alt={member.name} className="team-card-image" />
      </div>

      <div className="team-card-name-box">
        <h3 className="team-card-name">{member.name}</h3>
      </div>

      <div className="team-card-overlay">
        <div className="team-card-overlay-content">
          <div className="team-card-titles">
            <p className="team-card-title-hi">{language === "mr" ? member.title : ""}</p>
            <p className="team-card-title-en">{language === "en" ? member.titleEn : member.titleEn}</p>
          </div>
          <p className="team-card-description">
            {member.description ? member.description[language] : member.description}
          </p>
          <div className="team-card-social">
            <a href={member.social.linkedin} className="social-link" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href={member.social.twitter} className="social-link" aria-label="Twitter">
              <Twitter size={18} />
            </a>
            <a href={`mailto:${member.social.email}`} className="social-link" aria-label="Email">
              <Mail size={18} />
            </a>
            <a href={`tel:${member.social.phone}`} className="social-link" aria-label="Phone">
              <Phone size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamSection
