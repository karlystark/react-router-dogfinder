import './App.css';
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import RouteList from "./RouteList";
import Nav from "./Nav";
import axios from "axios";
import { v4 as uuid } from "uuid";

function App() {
  const [dogs, setDogs] = useState([]);

  if(!dogs.length){
   getDogs();
  }

  async function getDogs() {
    const dogInfo = await axios.get("http://localhost:5001/dogs");
    const dogInfoKey = dogInfo.data.map( dog => ({ ...dog, key: uuid() }));
    console.log(dogInfoKey);
    setDogs(dogInfoKey);
    console.log("DOGINFO", dogInfo);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <RouteList dogs={dogs} getDogs={getDogs}/>
      </BrowserRouter>
    </div>
  );
}

// (/dogs) ==> homepage that shows all the dogs (making a request to server for all dogs)
// (/dogs/:dog) ==> clicking on dog brings us to dog's individual page
// (*) ==> redirect to /dogs
export default App;
