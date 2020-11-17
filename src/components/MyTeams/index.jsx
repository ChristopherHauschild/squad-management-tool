import React from 'react';
import PropTypes from 'prop-types';
import { FaTrash as DeleteIcon, FaPen as EditIcon } from 'react-icons/fa';

import { Table } from 'antd';

import Conditional from 'components/Conditional';

import { Description, Button, NoDescription } from './styles';

const MyTeams = ({ data, loading, onButtonClick }) => {
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
      render: (text, record) => (
        <Description>
          <Conditional when={text}>
            <span>{text}</span>
          </Conditional>

          <Conditional when={!text}>
            <NoDescription>No description provided</NoDescription>
          </Conditional>

          <div>
            <Button type="button" onClick={() => onButtonClick('delete', record)}>
              <DeleteIcon />
            </Button>
            <Button type="button" onClick={() => onButtonClick('edit', record)}>
              <EditIcon />
            </Button>
          </div>
        </Description>
      ),
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
  onButtonClick: PropTypes.func.isRequired,
};

export default MyTeams;
