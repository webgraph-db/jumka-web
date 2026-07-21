import { useEffect, useRef, useState } from 'react'
import { HiUsers, HiBookOpen, HiCalendar, HiHeart } from 'react-icons/hi'
import './Stats.css'

const stats = [
  { icon: HiUsers, value: 2500, suffix: '+', label: 'सदस्यहरू', desc: 'सक्रिय समुदाय सदस्य' },
  { icon: HiBookOpen, value: 150, suffix: '+', label: 'लेखहरू', desc: 'प्रकाशित लेख र लेखन' },
  { icon: HiCalendar, value: 45, suffix: '+', label: 'कार्यक्रम', desc: 'वार्षिक सांस्कृतिक कार्यक्रम' },
  { icon: HiHeart, value: 250, suffix: '+', label: 'वर्ष', desc: 'समृद्ध ऐतिहासिक विरासत' },
]

function AnimatedNumber({ value, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref} className="stats__number">
      {count.toLocaleString('ne-NP')}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats__grid">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="stats__card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="stats__icon">
                <stat.icon size={28} />
              </div>
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <h3 className="stats__label">{stat.label}</h3>
              <p className="stats__desc">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
