import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";
import "../style/Timeline.css";
const timelineData = [
  {
    content:
      "Played a key role in modifying Route C-10, incorporating passenger feedback and optimizing coverage.",
  },
  {
    content:
      "Recommended and pushed through the conversion of Route 44 into A-44, enabling better connectivity and operational efficiency.",
  },
  {
    content:
      "Advocated for the extension of Route 218 from TB Hospital to P.T. Udyan Bus Station, Sewree, offering improved service access to commuters in the Sewree belt.",
  },
  {
    content:
      "Advocated for starting a new route providing connectivity to Dadar Metro Station, which resulted in the launch of Route 175.",
  },
  {
    content:
      "Due to our constant follow-up, Route no. 200 was extended up to Jijamata Udyan from the existing Wadala Depot and will now run as A-200.",
  },
  {
    content:
      "Route no. 84 was started from our suggestion, connecting the western suburbs to South Mumbai via the Coastal Road, saving significant travel time.",
  },
  {
    content:
      "Suggested renumbering Route 25 → 29 to avoid commuter confusion with A-25, ensuring clarity and smoother passenger experience.",
  },
  {
    content:
      "Played a role in the introduction of special night buses during Ganeshotsav 2025 (11:00 pm – 6:00 am) across Lalbaug, Girgaon, Parel, and Chembur.",
  },
];

export const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState(
    new Array(timelineData.length).fill(false)
  );
  const [lineHeight, setLineHeight] = useState(0);
  const itemRefs = useRef([]);
  const lineRef = useRef(null);

  useEffect(() => {
    const observers = [];

    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              setVisibleItems((prev) => {
                const newState = [...prev];
                newState[index] = entry.isIntersecting;
                return newState;
              });
            });
          },
          { threshold: 0.3 }
        );

        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (lineRef.current) {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const timelineTop = lineRef.current.offsetTop;
        const timelineHeight = lineRef.current.offsetHeight;

        const scrolledPastTop = scrollPosition + windowHeight - timelineTop;
        const percentage = Math.min(
          Math.max((scrolledPastTop / timelineHeight) * 100, 0),
          100
        );

        setLineHeight(percentage);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="timeline-section">
      <div className="timeline-container">
        {/* Decorative elements */}
        <div className="decorative-circle decorative-circle-1"></div>
        <div className="decorative-circle decorative-circle-2"></div>
        <div className="decorative-circle decorative-circle-3"></div>
        <div className="decorative-circle decorative-circle-4"></div>

        <h2 className="timeline-title">Route Advocacy & Achievements</h2>

        <div className="timeline-wrapper">
          {/* Timeline line */}
          <div className="timeline-line" ref={lineRef}>
            <div
              className="timeline-line-progress"
              style={{ height: `${lineHeight}%` }}
            ></div>
          </div>

          {/* Timeline items */}
          <div className="timeline-items">
            {timelineData.map((item, index) => (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`timeline-item ${
                  visibleItems[index] ? "timeline-item-visible" : ""
                }`}
              >
                <div className="timeline-pin-wrapper">
                  <div className="timeline-pin">
                    <MapPin className="timeline-pin-icon" />
                  </div>
                </div>
                <div className="timeline-content">
                  <p className="timeline-text">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
