import React, { useState, useCallback, useMemo } from 'react';
import { Modal } from 'antd';

import { useTeams } from 'hooks/teams';

import Conditional from 'components/Conditional';

import { Container, Title, Button } from './styles';

const DeleteTeamConfirmation = ({ data }) => {
  const { deleteTeam } = useTeams();

  const [modalVisible, setModalVisible] = useState(false);
  const [loadingDeleteTeam, setLoadingDeleteTeam] = useState(false);

  const closeModal = useCallback(() => {
    setModalVisible(false);
  }, []);

  const openModal = useCallback(() => {
    setModalVisible(true);
  }, []);

  const onDeleteUser = useCallback(() => {
    try {
      setLoadingDeleteTeam(true);

      deleteTeam(data?.id);

      closeModal();
      setLoadingDeleteTeam(false);
    } catch (error) {
      setLoadingDeleteTeam(false);
    }
  }, [closeModal, data, deleteTeam]);

  const DeleteTeamConfirmationModal = useMemo(
    () => (
      <Modal
        closable={false}
        footer={null}
        onCancel={closeModal}
        visible={modalVisible}
        width={550}
      >
        <Container>
          <Title>
            <span>Are you sure you want to delete this team?</span>
          </Title>
          <div>
            <strong>Team:</strong> <span>{data?.name}</span>
          </div>
          <div>
            <Button type="default" onClick={closeModal} disabled={loadingDeleteTeam}>
              Cancel
            </Button>

            <Button danger onClick={onDeleteUser} disabled={loadingDeleteTeam}>
              <Conditional when={loadingDeleteTeam}>Deleting...</Conditional>
              <Conditional when={!loadingDeleteTeam}>Yes, delete</Conditional>
            </Button>
          </div>
        </Container>
      </Modal>
    ),
    [modalVisible, loadingDeleteTeam, closeModal, onDeleteUser, data]
  );

  return { openModal, closeModal, DeleteTeamConfirmationModal };
};

export default DeleteTeamConfirmation;
