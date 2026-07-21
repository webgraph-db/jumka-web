import "./Genealogy.css";
import FlowTree from "./FlowTree";

export default function Genealogy() {

  return (

    <section className="genealogy section" id="genealogy">

      <div className="container">

        <div className="section-header">

          <span className="section-tag">वंशावली</span>

          <h2 className="section-title">
            जुम्क समुदायको वंशावली
          </h2>

          <p className="section-subtitle">
            हाम्रो पुर्खादेखि वर्तमान पुस्तासम्मको पारिवारिक सम्बन्ध।
          </p>

        </div>

        <div className="tree-wrapper">

          <FlowTree />

        </div>

      </div>

    </section>

  );

}