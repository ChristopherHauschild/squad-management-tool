const sum = (a, b) => a + b;

export const getTeamAvgAge = (team) => {
  const ages = team?.team_players?.map((tP) => tP.age) || [];

  const total = ages.reduce(sum, 0);

  return Number((total / ages.length).toFixed(2));
};
