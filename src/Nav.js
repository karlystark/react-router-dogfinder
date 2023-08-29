
import React from "react";
import { NavLink } from "react-router-dom";

/** Creates a list of Nav items for each dog in the dogs list
 *
 * Props:
 * -dogs: an array of dogs
*/
function Nav( {dogs} ){


  let activeStyle = {
    "fontWeight": "bold"
  };

  return (
    <nav className="Nav">
      <p className="Nav-title">DogFinder</p>
      <NavLink to='/dogs' className="Nav-link" style={({ isActive }) =>
              isActive ? activeStyle : undefined} end>
        Home
      </NavLink>

      {dogs.map(dog => (<NavLink key={dog.key} to={`/dogs/${dog.name}`} className="Nav-link" style={({ isActive }) =>
              isActive ? activeStyle : undefined}>
        {dog.name}
      </NavLink>
      ))}
    </nav>


  )
}


export default Nav;