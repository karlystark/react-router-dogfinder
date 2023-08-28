import React from "react";
import { Link } from "react-router-dom";


/** Renders a list of dogs
 *
 * Props:
 * dogs: an array of all dogs
 *
 * RouteList -> DogList
 */

function DogList({ dogs }) {

  return (
    <div className="DogList">
      {dogs.map(dog =>
        <div className={`${dog.name}`} key={dog.key}>
          <img src={`/${dog.src}.jpg`} alt={`${dog.name}`} style={{width:200}}/>
          <br></br>
          <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>

          <p>{dog.age}</p>
          <ul>
            {dog.facts.map((fact, index) =>
              <li key={index}>{fact}</li>)}
          </ul>
        </div>
      )}
    </div>
  );

}

export default DogList;

