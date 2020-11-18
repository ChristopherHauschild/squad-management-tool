import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import { FaPlus as PlusIcon } from 'react-icons/fa';

import { getTeamAvgAge } from 'utils/getTeamAvg';
import { getHighlightsPlayers } from 'utils/getHighlightsPlayers';

import useDeleteTeamConfirmation from 'components/DeleteTeamConfirmation';

import Card from 'components/Card';
import Button from 'components/Button';
import MyTeams from 'components/MyTeams';
import TopFive from 'components/TopFive';
import HighlightsPlayers from 'components/HighlightsPlayers';

const DashboardPage = ({ teams, loadingTeams }) => {
  const history = useHistory();

  const [teamToDelete, setTeamToDelete] = useState({});

  const [highestAvgTeams, setHighestAvgTeams] = useState([]);
  const [lowestAvgTeams, setLowestAvgTeams] = useState([]);

  const [mostPickedPlayer, setMostPickedPlayer] = useState({});
  const [leastPickedPlayer, setLeastPickedPlayer] = useState({});

  const { openModal, DeleteTeamConfirmationModal } = useDeleteTeamConfirmation({
    data: teamToDelete,
  });

  const addButton = useMemo(
    () => (
      <Button onClick={() => history.push('/management-team')}>
        <PlusIcon />
      </Button>
    ),
    [history]
  );

  const onButtonClick = useCallback(
    (actionType, teamData) => {
      if (actionType === 'edit') {
        history.push(`/management-team?id=${teamData?.id}`);
      } else {
        setTeamToDelete(teamData);
        openModal();
      }
    },
    [history, openModal]
  );

  const renderTeamAvg = useCallback(() => {
    if (!teams.length > 0) return;

    const averages = teams.map((team) => ({
      id: team.id,
      name: team.name,
      avgAge: getTeamAvgAge(team),
    }));

    const mappedHighests = [...averages].sort((a, b) => b.avgAge - a.avgAge);
    const mappedLowests = [...averages].sort((a, b) => a.avgAge - b.avgAge);

    const highests = mappedHighests.slice(0, 5);
    const lowests = mappedLowests.slice(0, 5);

    const currTeamAvg = (currTeam) => ({
      ...currTeam,
      avgAge: currTeam.avgAge.toFixed(1),
    });

    setHighestAvgTeams(highests.map(currTeamAvg));
    setLowestAvgTeams(lowests.map(currTeamAvg));
  }, [teams]);

  const renderHighlightsPlayers = useCallback(() => {
    const { players, playersId, mostPicked, leastPicked } = getHighlightsPlayers(teams);

    const mostPickedResults = playersId.filter((curPlayer) => curPlayer === mostPicked)
      .length;
    const leastPickedResults = playersId.filter((curPlayer) => curPlayer === leastPicked)
      .length;

    const mostPickedRating = Math.floor(100 / (teams.length / mostPickedResults));
    const leastPickedRating = Math.floor(100 / (teams.length / leastPickedResults));

    const mostPickedPlayerData = players.find(
      (curPlayer) => curPlayer.id.toString() === mostPicked.toString()
    );
    const leastPickedPlayerData = players.find(
      (curPlayer) => curPlayer.id.toString() === leastPicked.toString()
    );

    let formattedMostPickedPlayer = {};
    let formattedLeastPickedPlayer = {};

    if (!Number.isNaN(mostPickedRating)) {
      formattedMostPickedPlayer = { ...mostPickedPlayerData, rating: mostPickedRating };
    } else {
      formattedMostPickedPlayer = { ...mostPickedPlayerData };
    }

    if (!Number.isNaN(leastPickedRating)) {
      formattedLeastPickedPlayer = {
        ...leastPickedPlayerData,
        rating: leastPickedRating,
      };
    } else {
      formattedLeastPickedPlayer = { ...leastPickedPlayerData };
    }

    setMostPickedPlayer(formattedMostPickedPlayer);
    setLeastPickedPlayer(formattedLeastPickedPlayer);
  }, [teams]);

  useEffect(() => {
    renderTeamAvg();
    renderHighlightsPlayers();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [teams]);

  return (
    <Row gutter={[40, 24]}>
      {DeleteTeamConfirmationModal}

      <Col xs={24} sm={24} md={12}>
        <Card title="My teams" extraContent={addButton}>
          <MyTeams data={teams} loading={loadingTeams} onButtonClick={onButtonClick} />
        </Card>
      </Col>

      <Col xs={24} sm={24} md={12}>
        <Row gutter={[0, 24]}>
          <Col span={24}>
            <Card title="Top 5">
              <TopFive
                highests={highestAvgTeams}
                lowests={lowestAvgTeams}
                loading={loadingTeams}
              />
            </Card>
          </Col>

          <Col span={24}>
            <HighlightsPlayers
              mostPicked={mostPickedPlayer}
              leastPicked={leastPickedPlayer}
              loading={loadingTeams}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

DashboardPage.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadingTeams: PropTypes.bool.isRequired,
};

DashboardPage.defaultTypes = {
  myTeams: [],
};

export default DashboardPage;
