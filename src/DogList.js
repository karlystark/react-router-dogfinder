import React from "react";
import { Link } from "react-router-dom";


/** Renders a list of dogs
 *
 * Props:
 * dogs: an array of all dogs
 *
 * RouteList -> DogList
 */
//TODO: we could use something unchanging/unique as the key
function DogList({ dogs }) {

  return (
    <div className="DogList">
      {dogs.map(dog =>
        <div className={`${dog.name} DogList-container`} key={dog.key}>
          <img src={`/${dog.src}.jpg`} alt={`${dog.name}`} style={{width:200}}/>
          <br></br>
          <br></br>
          <Link to={`/dogs/${dog.name}`} className="DogList-name">{dog.name}</Link>
        </div>
      )}
    </div>
  );
}

export default DogList;

