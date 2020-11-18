/* eslint-disable */
export const getHighlightsPlayers = (teams) => {
  if (!teams?.length) {
    return { mostPicked: null, leastPicked: null };
  }

  const teamsPlayers = teams.map((team) => team.team_players || []);

  const allPlayers = [];

  teamsPlayers.forEach((tP) => {
    const players = tP || [];
    players.forEach((player) => {
      allPlayers.push(player);
    });
  });

  console.log(allPlayers);

  // return countMap;
};
