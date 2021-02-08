import TeamMate from "./TeamMate";
function Team({ team, name }) {
  return (
    <div>
      <h2>This is team # {name}</h2>
      {team.map((teamMate, index) => {
        return <TeamMate key={index} person={teamMate} />;
      })}
    </div>
  );
}

export default Team;
