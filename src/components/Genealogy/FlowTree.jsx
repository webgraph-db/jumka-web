import React from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import familyMembers from "../../data/familydata-temp";
import { buildFlow } from "./buildFlow";
import CustomNode from "./CustomNode";

const nodeTypes = {
  person: CustomNode,
};

export default function FlowTree() {
  const { nodes, edges } = buildFlow(familyMembers);

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
      >
        <Background gap={20} />

        <MiniMap zoomable pannable />

        <Controls showInteractive={true} />
      </ReactFlow>
    </div>
  );
}