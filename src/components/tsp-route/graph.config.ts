import { GraphConfiguration, GraphLink, GraphNode } from "react-d3-graph";

export const graphConfig: Partial<GraphConfiguration<GraphNode, GraphLink>> = {
  height: 800,
  width: 800,
  directed: true,
  node: {
    color: "red",
    size: 600,
    fontSize: 16,
  },
};
