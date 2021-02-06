import "./App.css";
import Person from "./services/Person";
import { useState } from "react";
import makeTeams from "./services/makeTeams";

function App() {
  const [currentName, setCurrentName] = useState("");
  const [currentEnemies, setCurrentEnemies] = useState("");
  const [number, setNumber] = useState(1);
  const [people, setPeople] = useState([]);

  const parseCsv = (csv) => {
    let csvArray = csv.split(",");
    csvArray = csvArray[0] === "" ? [] : csvArray;

    return csvArray.map((currentName) => currentName.trim());
  };

  const addPerson = () => {
    const thePerson = new Person(currentName, parseCsv(currentEnemies));
    console.log(thePerson);
    setPeople([...people, thePerson]);
  };

  const handleMakeTeams = () => {
    console.log(makeTeams(people, number));
  };

  return (
    <div className="App">
      <input
        placeholder="Name"
        onChange={(event) => setCurrentName(event.target.value)}
      />
      <input
        type="textarea"
        placeholder="Enemies"
        onChange={(event) => setCurrentEnemies(event.target.value)}
      />
      <input
        type="number"
        placeholder="Number of team members per group"
        onChange={(event) => setNumber(event.target.value)}
      />
      <button onClick={addPerson}>Add person</button>
      <button onClick={handleMakeTeams}>Make teams</button>
    </div>
  );
}

export default App;

//Person
//has name
//has list of pople that they don't want to work with
//
//Randomly partners people into groups
//
//
//
//
//
