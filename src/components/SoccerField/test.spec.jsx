import React from 'react';
import { screen, cleanup } from '@testing-library/react';
import { renderTestWithTheme } from '../../utils/renderTestWithTheme';

import SoccerField from '.';

afterEach(cleanup);

describe('<SoccerField />', () => {
  test('Should render without customHorizontal midline by default', () => {
    renderTestWithTheme(<SoccerField />);
    const midline = screen.getByTestId('midline');

    expect(midline).toHaveStyle({ height: '100%' });
  });
  test('Should render customHorizontal midline', () => {
    renderTestWithTheme(<SoccerField customHorizontal />);
    const midline = screen.getByTestId('midline');

    expect(midline).toHaveStyle({ height: 'none' });
  });
  test('Should render children', () => {
    renderTestWithTheme(
      <SoccerField>
        <h4>Children</h4>
      </SoccerField>
    );
    const childrenText = screen.getByRole('heading');

    expect(childrenText).toBeInTheDocument();
  });
});
