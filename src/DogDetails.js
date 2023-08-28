import { useParams, Navigate } from "react-router-dom";
import React from "react";


/** Renders details on a specific dog
 * Props:
 * -dogs: an array of dogs
 *
 * RouteList -> DogDetails
 */

function DogDetails({ dogs }) {

  const { name } = useParams();
  console.log('***name', name);
  const dog = dogs.find(dog => dog.name === name);

  if(dog === undefined){
    return <Navigate to="/"  />

  } else {

  return (
    <div className="DogList">
      <h1>{dog.name}</h1>
      <img src={`/${dog.src}.jpg`} alt={`${dog.name}`} style={{ width: 200 }} />
      <h2>{dog.age}</h2>

      <ul>
        {dog.facts.map(fact =>
          <li>{fact}</li>)}
      </ul>
    </div>
  );
}
}

export default DogDetails;