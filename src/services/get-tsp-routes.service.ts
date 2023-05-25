import { GraphData } from "@antv/g6";
import { delay } from "../utils";

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

const img = `https://cdn.iconscout.com/icon/free/png-256/home-757-433833.png?f=webp&w=256`;

async function getTspRoutes(): Promise<TspRoute[]> {
  const locations: TspRoute[] = [
    { id: "1", label: "1", targetId: "2", x: 300, y: 150, img },
    { id: "2", label: "2", targetId: "3", x: 100, y: 150, img },
    { id: "3", label: "3", targetId: "4", x: 200, y: 200, img },
    { id: "4", label: "4", targetId: "5", x: 100, y: 300, img },
    { id: "5", label: "5", targetId: "1", x: 400, y: 300, img },
  ];

  await delay(1000);

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
