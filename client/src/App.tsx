import { useRoutes } from "react-router-dom";
import Homepage from "./common/pages/Homepage";


function App() {
  let routes = useRoutes([
    { path: "/", element: <Homepage /> },
]);
  return routes;
}

export default App;
