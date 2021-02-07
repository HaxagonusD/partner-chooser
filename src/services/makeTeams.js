// given and array of people and how many memeber per team
// make random teams with people that like each other
// return an array with all the teams
export default function makeTeams(peopleArray, maxMembersPerGroup) {
  const someArray = [...peopleArray];
  const numberOfTeams = Math.ceil(someArray.length / maxMembersPerGroup);

  const teams = []; // [[][][][][][][][][]]

  for (let i = 0; i < numberOfTeams; i++) {
    const newArray = [];
    teams.push(newArray);
  }

  for (let i = 0; i < someArray.length; i++) {
    const currentPerson = someArray[i];
    console.log("loopbegings");
    console.log("teams", teams);
    var notVisitedTeams = [...Array(teams.length).keys()];

    let randomTeam;
    const condition = (currentTeamMate) =>
      currentPerson.enemies.includes(currentTeamMate.name);
    let lastRemoved;

    let placeOfVisitedTeam;
    do {
      console.log("notVisitedTeams", notVisitedTeams);
      if (notVisitedTeams.length === 0) {
        break;
      }
      placeOfVisitedTeam = Math.floor(Math.random() * notVisitedTeams.length);
      randomTeam = teams[notVisitedTeams[placeOfVisitedTeam]];
      lastRemoved = notVisitedTeams.splice(placeOfVisitedTeam, 1);
      //[] randomTeam <-- this is a good team
    } while (
      randomTeam.some(condition) ||
      randomTeam.length >= maxMembersPerGroup
    );

    // randomTeam holds a good team or we have sisted every team and we need to make a new one
    console.log("randomTeam", randomTeam);

    //randomTeam  === []
    if (notVisitedTeams.length === 0) {
      if (!randomTeam.some(condition)) {
        randomTeam.push(currentPerson);
      } else {
        teams.push([currentPerson]);
      }
    } else {
      randomTeam.push(currentPerson);
    }
  }

  return teams;
}
