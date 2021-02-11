import TeamMate from "./TeamMate";
function Team({ team, name }) {
	return (
		<div>
			<h2 className="font-bold uppercase text-primary">Team #: {name === 0 ? 1 : name + 1}</h2>
			{team.map((teamMate, index) => {
				return <TeamMate key={index} person={teamMate} />;
			})}
		</div>
	);
}

export default Team;
