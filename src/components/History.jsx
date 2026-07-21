import './History.css'

const timeline = [
  {
    year: 'बि.सं. १८३०',
    title: 'समुदायको स्थापना',
    desc: 'जुम्क समुदायको औपचारिक स्थापना भयो। पहिलो सामुदायिक भेला आयोजना गरियो।',
  },
  {
    year: 'बि.सं. १८५०',
    title: 'पहिलो मन्दिर निर्माण',
    desc: 'समुदायको केन्द्रमा पहिलो धार्मिक स्थलको निर्माण सम्पन्न भयो।',
  },
  {
    year: 'बि.सं. १८६०',
    title: 'शैक्षिक कार्यक्रम सुरु',
    desc: 'युवा पुस्तालाई संस्कृति र भाषा सिकाउने कार्यक्रम सुरु गरियो।',
  },
  {
    year: 'बि.सं. २०४५',
    title: 'डिजिटल अभिलेख',
    desc: 'वंशावली र ऐतिहासिक कागजातहरूको डिजिटल संरक्षण परियोजना सुरु।',
  },
  {
    year: 'बि.सं. २०४७',
    title: 'आधुनिक समुदाय',
    desc: 'अन्तर्राष्ट्रिय सदस्यहरूसँग जोडिएर वैश्विक समुदायको रूपमा विकास।',
  },
]

export default function History() {
  return (
    <section id="history" className="section history">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">इतिहास</span>
          <h2 className="section-title">हाम्रो गौरवशाली इतिहास</h2>
          <p className="section-subtitle">
            पुस्तौंदेखि चलिआएको हाम्रो समुदायको यात्रा र महत्वपूर्ण घटनाहरू
          </p>
        </div>

        <div className="history__timeline">
          {timeline.map((item, index) => (
            <div
              key={item.year}
              className={`history__item ${index % 2 === 0 ? 'history__item--left' : 'history__item--right'}`}
            >
              <div className="history__content">
                <span className="history__year">{item.year}</span>
                <h3 className="history__title">{item.title}</h3>
                <p className="history__desc">{item.desc}</p>
              </div>
              <div className="history__dot" />
            </div>
          ))}
          <div className="history__line" />
        </div>
      </div>
    </section>
  )
}
