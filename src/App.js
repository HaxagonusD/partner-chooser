import "./App.css";
import Person from "./services/Person";
import { useState } from "react";
import Header from "./components/Header";
import Team from "./components/Team";

import makeTeams from "./services/makeTeams";
import Instructions from "./components/Instructions";
import Nav from "./components/Nav";

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
		<div>
			<Nav />
			<div className="flex justify-evenly h-screen bg-red p-5 w-full xl:flex-row md:flex-col sm:flex-col xs:flex-col w-1/2">
				<div className="border-b-2">
					<div className="px-2">
						<Header name={"Teamify"} />
						<Instructions />
						<div className="py-10">
							<input
								className="border border-2 rounded-r px-4 py-2"
								placeholder="Name"
								value={currentName}
								onChange={(event) => setCurrentName(event.target.value)}
							/>
							<input
								className="border border-2 rounded-r px-4 py-2"
								type="textarea"
								value={currentEnemies}
								placeholder="Opposition"
								onChange={(event) => setCurrentEnemies(event.target.value)}
							/>
							<button
								className="bg-primary hover:bg-purple-900 text-white hover:text-secondary font-bold my-5 py-2 px-3 border-b-4 border-blue-dark hover:border-blue-300 rounded"
								onClick={addPerson}
							>
								Add person
							</button>
						</div>
						<p>
							<strong>Enter a team size below:</strong>
						</p>
						<div className="add-person">
							<input
								className="border border-2 rounded-r px-4 py-2"
								type="number"
								min="0"
								placeholder="Team size"
								onChange={(event) => setNumber(event.target.value)}
							/>
							<button
								className="m-5 bg-primary hover:bg-purple-900 text-white hover:text-secondary text-white font-bold py-2 px-3 border-b-4 border-blue-dark hover:border-blue-300 rounded"
								onClick={handleMakeTeams}
							>
								Generate Team
							</button>
						</div>
					</div>
				</div>

				<div className="border-l-2 flex flex-col w-1/2">
					<div className="flex items-center flex-shrink md:flex-shrink-0 flex-col px-5 xl:w-1/2 md:w-screen">
						<Header name={"Student List"} />
						<ul>
							{people.map((person, index) => {
								return (
									<li className="my-6" key={index}>
										<p> - {person.name} was entered</p>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
			<Header name={"Generated team"} />
			<ul className="flex flex-col py-3 mt-3 justify-center items-center">
				{teams.map((currentTeam, index) => {
					return (
						<li className="my-6" key={index}>
							<Team team={currentTeam} name={index} />
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default App;
