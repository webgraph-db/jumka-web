import { useState, useEffect, useCallback } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import './Hero.css'

const slides = [
  {
    image: '/images/jumka1.jpg',
    title: 'जुम्क समुदायमा स्वागत छ',
    subtitle: 'हाम्रो विरासत, संस्कृति र परम्पराको संरक्षण',
    cta: 'थप जान्नुहोस्',
  },
  {
    image: '/images/jumka2.jpg',
    title: 'हाम्रो समृद्ध इतिहास',
    subtitle: 'पुस्तौंदेखि चलिआएको गौरवशाली परम्परा',
    cta: 'इतिहास हेर्नुहोस्',
  },
  {
    image: '/images/jumka3.jpg',
    title: 'वंशावली र वंश परम्परा',
    subtitle: 'हाम्रा पूर्खाहरूको याद र सम्मान',
    cta: 'वंशावली हेर्नुहोस्',
  },
  {
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1920&q=80',
    title: 'सांस्कृतिक उत्सवहरू',
    subtitle: 'हाम्रा चाडपर्व र सामुदायिक कार्यक्रमहरू',
    cta: 'कार्यक्रम हेर्नुहोस्',
  },
  {
    image: 'https://images.unsplash.com/photo-1609137144816-7d8b7a996252?w=1920&q=80',
    title: 'एकता र सहयोग',
    subtitle: 'सँगै मिलेर समुदायको विकास',
    cta: 'सामेल हुनुहोस्',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goTo = useCallback((index) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrent(index)
    setTimeout(() => setIsAnimating(false), 600)
  }, [isAnimating])

  const next = useCallback(() => {
    goTo((current + 1) % slides.length)
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length)
  }, [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section id="home" className="hero">
      <div className="hero__slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero__slide ${index === current ? 'hero__slide--active' : ''}`}
          >
            <div
              className="hero__slide-bg"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="hero__slide-overlay" />
            <div className="hero__slide-content container">
              <span className="hero__tag fade-in">जुम्का समुदाय</span>
              <h1 className="hero__title fade-in">{slide.title}</h1>
              <p className="hero__subtitle fade-in">{slide.subtitle}</p>
              <a href="#about" className="btn btn-primary hero__cta fade-in">
                {slide.cta}
              </a>
            </div>
          </div>
        ))}
      </div>

      <button className="hero__arrow hero__arrow--prev" onClick={prev} aria-label="अघिल्लो">
        <HiChevronLeft size={32} />
      </button>
      <button className="hero__arrow hero__arrow--next" onClick={next} aria-label="अर्को">
        <HiChevronRight size={32} />
      </button>

      <div className="hero__dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero__dot ${index === current ? 'hero__dot--active' : ''}`}
            onClick={() => goTo(index)}
            aria-label={`स्लाइड ${index + 1}`}
          />
        ))}
      </div>

      <div className="hero__scroll">
        <span>तल स्क्रोल गर्नुहोस्</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
