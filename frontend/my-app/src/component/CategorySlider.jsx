"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../data/translations"
import "../style/CategorySlider.css"

function CategorySlider() {
  const { language } = useLanguage()
  const t = translations.work[language]

  const [activeIndex, setActiveIndex] = useState(0)

  const categories = [
    {
      id: 1,
      name: t.categories[0],
      image: "/A84.jpeg",
      path: "/route-development",
    },
    {
      id: 2,
      name: t.categories[1],
      image: "/public-img.jpg?height=400&width=600",
      path: "/public",
    },
    {
      id: 3,
      name: t.categories[2],
      image:
        "/work.jpg",
      path: "/passenger",
    },
    {
      id: 4,
      name: t.categories[3],
      image: "/eng-img.jpeg?height=400&width=600",
      path: "/policy",
    },
    {
      id: 5,
      name: t.categories[4],
      image: "/bestday.jpg?height=400&width=600",
      path: "/centric",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === categories.length - 1 ? 0 : prevIndex + 1))
    }, 3000) // Auto-rotate every 3 seconds

    return () => clearInterval(interval)
  }, [categories.length])

  return (
    <div
      className="slider-container"
      
    >
      <h1 className="gallery-title">{t.title}</h1>
      <div className="slider">
        {categories.map((category, index) => {
          let position = index - activeIndex

          // Normalize position to create proper circular arrangement for all 5 cards
          if (position > 2) position -= categories.length
          if (position < -2) position += categories.length

          return (
            <Link
              key={category.id}
              to={category.path}
              className={`slider-card ${index === activeIndex ? "active" : ""}`}
              style={{
                transform: `translateX(${position * 55}%) scale(${
                  1 - Math.abs(position) * 0.1
                }) translateZ(${-Math.abs(position) * 60}px)`,

                zIndex: categories.length - Math.abs(position),
                opacity: 1 - Math.abs(position) * 0.1,
              }}
            >
              <div className="card-image-work">
                <img src={category.image || "/placeholder.svg"} alt={category.name} />
              </div>
              <div className="card-content-work">
                <h2>{category.name}</h2>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default CategorySlider
