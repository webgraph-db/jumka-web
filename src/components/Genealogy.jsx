import './Genealogy.css'

const generations = [
  { name: 'पूर्खा पुस्ता', count: 12, period: '१८५० - १९२०' },
  { name: 'पितृ पुस्ता', count: 28, period: '१९२० - १९७०' },
  { name: 'वर्तमान पुस्ता', count: 85, period: '१९७० - हाल' },
  { name: 'युवा पुस्ता', count: 120, period: '१९९० - हाल' },
]

export default function Genealogy() {
  return (
    <section id="genealogy" className="section genealogy">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">वंशावली</span>
          <h2 className="section-title">हाम्रो वंश परम्परा</h2>
          <p className="section-subtitle">
            पुस्तौंदेखि चलिआएको वंशावली र हाम्रा पूर्खाहरूको सम्मान
          </p>
        </div>

        <div className="genealogy__tree">
          <div className="genealogy__root">
            <div className="genealogy__root-node">
              <span className="genealogy__root-icon">🌳</span>
              <h3>जुम्क वंश</h3>
              <p>मूल वंश</p>
            </div>
          </div>

          <div className="genealogy__branches">
            {generations.map((gen, index) => (
              <div key={gen.name} className="genealogy__branch" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="genealogy__connector" />
                <div className="genealogy__card">
                  <span className="genealogy__count">{gen.count}</span>
                  <h4>{gen.name}</h4>
                  <p>{gen.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="genealogy__info">
          <div className="genealogy__info-card">
            <h3>वंशावली अभिलेख</h3>
            <p>
              हाम्रो समुदायले पुस्तौंदेखि संरक्षण गरिएको विस्तृत वंशावली अभिलेख राखेको छ।
              यो अभिलेखमा हाम्रा पूर्खाहरूको नाम, जन्म मिति, र वंश सम्बन्धको विवरण समावेश छ।
            </p>
            <a href="#contact" className="btn btn-outline">वंशावली हेर्नुहोस्</a>
          </div>
          <div className="genealogy__info-card">
            <h3>वंश अनुसन्धान</h3>
            <p>
              तपाईं आफ्नो वंश सम्बन्ध खोज्न चाहनुहुन्छ? हाम्रो अभिलेख कार्यालयमा सम्पर्क
              गर्नुहोस् र आफ्नो परिवारको इतिहास पत्ता लगाउनुहोस्।
            </p>
            <a href="#contact" className="btn btn-outline">अनुसन्धान अनुरोध</a>
          </div>
        </div>
      </div>
    </section>
  )
}
