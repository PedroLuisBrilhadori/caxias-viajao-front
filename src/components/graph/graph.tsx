import G6, { Graph, GraphData } from "@antv/g6";
import { useEffect, useRef } from "react";

import ReactDOM from "react-dom";

const img = `https://cdn.iconscout.com/icon/free/png-256/home-757-433833.png?f=webp&w=256`;

const data: GraphData = {
  nodes: [
    {
      id: "node1",
      label: "1",
      x: 300,
      y: 150,
      img,
    },
    { id: "node3", label: "2", x: 100, y: 150, img },
    { id: "node2", label: "3", x: 200, y: 200, img },
  ],
  edges: [
    { source: "node1", target: "node2" },
    { source: "node2", target: "node3" },
  ],
};

export const GraphComponent = () => {
  const ref = useRef(null);
  let graph: Graph | null = null;

  useEffect(() => {
    if (!graph)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      graph = new G6.Graph({
        container: ReactDOM.findDOMNode(ref.current) as HTMLElement | string,
        width: 550,
        height: 500,
        defaultNode: {
          type: "image",
          size: [80],
          color: "#5B8FF9",
          style: {
            fill: "#9EC9FF",
            lineWidth: 3,
          },
          labelCfg: {
            style: {
              fill: "#fff",
              fontSize: 20,
            },
          },
        },
        defaultEdge: {
          style: {
            stroke: "#e2e2e2",
          },
        },
      });

    graph.data(data);
    graph.render();
  }, [graph]);

  return <div ref={ref}></div>;
};
