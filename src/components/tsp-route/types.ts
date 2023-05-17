import {
  GraphConfiguration,
  GraphData,
  GraphLink,
  NodeLevelNodeConfiguration,
} from "react-d3-graph";

export interface TspRoute extends Partial<NodeLevelNodeConfiguration> {
  id: string;
  targetId: string;
}

export type TSPGraphData = GraphData<TspRoute, GraphLink>;

export type TSPGraphConfig = Partial<GraphConfiguration<TspRoute, GraphLink>>;

export type TSPRoutesComponentProps = {
  locations: TspRoute[];
};
