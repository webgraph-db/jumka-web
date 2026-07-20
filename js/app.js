/* Jumka Community - Main JavaScript */

document.addEventListener('DOMContentLoaded', () => {
  initHeader()
  initHeroSlider()
  initStatsCounter()
  initFeedbackForm()
  initScrollAnimations()
})

/* ── Header ── */
function initHeader() {
  const header = document.getElementById('header')
  const toggle = document.getElementById('menu-toggle')
  const nav = document.getElementById('nav')
  const overlay = document.getElementById('nav-overlay')
  const navLinks = nav.querySelectorAll('.header__nav-link')

  window.addEventListener('scroll', () => {
    header.classList.toggle('header--scrolled', window.scrollY > 40)
  })

  function closeMenu() {
    nav.classList.remove('header__nav--open')
    overlay.classList.remove('header__overlay--visible')
    document.body.style.overflow = ''
  }

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('header__nav--open')
    overlay.classList.toggle('header__overlay--visible', isOpen)
    document.body.style.overflow = isOpen ? 'hidden' : ''
  })

  overlay.addEventListener('click', closeMenu)
  navLinks.forEach(link => link.addEventListener('click', closeMenu))
}

/* ── Hero Slider ── */
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero__slide')
  const dots = document.querySelectorAll('.hero__dot')
  const prevBtn = document.getElementById('hero-prev')
  const nextBtn = document.getElementById('hero-next')
  let current = 0
  let timer

  function goTo(index) {
    slides[current].classList.remove('hero__slide--active')
    dots[current].classList.remove('hero__dot--active')
    current = (index + slides.length) % slides.length
    slides[current].classList.add('hero__slide--active')
    dots[current].classList.add('hero__dot--active')
  }

  function next() { goTo(current + 1) }
  function prev() { goTo(current - 1) }

  function startAutoplay() {
    timer = setInterval(next, 5000)
  }

  function resetAutoplay() {
    clearInterval(timer)
    startAutoplay()
  }

  prevBtn.addEventListener('click', () => { prev(); resetAutoplay() })
  nextBtn.addEventListener('click', () => { next(); resetAutoplay() })
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goTo(i); resetAutoplay() })
  })

  startAutoplay()
}

/* ── Stats Counter ── */
function initStatsCounter() {
  const numbers = document.querySelectorAll('[data-count]')
  const animated = new Set()

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting || animated.has(entry.target)) return
      animated.add(entry.target)

      const el = entry.target
      const target = parseInt(el.dataset.count, 10)
      const suffix = el.dataset.suffix || ''
      const duration = 2000
      const steps = 60
      const increment = target / steps
      let current = 0

      const interval = setInterval(() => {
        current += increment
        if (current >= target) {
          el.textContent = target.toLocaleString('ne-NP') + suffix
          clearInterval(interval)
        } else {
          el.textContent = Math.floor(current).toLocaleString('ne-NP') + suffix
        }
      }, duration / steps)
    })
  }, { threshold: 0.3 })

  numbers.forEach(el => observer.observe(el))
}

/* ── Feedback Form ── */
function initFeedbackForm() {
  const form = document.getElementById('feedback-form')
  const success = document.getElementById('feedback-success')

  form.addEventListener('submit', e => {
    e.preventDefault()
    form.reset()
    success.hidden = false
    setTimeout(() => { success.hidden = true }, 4000)
  })
}

/* ── Scroll Animations ── */
function initScrollAnimations() {
  const items = document.querySelectorAll('.stats__card, .articles__card, .genealogy__branch')
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1'
        entry.target.style.animation = 'slideUp 0.6s ease forwards'
      }
    })
  }, { threshold: 0.1 })

  items.forEach((el, i) => {
    el.style.animationDelay = `${i * 0.08}s`
    observer.observe(el)
  })
}
