import { GraphData } from "@antv/g6";

export type GraphConfig = {
  data: GraphData;
};

export type GraphRef = {
  refresh: (data: GraphData) => void;
};
