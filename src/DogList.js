import React from "react";




function DogList({ dogs }) {

  return (
    <div className="DogList">
      {dogs.map(dog =>
        <div className={`${dog.name}`}>
          <img src={`../public/${dog.src}.jpg`} alt={`${dog.name}`} />
          <h2>{dog.name}</h2>
          <p>{dog.age}</p>
          <ul>
            {dog.facts.map(fact =>
              <li>{fact}</li>)}
          </ul>
        </div>
      )}
    </div>
  );

}

export default DogList;

///Users/k.stark/rithm/exercises/react-router-dogfinder/public/duke.jpg