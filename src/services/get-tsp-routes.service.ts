import { TspRoute } from "@components/";
import { delay } from "../utils";

export async function getTspRoutes(): Promise<TspRoute[]> {
  const locations: TspRoute[] = [
    { id: "1", targetId: "2" },
    { id: "2", targetId: "3" },
    { id: "3", targetId: "4" },
    { id: "4", targetId: "5" },
    { id: "5", targetId: "1" },
  ];

  await delay(1000);

  return locations;
}
