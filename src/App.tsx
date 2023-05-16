import "./App.css";

import {
  Graph,
  GraphConfiguration,
  GraphData,
  GraphNode,
} from "react-d3-graph";

interface MyLinkNode {
  source: string;
  target: string;
  label: string;
}

const data: GraphData<GraphNode, MyLinkNode> = {
  nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }],
  links: [
    { source: "Harry", target: "Sally", label: "1" },
    { source: "Sally", target: "Alice", label: "2" },
  ],
};

const myConfig: Partial<GraphConfiguration<GraphNode, MyLinkNode>> = {
  node: {
    color: "red",
    size: 600,
    fontSize: 16,
  },
  link: {
    fontSize: 16,
    labelProperty: "label",
    renderLabel: true,
  },
};

function App() {
  return (
    <main>
      <Graph
        id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
        data={data}
        config={myConfig}
      />
    </main>
  );
}

export default App;
