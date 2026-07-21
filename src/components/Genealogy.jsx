import "./Genealogy.css";

export default function Genealogy() {
  return (
    <section className="genealogy section" id="genealogy">
      <div className="container">

        <div className="section-header">
          <span className="section-tag">वंशावली</span>
          <h2 className="section-title">जुम्क समुदायको वंशावली</h2>
          <p className="section-subtitle">
           हाम्रो पुर्खादेखि वर्तमान पुस्तासम्मको परिवारिक सम्बन्ध हेर्नुहोस्।
          </p>
        </div>

        <div className="tree">

          {/* Root */}
          <ul>
            <li>

              <div className="person root">
                <div className="avatar">👑</div>
                <h3>भेले पुन</h3>
                <p>मूल पुर्खा</p>
                <span>१८००-१८५४</span>
              </div>

              <ul>

                {/* Son 1 */}
                <li>

                  <div className="person">
                    <div className="avatar">👤</div>
                    <h4>बाबू</h4>
                    <p>भेले-जेठो-छोरा</p>
                    <span>१८३०-१८७९</span>
                  </div>

                  <ul>

                    <li>

                      <div className="person">
                        <div className="avatar">👤</div>
                        <h4>झुप्रो पुन</h4>
                        <p>बाँचिला धामी</p>
                        <span>१८६०-१९००</span>
                      </div>

                      <ul>

                        <li>

                          <div className="person">
                            <div className="avatar">👤</div>
                            <h4>धुरधे पुर्यानी </h4>
                            <p>माहिला</p>
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