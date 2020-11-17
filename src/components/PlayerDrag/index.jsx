import React from 'react';
import { DragSource, useDrag } from 'react-dnd';
import PropTypes from 'prop-types';

import { collect } from 'App';

import { Container, Card, Data } from './styles';

export const playerSrc = {
  beginDrag(props) {
    const item = { id: props.id };
    return item;
  },
};

const PlayerDrag = (props) => {
  const { id, name, nationality, age } = props;

  const [, drag] = useDrag({
    item: { id, type: 'plyr', player: props },
  });

  const { connectDragSource } = props;

  return connectDragSource(
    <div ref={drag}>
      <Container>
        <Card>
          <div>
            <Data>
              <strong>Name:</strong> <span>{name}</span>
            </Data>
            <Data>
              <strong>Nationality:</strong> <span>{nationality}</span>
            </Data>
          </div>
          <Data>
            <strong>Age:</strong> <span>{age}</span>
          </Data>
        </Card>
      </Container>
    </div>
  );
};

PlayerDrag.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default DragSource('plyr', playerSrc, collect)(PlayerDrag);
