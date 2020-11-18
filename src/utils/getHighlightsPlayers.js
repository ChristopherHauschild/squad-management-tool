/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-multi-assign */

const getMostPickedPlayer = (playersId) => {
  if (!playersId.length > 0) return null;

  const map = {};

  let mostPresentElement = playersId[0];
  let mostPresent = 1;

  for (let i = 0; i < playersId.length; i++) {
    const element = playersId[i];

    map[element] == null ? (map[element] = 1) : map[element]++;

    if (map[element] > mostPresent) {
      mostPresentElement = element;
      mostPresent = map[element];
    }
  }

  return mostPresentElement;
};

const getLeastPickedPlayer = (playersId) => {
  if (!playersId.length > 0) return null;

  const map = {};

  const mapping = playersId.reduce((current, element) => {
    let item = current[element];

    item ? (current[element] = ++item) : (current[element] = item = 1);

    return current;
  }, map);

  const leastPresent = Math.min(...Object.values(mapping));

  const isLeast = ([, v]) => v === leastPresent;

  const [key] = Object.entries(mapping).find(isLeast);

  return key;
};

export const getHighlightsPlayers = (teams) => {
  if (!teams?.length) {
    return { players: [], playersId: [], mostPicked: {}, leastPicked: {} };
  }

  const teamsPlayers = teams.map((team) => team.team_players) || [];

  if (!teamsPlayers?.length > 0) {
    return { players: [], playersId: [], mostPicked: {}, leastPicked: {} };
  }

  const allPlayers = [];

  teamsPlayers.forEach((tP) => {
    const players = tP || [];
    players.forEach((player) => {
      allPlayers.push(player);
    });
  });

  const playersId = allPlayers.map((player) => player.id);

  const mostPickedPlayer = getMostPickedPlayer(playersId);
  const leastPickedPlayer = getLeastPickedPlayer(playersId);

  return {
    players: allPlayers,
    playersId,
    mostPicked: mostPickedPlayer,
    leastPicked: leastPickedPlayer,
  };
};
