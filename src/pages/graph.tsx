import { useEffect, useRef, useState } from "react";
import { GraphData } from "@antv/g6";

import { GraphComponent, GraphRef, Page } from "../components";
import { getGraphData } from "../services";

export const GraphPage = () => {
  const [data, setData] = useState<GraphData>({});
  const ref = useRef<GraphRef>(null);
  const renderAfterCalled = useRef(false);

  useEffect(() => {
    if (renderAfterCalled.current) {
      getGraphData().then((data) => {
        setData(data);

        if (ref.current) {
          ref.current.refresh(data);
        }
      });
    }

    renderAfterCalled.current = true;
  }, []);

  return (
    <Page>
      <GraphComponent data={data} ref={ref}></GraphComponent>
    </Page>
  );
};
