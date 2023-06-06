import "./styles/App.css";

import { GraphComponent, GraphRef } from "./components";
import { useEffect, useRef, useState } from "react";

import { GraphData } from "@antv/g6";
import { getGraphData } from "./services";

function App() {
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
    <main>
      <GraphComponent data={data} ref={ref}></GraphComponent>
    </main>
  );
}

export default App;
