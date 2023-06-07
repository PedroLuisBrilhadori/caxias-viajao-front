import "./styles/App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GraphPage, IndexPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/graph",
    element: <GraphPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
