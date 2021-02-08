import "./App.css";
import Person from "./services/Person";
import { useState } from "react";
import Header from "./components/Header";
import "./css/InputPanel.css";
import "./css/DisplayPanel.css";
import Team from "./components/Team";

import makeTeams from "./services/makeTeams";

function App() {
  const [currentName, setCurrentName] = useState("");
  const [currentEnemies, setCurrentEnemies] = useState("");
  const [number, setNumber] = useState(1);
  const [people, setPeople] = useState([]);
  const [teams, setTeams] = useState([]);

  const parseCsv = (csv) => {
    let csvArray = csv.split(",");
    csvArray = csvArray[0] === "" && csvArray.length === 1 ? [] : csvArray;
    return csvArray.map((currentName) => currentName.trim());
  };

  const addPerson = () => {
    const thePerson = new Person(currentName, parseCsv(currentEnemies));
    console.log(thePerson);
    setCurrentName("");
    setCurrentEnemies("");
    setPeople([...people, thePerson]);
  };

  const handleMakeTeams = () => {
    const madeTeams = makeTeams(people, number);
    console.log(madeTeams);
    setTeams(madeTeams);
  };

  return (
    <div className="App">
      <div className="input-panel">
        <Header name={"Team Me"} />
        <div className="add-person">
          <input
            placeholder="Name"
            value={currentName}
            onChange={(event) => setCurrentName(event.target.value)}
          />

          <input
            type="textarea"
            value={currentEnemies}
            placeholder="Enemies"
            onChange={(event) => setCurrentEnemies(event.target.value)}
          />
          <button onClick={addPerson}>Add person</button>
          {people.map((person, index) => {
            return (
              <div key={index}>
                <p>{person.name}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="add-person">
        <input
          type="number"
          min="0"
          placeholder="Seperate name by commas"
          onChange={(event) => setNumber(event.target.value)}
        />
        <button onClick={handleMakeTeams}>Generate Team</button>
      </div>

      <div className="display-panel">
        <Header name={"Your generated team:"} />
        <ul>
          {teams.map((currentTeam, index) => {
            return (
              <li key={index}>
                <Team team={currentTeam} name={index} />
              </li>
            );
          })}
        </ul>
      </div>
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
