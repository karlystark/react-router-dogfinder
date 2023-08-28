import { Routes, Route, Navigate } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";


/**Renders routes to all the paths
 *
 * Props:
 * -dogs: an array of dogs
 *
 * App -> RouteList -> {DogList, DogDetails}
*/

function RouteList({ dogs }) {

  return (
    <Routes>
      <Route path="/dogs" element={<DogList dogs={dogs}/>} />
      <Route path="/dogs/:name" element={<DogDetails dogs={dogs}/>} />
      <Route path="*" element={<Navigate to="/dogs" />} />
    </Routes>
  );

}

export default RouteList;