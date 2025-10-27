import "../style/Public.css"
import styles from "./vision-section.module.css"
import "../style/BestVitthal.css"
import PublicAwareness from "./PublicAwareness"
import Footer from "./Footer"
export default function Public() {
 
  return (
    
    <>
    <div className="investor-page">
      {/* Left content section */}
      <section className="public-hero">
      <div className="public-hero-overlay"></div>
      <div className="public-hero-content">
        <h1 className="public-hero-title">Public Awareness and Communication</h1>
      </div>
    </section>

      {/* Diagonal divider */}
      <div className="diagonal-divider"></div>

      {/* Right image section */}
      <div className="image-section-public">
        <img src="/hero-centric.jpeg" alt="Business professionals collaborating" className="hero-image-public" />
      </div>

      {/* Magenta accent triangle */}
      <div className="accent-triangle"></div>
       
    </div>
    <div className="awareness-container">
        <h1 className="awareness-title">Public Awareness</h1>
        
        <p className="awareness-description">
          Awareness drives change. From posters at bus stops to social media campaigns, 
          we continuously engage with citizens to share updates, celebrate our staff, 
          and advocate for better, inclusive transport services for all.
        </p>

      </div>
      <section className="diagonal-section">
  {/* FIRST SECTION */}
  <div className="diagonal-container">
    <div className="diagonal-image-box">
      <div className="yellow-bg"></div>
      <img src="poster1.jpg.jpg" alt="Awareness" className="diagonal-image" />
    </div>
    <div className="diagonal-text-box">
      <p className="diagonal-subtitle">
        Designed and distributed self-printed posters at major bus stops to create awareness
        about the newly launched A-30 service.
      </p>
      <p className="diagonal-pharma-subtitle">
        
      </p>
    </div>
  </div>
  

  {/* SECOND SECTION (REVERSED) */}
  <div className="diagonal-container reverse">
    <div className="diagonal-image-box">
      <div className="yellow-bg"></div>
      <img src="https://th-i.thgim.com/public/migration_catalog/article14112777.ece/alternates/LANDSCAPE_1200/Best%2033" alt="Campaign" className="diagonal-image" />
    </div>
    <div className="diagonal-text-box">
      <p className="diagonal-subtitle">
        Ran social media campaigns for the BEST Exhibition at Anik Depot to spread awareness 
        and engage the public.
      </p>
      <p className="diagonal-pharma-subtitle">
       
      </p>
    </div>
  </div>
  <div className="diagonal-container">
    <div className="diagonal-image-box">
      <div className="yellow-bg"></div>
      <img src="BEST DAY 2.jpg" alt="Awareness" className="diagonal-image" />
    </div>
    <div className="diagonal-text-box">
      <p className="diagonal-subtitle">
      Launched social media campaigns ahead of BEST Day (7th August) to encourage citizens
        to express gratitude towards BEST staff.
      </p>
      <p className="diagonal-pharma-subtitle">
        
      </p>
    </div>
  </div>
  

  {/* SECOND SECTION (REVERSED) */}
  <div className="diagonal-container reverse">
    <div className="diagonal-image-box">
      <div className="yellow-bg"></div>
      <img src="latenigth.jpeg" alt="Campaign" className="diagonal-image" />
    </div>
    <div className="diagonal-text-box">
      <p className="diagonal-subtitle">
        Consistently advocate for late-night Ganeshotsav buses (since 2022) via official letters.
      </p>
      <p className="diagonal-pharma-subtitle">
        
      </p>
    </div>
  </div>
</section>

    <PublicAwareness />
    <Footer/>
    </>
    
  )
}
