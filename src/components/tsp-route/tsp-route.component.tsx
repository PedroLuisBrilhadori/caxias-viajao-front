import { Graph, GraphData, GraphLink, GraphNode } from "react-d3-graph";

import { graphConfig } from "./graph.config";

const graphData: GraphData<GraphNode, GraphLink> = {
  nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }],
  links: [
    { source: "Harry", target: "Sally" },
    { source: "Sally", target: "Alice" },
  ],
};

export const TSPRoutesComponent = () => {
  return (
    <Graph
      id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
      data={graphData}
      config={graphConfig}
    />
  );
};
