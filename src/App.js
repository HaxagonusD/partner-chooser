import "./App.css";
import Person from "./services/Person";
import { useState } from "react";
import Header from "./components/Header";
import "./css/InputPanel.css";
import "./css/DisplayPanel.css";
import TeamMate from "./components/TeamMate";

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
			<div className="input-panel">
				<Header name={"Team Me"} />
				<input placeholder="Name" />
				<input type="textarea" placeholder="Seperate name by commas" onChange={(event) => setCurrentName(event.target.value)} />
				<input type="number" placeholder="Number of team members per group" onChange={(event) => setCurrentEnemies(event.target.value)} />
				<button onClick={addPerson}>Add person</button>
			</div>
			<div className="display-panel">
				<Header name={"Your generated team:"} />
				<TeamMate name={"Bob"} />
				<TeamMate name={"Ayman"} />
				<TeamMate name={"David"} />
				<TeamMate name={"Shafee"} />
			</div>
		</div>
	);
}

export default App;
