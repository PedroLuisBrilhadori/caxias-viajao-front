import { Page } from "../../components";
import { getGraphData } from "../../services";
import { useQuery } from "@tanstack/react-query";
import { WithData } from "./graph";

export const GraphPage = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => getGraphData().then((data) => data),
  });

  if (isLoading)
    return (
      <Page>
        <>loading...</>
      </Page>
    );

  if (error) return <div>Error</div>;

  if (!data) return <div>Não a rotas para exibir</div>;

  return <WithData data={data} />;
};
