import "./styles/App.css";

import { TSPRoutesComponent, TspRoute } from "@components/";
import { useEffect, useState } from "react";

import { getTspRoutes } from "./services";

function App() {
  const [locations, setLocations] = useState<TspRoute[]>([]);

  useEffect(() => {
    getTspRoutes().then((locations) => {
      setLocations(locations);
    });
  });

  return (
    <main>
      <TSPRoutesComponent locations={locations} />
    </main>
  );
}

export default App;
