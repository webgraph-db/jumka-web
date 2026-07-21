import React, { useMemo, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import familyMembers from "../../data/familydata-temp";
import { buildFlow } from "./buildFlow";

import CustomNode from "./CustomNode";
import Sidebar from "./Sidebar";

const nodeTypes = {
  person: CustomNode,
};

export default function FlowTree() {

  // Selected Person
  const [selectedPerson, setSelectedPerson] = useState(null);

  // Build tree only once
  const { nodes, edges } = useMemo(() => {
    return buildFlow(familyMembers);
  }, []);

  return (

    <div style={{ width: "100%", height: "800px" }}>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}

        fitView
        fitViewOptions={{ padding: 0.2 }}

        nodesDraggable={true}
        panOnDrag={true}

        zoomOnScroll={true}
        zoomOnPinch={true}
        zoomOnDoubleClick={false}

        onNodeClick={(event, node) => {
          setSelectedPerson(node.data);
        }}

      >

        <Background gap={20} />

        <MiniMap zoomable pannable />

        <Controls showInteractive={true} />

      </ReactFlow>

      <Sidebar
        person={selectedPerson}
        onClose={() => setSelectedPerson(null)}
      />

    </div>

  );
}