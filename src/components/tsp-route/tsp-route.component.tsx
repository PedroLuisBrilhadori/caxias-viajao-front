import { Graph, GraphLink } from "react-d3-graph";
import { TSPGraphData, TSPRoutesComponentProps, TspRoute } from "./types";

import { graphConfig } from "./graph.config";

const getNodeLinks = (locations: TspRoute[]): GraphLink[] => {
  return locations.map(({ id, targetId }) => ({
    source: id,
    target: targetId,
  }));
};

export const TSPRoutesComponent = ({ locations }: TSPRoutesComponentProps) => {
  // TODO: adicionar componente para gráfico vazio
  if (locations.length === 0) return <></>;

  const graphData: TSPGraphData = {
    nodes: locations,
    links: getNodeLinks(locations),
  };

  return <Graph id="salesmen" data={graphData} config={graphConfig} />;
};
