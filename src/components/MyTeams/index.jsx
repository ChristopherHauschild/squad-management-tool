import React from 'react';
import PropTypes from 'prop-types';

import { Table } from 'antd';

const MyTeams = ({ data, loading }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      ellipsis: true,
      width: '40%',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.name > b.name,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      ellipsis: true,
      width: '60%',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.description > b.description,
    },
  ];

  return (
    <Table
      dataSource={data}
      columns={columns}
      loading={loading}
      locale={{ emptyText: 'No data available.' }}
    />
  );
};

MyTeams.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default MyTeams;
