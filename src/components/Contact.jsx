import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">सम्पर्क</span>
          <h2 className="section-title">हामीसँग सम्पर्क गर्नुहोस्</h2>
          <p className="section-subtitle">
            कुनै पनि प्रश्न, सुझाव वा सहयोगको लागि हामीलाई सम्पर्क गर्नुहोस्
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__info">
            <div className="contact__card">
              <div className="contact__icon">
                <HiPhone size={24} />
              </div>
              <div>
                <h4>फोन</h4>
                <a href="tel:+9779745504890">+९७७ ९७४५५०४८९०</a>
              </div>
            </div>

            <div className="contact__card">
              <div className="contact__icon">
                <HiMail size={24} />
              </div>
              <div>
                <h4>इमेल</h4>
                <a href="mailto:info@jumkacommunity.org"></a>
                <a href="mailto:contact@jumkacommunity.org">contact@jumkacommunity.org</a>
              </div>
            </div>

            <div className="contact__card">
              <div className="contact__icon">
                <HiLocationMarker size={24} />
              </div>
              <div>
                <h4>ठेगाना</h4>
                <p>जुम्क समुदाय कार्यालय</p>
                <p>बारेकोट-४, जुम्क, नेपाल </p>
              </div>
            </div>
          </div>

          <div className="contact__hours">
            <h3>कार्यालय समय</h3>
            <ul>
              <li>
                <span>आइतबार - शुक्रबार</span>
                <span>१०:०० - १७:००</span>
              </li>
              <li>
                <span>शनिबार</span>
                <span>१०:०० - १४:००</span>
              </li>
              <li>
                <span>सार्वजनिक बिदा</span>
                <span>बन्द</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
