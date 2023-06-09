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
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const response = await fetch("http://localhost:5000/routes", {
    method: "POST",
    headers,
    body: JSON.stringify({
      name: "inst_10",
      cache: true,
      data: `10
      27  45
       5  96   9 430
       4  87   7  17
      67   5   8 449
      77 100  20 490
      96  24  11 428
      78  68  17 535
      91  64   6  28
      15  26   7 419
     `,
    }),
  });
  const json = await response.json();

  console.log(json);

  const locations: TspRoute[] = [];

  for (const routes of json.routes) {
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
