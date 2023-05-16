import { GraphData, GraphLink } from "react-d3-graph";

export type TspRoute = {
  id: string;
  targetId: string;
};

export type TSPGraphData = GraphData<TspRoute, GraphLink>;

export type TSPRoutesComponentProps = {
  locations: TspRoute[];
};
