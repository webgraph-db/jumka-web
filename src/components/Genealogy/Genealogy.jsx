import "./Genealogy.css";
import familyMembers from "../../data/familydata-temp";
import TreeNode from "./TreeNode";

function buildTree(data) {
  const map = {};

  data.forEach(person => {
    map[person.id] = {
      ...person,
      children: []
    };
  });

  let root = null;

  data.forEach(person => {
    if (person.parentId === null) {
      root = map[person.id];
    } else {
      map[person.parentId].children.push(map[person.id]);
    }
  });

  return root;
}

export default function Genealogy() {

  const familyTree = buildTree(familyMembers);

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

        <div className="tree">

          <ul>
            <TreeNode person={familyTree} />
          </ul>

        </div>

      </div>

    </section>
  );
}