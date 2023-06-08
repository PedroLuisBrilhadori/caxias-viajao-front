import { GraphData } from "@antv/g6";
import { GraphComponent, Page, Select } from "../../components";

type WithDataProps = {
  data: GraphData;
};

const options = [
  { name: "inst_10" },
  { name: "inst_15" },
  { name: "inst_20" },
  { name: "inst_25" },
];

export const WithData = ({ data }: WithDataProps) => {
  return (
    <Page>
      <div className="flex flex-col">
        <div className="mx-4">
          <Select options={options} onChange={(name) => console.log(name)} />
        </div>
        <GraphComponent data={data}></GraphComponent>
      </div>
    </Page>
  );
};
