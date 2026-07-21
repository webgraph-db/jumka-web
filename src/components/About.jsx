import './About.css'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">हाम्रो बारेमा</span>
          <h2 className="section-title">जुम्क समुदायको परिचय</h2>
          <p className="section-subtitle">
            हामी एक गौरवशाली समुदाय हौं जसले आफ्नो विरासत, संस्कृति र परम्पराको संरक्षण गर्दै
            आउँदैछौं।
          </p>
        </div>

        <div className="about__grid">
          <div className="about__image-wrap">
            <img
              src="./images/jumka1.jpg"
              alt="जुम्क समुदाय"
              className="about__image"
            />
            <div className="about__badge">
              <span className="about__badge-number">१००+</span>
              <span className="about__badge-text">वर्षको विरासत</span>
            </div>
          </div>

          <div className="about__content">
            <h3 className="about__heading">हाम्रो उद्देश्य </h3>
            <p className="about__text">
              जुम्क समुदाय नेपlको एक ऐतिहासिक र सांस्कृतिक समुदाय हो। हाम्रो उद्देश्य
              हाम्रा पूर्खाहरूले छोडेको समृद्ध विरासतलाई संरक्षण गर्नु, युवा पुस्तालाई
              हाम्रो संस्कृति र परम्पराबारे शिक्षित गर्नु र समुदायको एकता र विकासमा
              योगदान पुर्‍याउनु हो।
            </p>
            <p className="about__text">
              हामी विभिन्न सामाजिक, सांस्कृतिक र शैक्षिक कार्यक्रमहरू आयोजना गर्दै
              समुदायका सदस्यहरू बीच सहयोग र सद्भाव बढाउँछौं।
            </p>

            <div className="about__features">
              <div className="about__feature">
                <div className="about__feature-icon">🏛️</div>
                <div>
                  <h4>विरासत संरक्षण</h4>
                  <p>ऐतिहासिक स्थल र कलाकृतिको संरक्षण</p>
                </div>
              </div>
              <div className="about__feature">
                <div className="about__feature-icon">📚</div>
                <div>
                  <h4>शिक्षा र ज्ञान</h4>
                  <p>युवा पुस्तालाई संस्कृति शिक्षा</p>
                </div>
              </div>
              <div className="about__feature">
                <div className="about__feature-icon">🤝</div>
                <div>
                  <h4>सामुदायिक एकता</h4>
                  <p>सदस्यहरू बीच सहयोग र सद्भाव</p>
                </div>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary">हामीसँग जोडिनुहोस्</a>
          </div>
        </div>
      </div>
    </section>
  )
}
