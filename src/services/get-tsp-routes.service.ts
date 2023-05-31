import { GraphData } from "@antv/g6";
import img1 from "/first.svg";
import img from "/common.svg";

export async function getGraphData(): Promise<GraphData> {
  const routes = await getTspRoutes();

  return routesToGraphData(routes);
}

type TspRoute = {
  id: string;
  label: string;
  targetId: string;
  x: number;
  y: number;
  img: string;
};

async function getTspRoutes(): Promise<TspRoute[]> {
  const response = await fetch("http://localhost:5000/routes");
  const json = await response.json();

  const locations: TspRoute[] = [];

  for (const routes of json) {
    if (routes.id != "0") locations.push({ ...routes, img });
    else locations.push({ ...routes, img: img1 });
  }

  return locations;
}

function routesToGraphData(routes: TspRoute[]): GraphData {
  const graphData: GraphData = {
    nodes: [],
    edges: [],
  };

  for (const route of routes) {
    const node = { ...route, targetId: undefined };
    graphData.nodes?.push(node);

    const edge = { source: route.id, target: route.targetId };
    graphData.edges?.push(edge);
  }

  return graphData;
}
