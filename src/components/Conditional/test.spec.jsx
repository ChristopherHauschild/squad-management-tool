import React from 'react';
import { screen, cleanup } from '@testing-library/react';
import { renderTestWithTheme } from '../../utils/renderTestWithTheme';

import Conditional from '.';

afterEach(cleanup);

describe('<Conditional />', () => {
  test('Should render children', () => {
    // eslint-disable-next-line react/no-children-prop
    renderTestWithTheme(<Conditional when children={<h4>Children</h4>} />);
    const childrenText = screen.getByRole('heading');

    expect(childrenText).toBeInTheDocument();
  });
});
