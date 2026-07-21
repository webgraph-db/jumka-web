import { useState, useEffect } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import './Header.css'

const navItems = [
  { label: 'गृहपृष्ठ', href: '#home' },
  { label: 'हाम्रो बारेमा', href: '#about' },
  { label: 'इतिहास', href: '#history' },
  { label: 'वंशावली', href: '#genealogy' },
  { label: 'लेखहरू', href: '#articles' },
  { label: 'सम्पर्क', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#home" className="header__logo" onClick={handleNavClick}>
          <div className="header__logo-icon">
            <span>ज</span>
          </div>
          <div className="header__logo-text">
            <span className="header__logo-title">जुम्का समुदाय</span>
            <span className="header__logo-sub">Jumka Community</span>
          </div>
        </a>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={handleNavClick} className="header__nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`header__toggle ${menuOpen ? 'header__toggle--active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'मेनु बन्द गर्नुहोस्' : 'मेनु खोल्नुहोस्'}
        >
          {menuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </div>

      {menuOpen && <div className="header__overlay" onClick={() => setMenuOpen(false)} />}
    </header>
  )
}
