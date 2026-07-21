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
                    <h4>भेले-जेठो-छोरा</h4>
                    <p>बाबू</p>
                    <span>१८३०-१८७९</span>
                  </div>

                  <ul>

                    {/* Child 1 */}
                    <li>
                       <div className="person">
                        <div className="avatar">👤</div>
                        <h4>जेठा</h4>
                        <p>गामरा</p>
                       <span>१८६०-१९००</span>
                      </div>
                    </li>

                     {/* Child 2 */}
                   <li>
                     <div className="person">
                      <div className="avatar">👤</div>
                      <h4>माइला</h4>
                       <p>दोस्रो छोरा</p>
                       <span>१८६५-१९१०</span>
                      </div>
                      </li>

                             {/* Child 3 */}
                     <li>
                      <div className="person">
                      <div className="avatar">👤</div>
                      <h4>कान्छा</h4>
                 <p>तेस्रो छोरा</p>
                     <span>१८७०-१९२०</span>
                         </div>
                        </li>

                        </ul>

                </li>

                {/* Son 2 */}

                <li>

                  <div className="person">
                    <div className="avatar">👤</div>
                    <h4>झुप्रो पुन</h4>
                    <p>बाँचिला धामी</p>
                    <span>१८८२ </span>
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