import React from 'react';
import { screen, cleanup } from '@testing-library/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { renderTestWithTheme } from '../../utils/renderTestWithTheme';

import PlayerDrag from '.';

afterEach(cleanup);

const mockedPLayerProps = {
  id: '1',
  name: 'Player',
  age: 18,
  nationality: 'Brazil',
};

describe('<PlayerDrag />', () => {
  test('Should render player info correctly', () => {
    renderTestWithTheme(
      <DndProvider backend={HTML5Backend}>
        <PlayerDrag {...mockedPLayerProps} />
      </DndProvider>
    );
    const playerName = screen.getByText('Player');
    const playerAge = screen.getByText('18');
    const playerNationality = screen.getByText('Brazil');

    expect(playerName).toBeInTheDocument();
    expect(playerAge).toBeInTheDocument();
    expect(playerNationality).toBeInTheDocument();
  });
});
