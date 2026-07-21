import "./Genealogy.css";

export default function Genealogy() {
  return (
    <section className="genealogy section" id="genealogy">
      <div className="container">

        <div className="section-header">
          <span className="section-tag">वंशावली</span>
          <h2 className="section-title">जुम्का समुदायको वंशावली</h2>
          <p className="section-subtitle">
            आफ्नो पुर्खादेखि वर्तमान पुस्तासम्मको परिवारिक सम्बन्ध हेर्नुहोस्।
          </p>
        </div>

        <div className="tree">

          {/* Root */}
          <ul>
            <li>

              <div className="person root">
                <div className="avatar">👑</div>
                <h3>वेले पुन</h3>
                <p>मूल पुर्खा</p>
              </div>

              <ul>

                {/* Son 1 */}
                <li>

                  <div className="person">
                    <div className="avatar">👤</div>
                    <h4>कान्छा BK</h4>
                    <span>पहिलो पुस्ता</span>
                  </div>

                  <ul>

                    <li>

                      <div className="person">
                        <div className="avatar">👤</div>
                        <h4>हरि BK</h4>
                        <span>दोस्रो पुस्ता</span>
                      </div>

                      <ul>

                        <li>

                          <div className="person">
                            <div className="avatar">👤</div>
                            <h4>धरविन्द्र BK</h4>
                            <span>तेस्रो पुस्ता</span>
                          </div>

                        </li>

                        <li>

                          <div className="person">
                            <div className="avatar">👤</div>
                            <h4>गोपाल BK</h4>
                            <span>तेस्रो पुस्ता</span>
                          </div>

                        </li>

                      </ul>

                    </li>

                  </ul>

                </li>

                {/* Son 2 */}

                <li>

                  <div className="person">
                    <div className="avatar">👤</div>
                    <h4>राम BK</h4>
                    <span>पहिलो पुस्ता</span>
                  </div>

                  <ul>

                    <li>

                      <div className="person">
                        <div className="avatar">👤</div>
                        <h4>कृष्ण BK</h4>
                        <span>दोस्रो पुस्ता</span>
                      </div>

                    </li>

                    <li>

                      <div className="person">
                        <div className="avatar">👤</div>
                        <h4>नवराज BK</h4>
                        <span>दोस्रो पुस्ता</span>
                      </div>

                    </li>

                  </ul>

                </li>

                {/* Son 3 */}

                <li>

                  <div className="person">
                    <div className="avatar">👤</div>
                    <h4>कृष्ण BK</h4>
                    <span>पहिलो पुस्ता</span>
                  </div>

                </li>

              </ul>

            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}