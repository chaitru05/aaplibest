import "../style/Public.css"
import styles from "./vision-section.module.css"
import "../style/BestVitthal.css"
import PublicAwareness from "./PublicAwareness"
export default function Public() {
  const bestDayData = {
    title: "Celebrating BEST Day – 7th August 2025",
    description:
      "On BEST Day, 7th August 2025, we visited the Ghatkopar Depot to celebrate the spirit of service carried forward by the BEST family. Chocolates were distributed to the staff as a small yet meaningful gesture of gratitude, symbolizing the sweetness they bring to the daily lives of Mumbaikars through their tireless service.",
    media: [
      {
        id: 1,
        image: "/BEST DAY 2.jpg",
        hasVideo: false,
        title: "Chocolate Distribution",
      },
      {
        id: 2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCefatA8TXJLpYhWPPWwgm78tUqjr91ooSQw&s",
        hasVideo: true,
        videoUrl: "BEST DAY Video.mp4",
        title: "Ghatkopar Depot Visit",
      },
      {
        id: 3,
        image: "/BEST DAY 1.jpg",
        hasVideo: false,
        title: "Staff Celebration",
      },
    ],
  }


  const openVideo = (videoUrl) => {
    setSelectedVideo(videoUrl)
  }

  const closeVideo = () => {
    setSelectedVideo(null)
  }
  return (
    
    <>
    <div className="investor-page">
      {/* Left content section */}
      <div className="content-section">
        <div className="content-wrapper">
          {/* Bayer logo */}
          

          <h1 className="main-heading-public">
            Public Awareness
            <br />
            and Communication
          </h1>

          {/* Financial Reporting dropdown */}
         
        </div>
      </div>

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

        <section className="diagonal-section">
      <div className="diagonal-container">
        {/* Left card with image and overlaid text */}
        <div className="diagonal-left-card">
          <div className="diagonal-left-image-wrapper">
            <img src="hero-centric.jpeg" alt="Personal Health" className="diagonal-image" />
            <div className="diagonal-blue-accent"></div>
          </div>
          <div className="diagonal-left-text">
            
            <p className="diagonal-subtitle">| DISCOVER OUR COMMITMENT TO BETTER HEALTHCARE</p>
          </div>
        </div>

        {/* Bottom left text section */}
        <div className="diagonal-bottom-text">
         
          <p className="diagonal-pharma-subtitle">| EXPLORE OUR BREAKTHROUGH THERAPIES</p>
        </div>

        {/* Right card - just image */}
        <div className="diagonal-right-card">
          <div className="diagonal-right-image-wrapper">
            <img src="hero-centric.jpeg" alt="Community wellness" className="diagonal-image" />
          </div>
        </div>
        
      </div>
      
    </section>
    <div className="diagonal-container-2">
        {/* Left card with image and overlaid text */}
        <div className="diagonal-left-card">
          <div className="diagonal-left-image-wrapper">
            <img src="hero-centric.jpeg" alt="Personal Health" className="diagonal-image" />
            <div className="diagonal-blue-accent"></div>
          </div>
          <div className="diagonal-left-text">
            
            <p className="diagonal-subtitle">| DISCOVER OUR COMMITMENT TO BETTER HEALTHCARE</p>
          </div>
        </div>

        {/* Bottom left text section */}
        <div className="diagonal-bottom-text">
          
          <p className="diagonal-pharma-subtitle">| EXPLORE OUR BREAKTHROUGH THERAPIES</p>
        </div>

        {/* Right card - just image */}
        <div className="diagonal-right-card">
          <div className="diagonal-right-image-wrapper">
            <img src="hero-centric.jpeg" alt="Community wellness" className="diagonal-image" />
          </div>
        </div>
        
      </div>
      </div>
    <PublicAwareness />
    </>
    
  )
}
