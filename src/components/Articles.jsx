import { HiClock, HiArrowRight } from 'react-icons/hi'
import './Articles.css'

const articles = [
  {
    id: 1,
    title: 'जुम्क समुदायको सांस्कृतिक उत्सव',
    excerpt: 'वर्षमा एक पटक आयोजना हुने हाम्रो प्रमुख सांस्कृतिक उत्सवको विस्तृत विवरण र महत्व।',
    image: '/images/jumka1.jpg',
    date: '१५ असार, २०८१',
    category: 'संस्कृति',
  },
  {
    id: 2,
    title: 'वंशावली संरक्षण परियोजना',
    excerpt: 'हाम्रो डिजिटल वंशावली अभिलेख परियोजनाको प्रगति र भविष्यका योजनाहरू।',
    image: '/images/jumka2.jpg',
    date: '२८ जेठ, २०८१',
    category: 'वंशावली',
  },
  {
    id: 3,
    title: 'युवा पुस्ताको भूमिका',
    excerpt: 'आधुनिक युवा पुस्ताले समुदायको विकासमा कसरी योगदान पुर्‍याउँदैछन्।',
    image: '/images/jumka3.jpg',
    date: '१० जेष्ठ, २०८१',
    category: 'समुदाय',
  },
  {
    id: 4,
    title: 'ऐतिहासिक स्थलको पुनर्स्थापना',
    excerpt: 'हाम्रो प्राचीन मन्दिर र सांस्कृतिक स्थलको पुनर्स्थापना कार्यको अपडेट।',
    image: '/images/jumka4.jpg',
    date: '२२ बैशाख, २०८१',
    category: 'इतिहास',
  },
  {
    id: 5,
    title: 'शैक्षिक कार्यक्रम २०८१',
    excerpt: 'यस वर्षका शैक्षिक कार्यक्रम, कार्यशाला र प्रशिक्षणहरूको तालिका।',
    image: '/images/jumka5.jpg',
    date: '५ चैत्र, २०८१',
    category: 'शिक्षा',
  },
  {
    id: 6,
    title: 'अन्तर्राष्ट्रिय सम्मेलन २०२४',
    excerpt: 'विदेशमा बसोबास गर्ने समुदाय सदस्यहरूको भेलाको सफल आयोजना।',
    image: '/images/jumka6.jpg',
    date: '१८ फागुन, २०८०',
    category: 'कार्यक्रम',
  },
]

export default function Articles() {
  return (
    <section id="articles" className="section articles">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">लेखहरू</span>
          <h2 className="section-title">नवीनतम लेख र समाचार</h2>
          <p className="section-subtitle">
            समुदायका गतिविधि, संस्कृति र इतिहास सम्बन्धी लेखहरू
          </p>
        </div>

        <div className="articles__grid">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className="articles__card"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="articles__image-wrap">
                <img src={article.image} alt={article.title} className="articles__image" />
                <span className="articles__category">{article.category}</span>
              </div>
              <div className="articles__body">
                <div className="articles__meta">
                  <HiClock size={14} />
                  <span>{article.date}</span>
                </div>
                <h3 className="articles__title">{article.title}</h3>
                <p className="articles__excerpt">{article.excerpt}</p>
                <a href="#" className="articles__link">
                  थप पढ्नुहोस्
                  <HiArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="articles__cta">
          <a href="#" className="btn btn-primary">सबै लेखहरू हेर्नुहोस्</a>
        </div>
      </div>
    </section>
  )
}
