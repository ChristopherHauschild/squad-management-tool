import React from 'react';
import PropTypes from 'prop-types';
import { Divider, Table } from 'antd';
import { FaPlus as PlusIcon } from 'react-icons/fa';

import Card from 'components/Card';
import Button from 'components/Button';

import { Header } from './styles';

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
      title: 'Venue Address',
      dataIndex: 'venue_address',
      key: 'venue_address',
      ellipsis: true,
      width: '60%',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.venue_address > b.venue_address,
    },
  ];

  return (
    <Card>
      <Header>
        <h1>My teams</h1>

        <Button>
          <PlusIcon />
        </Button>
      </Header>

      <Divider />

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
