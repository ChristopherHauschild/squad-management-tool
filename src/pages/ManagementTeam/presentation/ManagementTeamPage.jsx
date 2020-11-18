/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';
import { useQueryParams, StringParam } from 'use-query-params';
import { Form, Input, Row, Col, Radio, Select, message } from 'antd';

import { useTeams } from 'hooks/teams';
import { useDroppedPlayers } from 'hooks/droppedPlayers';

import Card from 'components/Card';
import TeamFormation from 'components/TeamFormation';
import SoccerField from 'components/SoccerField';
import Button from 'components/Button';
import PlayerDrag from 'components/PlayerDrag';

import Loading from 'components/Loading';
import Conditional from 'components/Conditional';

import {
  Container,
  Column,
  SearchPlayers,
  LoadingContainer,
} from './ManagementTeamPage.styles';

const { TextArea } = Input;
const { Option } = Select;

const ManagementTeamPage = ({
  players,
  loadingPlayers,
  search,
  onSearch,
  fetchTeam,
  team,
  loadingTeam,
}) => {
  const { t } = useTranslation();

  const [form] = Form.useForm();

  const [query] = useQueryParams({ id: StringParam });

  const { createTeam, updateTeam } = useTeams();
  const { droppedPlayers, resetDroppedPlayers } = useDroppedPlayers();

  const [selectedFormation, setSelectedFormation] = useState(undefined);

  const editingMode = useMemo(() => {
    if (query?.id) return true;

    return false;
  }, [query]);

  const handleSearch = useCallback(
    _.debounce((event) => {
      onSearch(event.target.value);
    }, 500),
    []
  );

  const handleSelect = useCallback(
    (value) => {
      resetDroppedPlayers();
      setSelectedFormation(value);
    },
    [resetDroppedPlayers]
  );

  const loadData = useCallback(
    async (id) => {
      await fetchTeam(id);
    },
    [fetchTeam]
  );

  const onSubmit = useCallback(
    (payload) => {
      if (droppedPlayers?.length < 11) {
        message.warning('Please inform all 11 players.');
        return;
      }

      const formattedData = { ...payload, team_players: droppedPlayers };

      if (editingMode) {
        updateTeam(query?.id, formattedData);
      } else {
        createTeam(formattedData);
      }
    },
    [createTeam, updateTeam, query, editingMode, droppedPlayers]
  );

  const initialValues = useMemo(() => {
    return { ...team, formation: team?.formation || '3-4-3' };
  }, [team]);

  useEffect(() => {
    if (!query?.id) return;

    loadData(query?.id);
  }, [loadData, query]);

  return (
    <Row>
      <Col span={24}>
        <Card
          title={
            editingMode
              ? t('pages.manageTeam.titleEdit')
              : t('pages.manageTeam.titleCreate')
          }
        >
          <Conditional when={editingMode && loadingTeam}>
            <LoadingContainer>
              <Loading description="Loading team data" />
            </LoadingContainer>
          </Conditional>

          <Conditional
            when={!editingMode || (editingMode && !loadingTeam && !_.isEmpty(team))}
          >
            <Container>
              <Form
                form={form}
                layout="vertical"
                validateTrigger="finish"
                scrollToFirstError
                onFinish={onSubmit}
                initialValues={initialValues}
              >
                <h3>{t('pages.manageTeam.form.information.title')}</h3>

                <Row gutter={64}>
                  <Column xs={24} sm={24} md={12}>
                    <Form.Item
                      name="name"
                      label={t('pages.manageTeam.form.information.name')}
                      rules={[
                        { required: true, message: 'Please enter a name for the team.' },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="description"
                      label={t('pages.manageTeam.form.information.description')}
                    >
                      <TextArea rows={8} />
                    </Form.Item>
                  </Column>

                  <Column xs={24} sm={24} md={12}>
                    <Form.Item
                      name="website"
                      label={t('pages.manageTeam.form.information.website')}
                      rules={[{ type: 'url', message: 'Please enter a valid url.' }]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="type"
                      label={t('pages.manageTeam.form.information.types.title')}
                      rules={[
                        { required: true, message: 'Please select the team type.' },
                      ]}
                    >
                      <Radio.Group>
                        <Radio value="real">
                          {t('pages.manageTeam.form.information.types.real')}
                        </Radio>
                        <Radio value="fantasy">
                          {t('pages.manageTeam.form.information.types.fantasy')}
                        </Radio>
                      </Radio.Group>
                    </Form.Item>
                    <Form.Item
                      name="tags"
                      label={t('pages.manageTeam.form.information.tags')}
                    >
                      <Select mode="tags" dropdownStyle={{ display: 'none' }} />
                    </Form.Item>
                  </Column>
                </Row>

                <h3>{t('pages.manageTeam.form.configure.title')}</h3>

                <Row gutter={64}>
                  <Column xs={24} sm={24} md={24} lg={12}>
                    <Form.Item
                      className="inline-form"
                      name="formation"
                      label={t('pages.manageTeam.form.configure.formation')}
                    >
                      <Select value={selectedFormation} onChange={handleSelect}>
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
                      <TeamFormation
                        formation={
                          selectedFormation || form.getFieldValue('formation') || '3-4-3'
                        }
                      />
                    </SoccerField>

                    <Button customClassName="save-btn">
                      <strong>{t('pages.manageTeam.form.configure.save')}</strong>
                    </Button>
                  </Column>

                  <Column xs={24} sm={24} md={24} lg={12}>
                    <SearchPlayers>
                      <label htmlFor="search">
                        {t('pages.manageTeam.form.configure.players.search')}
                      </label>
                      <Input
                        id="search"
                        type="search"
                        onChange={handleSearch}
                        onKeyDown={(e) => (e.keyCode === 13 ? e.preventDefault() : '')}
                      />
                    </SearchPlayers>

                    <Conditional when={loadingPlayers}>
                      <Loading description="Loading players" />
                    </Conditional>

                    <Conditional when={!loadingPlayers && players?.length > 0}>
                      {players?.map((player) => (
                        <PlayerDrag
                          key={player.id}
                          id={player.id}
                          name={player.name}
                          nationality={player.nationality}
                          age={player.age}
                        />
                      ))}
                    </Conditional>

                    <Conditional when={!loadingPlayers && !players?.length > 0}>
                      <div>
                        <Conditional when={!search}>
                          <span>
                            {t('pages.manageTeam.form.configure.players.emptyState')}
                          </span>
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
          </Conditional>
        </Card>
      </Col>
    </Row>
  );
};

ManagementTeamPage.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object),
  loadingPlayers: PropTypes.bool.isRequired,
  search: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  fetchTeam: PropTypes.func.isRequired,
  team: PropTypes.shape(PropTypes.any),
  loadingTeam: PropTypes.bool.isRequired,
};

ManagementTeamPage.defaultProps = {
  players: [],
  team: {},
};

export default ManagementTeamPage;
