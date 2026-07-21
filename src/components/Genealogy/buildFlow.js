import dagre from "@dagrejs/dagre";
import { MarkerType } from "@xyflow/react";

const dagreGraph = new dagre.graphlib.Graph();

dagreGraph.setDefaultEdgeLabel(() => ({}));

const NODE_WIDTH = 220;
const NODE_HEIGHT = 140;

export function buildFlow(data) {

  const nodes = [];
  const edges = [];

  data.forEach((person) => {

    nodes.push({
      id: String(person.id),
      type: "person",
      position: { x: 0, y: 0 },
      data: person,
    });

    if (person.parentId !== null) {
      edges.push({
        id: `e${person.parentId}-${person.id}`,
        source: String(person.parentId),
        target: String(person.id),
        markerEnd: {
          type: MarkerType.ArrowClosed,
        },
      });
    }

  });

  dagreGraph.setGraph({
    rankdir: "TB",
    ranksep: 120,
    nodesep: 60,
  });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, {
      width: NODE_WIDTH,
      height: NODE_HEIGHT,
    });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const pos = dagreGraph.node(node.id);

    node.position = {
      x: pos.x - NODE_WIDTH / 2,
      y: pos.y - NODE_HEIGHT / 2,
    };
  });

  return { nodes, edges };

}

