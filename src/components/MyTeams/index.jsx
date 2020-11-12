import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { FaPlus as PlusIcon } from 'react-icons/fa';
import { Table } from 'antd';

import Button from 'components/Button';

import Card from 'components/Card';

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

  const addButton = useMemo(
    () => (
      <Button onClick={() => '!'}>
        <PlusIcon />
      </Button>
    ),
    []
  );

  return (
    <Card title="My teams" button={addButton}>
      <Table
        dataSource={data}
        columns={columns}
        loading={loading}
        locale={{ emptyText: 'No data available.' }}
      />
    </Card>
  );
};

MyTeams.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default MyTeams;
