import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Tooltip as TooltipInfo } from 'antd';

import { getInitials } from 'utils/getInitials';

const PlayerInfos = ({ data }) => {
  const playerInfos = useMemo(
    () => (
      <>
        <div>
          <strong>Name: </strong> <span>{data.name}</span>
        </div>
        <div>
          <strong>Nationality: </strong> <span>{data.nationality}</span>
        </div>
        <div>
          <strong>Age: </strong> <span>{data.age}</span>
        </div>
      </>
    ),
    [data]
  );

  return (
    <TooltipInfo placement="top" title={playerInfos}>
      <strong>{getInitials(data.name)}</strong>
    </TooltipInfo>
  );
};

PlayerInfos.propTypes = {
  data: PropTypes.shape(PropTypes.any),
};

PlayerInfos.defaultProps = {
  data: {},
};

export default PlayerInfos;
