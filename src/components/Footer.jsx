import { useState } from 'react'
import { HiPhone, HiMail, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import './Footer.css'

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <div className="footer__grid">
            {/* Contact Info */}
            <div className="footer__contact">
              <div className="footer__brand">
                <div className="footer__logo-icon">
                  <span>ज</span>
                </div>
                <div>
                  <h3>जुम्क समुदाय</h3>
                  <p>Jumka Community</p>
                </div>
              </div>
              <p className="footer__desc">
                हाम्रो विरासत, संस्कृति र परम्पराको संरक्षण गर्दै एकता र विकासको
                मार्गमा अगाडि बढेको समुदाय।
              </p>
              <div className="footer__contact-list">
                <a href="tel:+9779745504890" className="footer__contact-item">
                  <HiPhone size={18} />
                  <span>+९७७ ९७४५५०४८९०</span>
                </a>
                <a href="mailto:info@jumkacommunity.org" className="footer__contact-item">
                  <HiMail size={18} />
                  <span>info@jumkacommunity.org</span>
                </a>
                <div className="footer__contact-item">
                  <HiLocationMarker size={18} />
                  <span>बारेकोट-४, जुम्क, नेपाल</span>
                </div>
              </div>
              <div className="footer__social">
                <a href="#" aria-label="Facebook"><FaFacebook size={20} /></a>
                <a href="#" aria-label="Instagram"><FaInstagram size={20} /></a>
                <a href="#" aria-label="YouTube"><FaYoutube size={20} /></a>
              </div>
            </div>

            {/* Feedback Form */}
            <div className="footer__feedback">
              <h3 className="footer__heading">प्रतिक्रिया पठाउनुहोस्</h3>
              <p className="footer__subheading">तपाईंको सुझाव र प्रतिक्रिया हाम्रो लागि महत्वपूर्ण छ</p>
              <form className="footer__form" onSubmit={handleSubmit}>
                <div className="footer__form-row">
                  <div className="footer__field">
                    <label htmlFor="name">नाम</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="तपाईंको नाम"
                      required
                    />
                  </div>
                  <div className="footer__field">
                    <label htmlFor="email">इमेल</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="तपाईंको इमेल"
                      required
                    />
                  </div>
                </div>
                <div className="footer__field">
                  <label htmlFor="subject">विषय</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="सन्देशको विषय"
                    required
                  />
                </div>
                <div className="footer__field">
                  <label htmlFor="message">सन्देश</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="तपाईंको सन्देश लेख्नुहोस्..."
                    rows={4}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary footer__submit">
                  <HiPaperAirplane size={18} />
                  पठाउनुहोस्
                </button>
                {submitted && (
                  <p className="footer__success">धन्यवाद! तपाईंको सन्देश प्राप्त भयो।</p>
                )}
              </form>
            </div>

            {/* Google Map */}
            <div className="footer__map">
              <h3 className="footer__heading">हाम्रो स्थान</h3>
              <div className="footer__map-wrap">
                <iframe
                  title="जुम्क समुदाय स्थान"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d829.5203486447961!2d82.2771742695837!3d28.963553998467873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDU3JzQ4LjgiTiA4MsKwMTYnNDAuMSJF!5e1!3m2!1sen!2snp!4v1784609935051!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>&copy; २०८१ जुम्क समुदाय। सर्वाधिकार सुरक्षित।</p>
          <div className="footer__links">
            <a href="#home">गृहपृष्ठ</a>
            <a href="#about">हाम्रो बारे</a>
            <a href="#contact">सम्पर्क</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
