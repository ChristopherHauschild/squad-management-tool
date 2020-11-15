/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Form, Input, Row, Col, Radio, Select } from 'antd';

import Card from 'components/Card';
import TeamSquad from 'components/TeamSquad';
import SoccerField from 'components/SoccerField';
import Button from 'components/Button';
import Player from 'components/Player';

import Conditional from 'components/Conditional';
import Loading from 'components/Loading';

import { Container, Column, SearchPlayers } from './ManagementTeamPage.styles';

const { TextArea } = Input;
const { Option } = Select;

const ManagementTeamPage = ({ players, loadingPlayers, search, onSearchChange }) => {
  const [form] = Form.useForm();

  const handleChangeSearch = useCallback(
    _.debounce((event) => {
      onSearchChange(event.target.value);
    }, 500),
    []
  );

  return (
    <Row>
      <Col span={24}>
        <Card title="Create team">
          <Container>
            <Form form={form} layout="vertical">
              <h3>TEAM INFORMATION</h3>

              <Row gutter={64}>
                <Column xs={24} sm={24} md={12}>
                  <Form.Item name="name" label="Team name">
                    <Input />
                  </Form.Item>
                  <Form.Item name="description" label="Description">
                    <TextArea rows={8} />
                  </Form.Item>
                </Column>

                <Column xs={24} sm={24} md={12}>
                  <Form.Item name="website" label="Team website">
                    <Input />
                  </Form.Item>
                  <Form.Item name="type" label="Team Type">
                    <Radio.Group>
                      <Radio value="real">Real</Radio>
                      <Radio value="fantasy">Fantasy</Radio>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item name="tags" label="Tags">
                    <Select mode="tags" dropdownStyle={{ display: 'none' }} />
                  </Form.Item>
                </Column>
              </Row>

              <h3>CONFIGURE SQUAD</h3>

              <Row gutter={64}>
                <Column xs={24} sm={24} md={24} lg={12}>
                  <Form.Item className="inline-form" name="formation" label="Formation">
                    <Select defaultValue="3-4-3">
                      <Option value="3-4-3">3-4-3</Option>
                      <Option value="3-2-2-3">3-2-2-3</Option>
                      <Option value="3-5-2">3-5-2</Option>
                      <Option value="4-2-3-1">4-2-3-1</Option>
                      <Option value="4-3-2-1">4-3-2-1</Option>
                      <Option value="4-4-2">4-4-2</Option>
                      <Option value="4-5-1">4-5-1</Option>
                      <Option value="5-4-1">5-4-1</Option>
                    </Select>
                  </Form.Item>

                  <SoccerField customHorizontal>
                    <TeamSquad />
                  </SoccerField>

                  <Button customClassName="save-btn">
                    <strong>Save</strong>
                  </Button>
                </Column>

                <Column xs={24} sm={24} md={24} lg={12}>
                  <SearchPlayers>
                    <label htmlFor="search">Search Players</label>
                    <Input id="search" type="search" onChange={handleChangeSearch} />
                  </SearchPlayers>

                  <Conditional when={loadingPlayers}>
                    <Loading description="Loading players" />
                  </Conditional>

                  <Conditional when={!loadingPlayers && players?.length > 0}>
                    {players?.map((player) => (
                      <Player
                        key={player.id}
                        name={player.name}
                        nationality={player.nationality}
                        age={player.age}
                      />
                    ))}
                  </Conditional>

                  <Conditional when={!loadingPlayers && !players?.length > 0}>
                    <div>
                      <Conditional when={!search}>
                        <span>No players available.</span>
                      </Conditional>
                      <Conditional when={search}>
                        <span>{`No players with "${search}" found.`}</span>
                      </Conditional>
                    </div>
                  </Conditional>
                </Column>
              </Row>
            </Form>
          </Container>
        </Card>
      </Col>
    </Row>
  );
};

ManagementTeamPage.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadingPlayers: PropTypes.bool.isRequired,
  search: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default ManagementTeamPage;
