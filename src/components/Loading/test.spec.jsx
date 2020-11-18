import React from 'react';
import { screen, cleanup } from '@testing-library/react';
import { renderTestWithTheme } from '../../utils/renderTestWithTheme';

import Loading from '.';

afterEach(cleanup);

describe('<Loading />', () => {
  test('Should render description text', () => {
    renderTestWithTheme(<Loading description="Description" />);
    const text = screen.getByText('Description');

    expect(text).toBeInTheDocument();
  });
});
