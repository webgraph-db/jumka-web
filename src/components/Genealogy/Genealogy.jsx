import "./Genealogy.css";
import familyTree from "../../data/familyData.js";
import TreeNode from "./TreeNode";

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
            हाम्रो पुर्खादेखि वर्तमान पुस्तासम्मको परिवारिक सम्बन्ध।
          </p>
        </div>

        <div className="tree">
          <ul>
            <TreeNode person={familyTree} />
          </ul>
        </div>

      </div>
    </section>
  );
}