import React from 'react';
import { screen, cleanup } from '@testing-library/react';
import { renderTestWithTheme } from '../../utils/renderTestWithTheme';

import Footer from '.';

afterEach(cleanup);

describe('<Footer />', () => {
  test('Should render text', () => {
    renderTestWithTheme(<Footer />);
    const text = screen.getByText('2020 - All rights reserved');

    expect(text).toBeInTheDocument();
  });
});
