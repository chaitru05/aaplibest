import styles from "../style/mission-section.module.css"
import { Octagon, Megaphone, Landmark, Users } from "lucide-react" // import Users

const missions = [
  {
    title: "Protect BEST from Privatization",
    desc: "Ensuring that Mumbai’s public transport remains accessible and affordable for all.",
    icon: Octagon,
    bg: "/public-transport-crowd.png",
    highlight: false,
  },
  {
    title: "Empower Passengers & Workers",
    desc: "Acting as a strong voice for both passengers’ rights and workers’ welfare.",
    icon: Users,
    bg: "/public-transport-crowd.png",
    highlight: false,
  },
  {
    title: "Promote Public Awareness",
    desc: "Organizing campaigns, events, and community movements to safeguard BEST.",
    icon: Megaphone,
    bg: "/city-campaign-awareness.png",
    highlight: false,
  },
  {
    title: "Preserve Heritage",
    desc: "Upholding the cultural and historical importance of BEST as Mumbai’s true lifeline.",
    icon: Landmark,
    bg: "/mumbai-heritage-tram-bus.png",
    highlight: false,
  },
]

export default function MissionSection() {
  return (
    <section className={styles.mission} aria-labelledby="mission-title">
      <div className={styles.container}>
        <h2 id="mission-title" className={styles.title}>
          <span className={styles.titleRow}>
           
            <span>Mission</span>
          </span>
        </h2>

        <div className={styles.grid} role="list">
          {missions.map((m) => {
            const Icon = m.icon
            return (
              <article
                role="listitem"
                key={m.title}
                className={`${styles.card} ${styles.cardDark}`}
                aria-label={m.title}
              >
                {/* Image wrapper */}
                <div
                  className={styles.cardImage}
                  style={m.bg ? { backgroundImage: `url(${m.bg})` } : undefined}
                  aria-hidden="true"
                />
                <span className={styles.overlay} aria-hidden="true" />

                <div className={styles.cardInner}>
                  <h3 className={styles.cardTitle}>{m.title}</h3>
                  <p className={styles.cardDesc}>{m.desc}</p>
                </div>

                <div className={styles.badge}>
                  <span className={styles.iconWrap}>
                    {Icon ? <Icon width={28} height={28} aria-hidden="true" /> : null}
                  </span>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}