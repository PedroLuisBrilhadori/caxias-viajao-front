/* eslint-disable react-hooks/exhaustive-deps */
import G6, { Graph, GraphData } from "@antv/g6";
import { GraphConfig, GraphRef } from "./types";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

import ReactDOM from "react-dom";
import { graphConfig } from "./graph.config";

export const GraphComponent = forwardRef(({ data }: GraphConfig, ref) => {
  const graphRef = useRef(null);
  let graph: Graph | null = null;

  useImperativeHandle(
    ref,
    (): GraphRef => ({
      refresh(data: GraphData) {
        graph?.clear();
        graph?.data(data);
        graph?.render();
      },
    })
  );

  useEffect(() => {
    if (!graph) {
      graph = new G6.Graph({
        container: ReactDOM.findDOMNode(graphRef.current) as
          | HTMLElement
          | string,
        ...graphConfig,
      });

      graph.data(data);
      graph.render();
    }
  }, [graph]);

  return <div ref={graphRef}></div>;
});
