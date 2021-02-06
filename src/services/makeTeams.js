// given and array of people and how many memeber per team
// make random teams with people that like each other
// return an array with all the teams
export default function makeTeams(someArray, numberMembers) {
  const peopleArray = [...someArray];
  // [[] [] [] [enemy] [enemy] ] peopleArray.length  / numberMembers rounded up
  //
  //pick a random person in the people array
  // choose a random place to put them in
  //
  // check to if any other enemies are here
  // if not pick another that's not one that we've seen
  // if we have seen all arrays make a new array with that person in it

  const howManyTeams = Math.ceil(peopleArray.length / numberMembers);
  console.log(howManyTeams);

  let teams = [];
  for (let i = 0; i < howManyTeams; i++) {
    teams.push([]);
  }
  console.log("teams", teams);
  let passes = 0;

  while (peopleArray.length !== 0) {
    let notVisitedTeams = [...Array(teams.length).keys()];
    let randomTeamIndex = Math.floor(Math.random() * notVisitedTeams.length);
    let randomPersonIndex = Math.floor(Math.random() * peopleArray.length);
    let randomTeam = teams[randomTeamIndex];
    let randomPerson = peopleArray[randomPersonIndex];
    console.log(passes++);
    console.log("RandomPersonIndex", randomPersonIndex);
    console.log("RandomTeamIndex", randomTeamIndex);
    console.log("RandomPerson", randomPerson);
    console.log("randomTeam", randomTeam);

    notVisitedTeams.splice(randomTeamIndex, 1);

    console.log("notVisitedTeams", notVisitedTeams);
    //find a good team
    //
    //[1 ,3]
    //
    //array = [2,4,5,6,7,8,9,10]
    //array[randomIndex]
    //
    const giveMe = (currentEnemy) => randomTeam.includes(currentEnemy.name);
    while (
      randomTeam.length >= numberMembers || // if the team is full
      randomPerson.enemies.some(
        // true if enemy exists in the randomTeam
        giveMe
      )
    ) {
      if (notVisitedTeams.length === 0) {
        break;
      }

      // we haven't visited all the teams
      //FIND ANOTHER FUCKING TEAM YOU BUM
      // incorrect team --- pick another team to place this person in
      //
      // notVisitedTeams = [4,13]             *
      // teams = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
      let notVisitedNewIndex = Math.floor(
        Math.random() * notVisitedTeams.length
      );
      randomTeamIndex = notVisitedTeams[notVisitedNewIndex];

      notVisitedTeams.splice(notVisitedNewIndex, 1);
      randomTeam = teams[randomTeamIndex];
    }

    //after we get out this loop we have a good team to put this person in

    if (notVisitedTeams.length !== 0) {
      randomTeam.push(randomPerson);
    } else {
      teams.push([randomPerson]);
    }
    //
    //

    notVisitedTeams = [...Array(teams.length).keys()];
    notVisitedTeams.splice(randomTeamIndex, 1);
    peopleArray.splice(randomPersonIndex, 1);
  }

  return teams;
}
