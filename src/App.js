import "./App.css";
import Person from "./services/Person";
import { useState } from "react";

function App() {
  const [currentName, setCurrentName] = useState("");
  const [currentEnemies, setCurrentEnemies] = useState("");
  const [people, setPeople] = useState([]);

  const parseCsv = (csv) => {
    const csvArray = csv.split(",");
    return csvArray.map((currentName) => currentName.trim());
  };

  const addPerson = () => {
    setPeople([...people, new Person(currentName, currentEnemies)]);
  };

  return (
    <div className="App">
      <input placeholder="Name" />
      <input
        type="textarea"
        placeholder="Enemies"
        onChange={(event) => setCurrentName(event.target.value)}
      />
      <input
        type="number"
        placeholder="Number of team members per group"
        onChange={(event) => setCurrentEnemies(event.target.value)}
      />
      <button onClick={addPerson}>Add person</button>
    </div>
  );
}

export default App;

//Person
//has name
//has list of pople that they don't want to work with
//
//Randomly partners people into groups
